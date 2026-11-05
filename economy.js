'use strict';
// Explicit, continuous reward schedule. Coins are redeemable at 1,000 = 1 € under the terms (legal.js).
const CliplyEconomy = Object.freeze({
  version: 7,
  coinsPerEuro: 1000,
  cashoutEuros: [50,60,80,100],
  firstGoal: 50000,
  // Reward factor by balance (coins): exponential segments between these knots, then the late decay from 40,000.
  knots: [[0,.3],[25000,.2],[30000,.16],[40000,.005]],
  reductionStartsAt: .8,
  factorAtReduction: .005,
  // No single prize (chest, bonus, game, multiplier ×20) above 2,500 coins.
  maxReward: 2500,
  lateDecay: 12,
  minimumReward: .1,
  maximumTailReward: 1.5,
  precision: 1000000,
  finalBrakeStarts: 45000,
  finalBrakeDivisor: 300,
  formatCoins(value) { if(typeof I18n!=='undefined')return I18n.coinNumber(value);if(value!==0&&Math.abs(value)<.01)return (value<0?'−':'')+'<0,01';const digits=Math.abs(value)>10?0:2;return value.toLocaleString('es-ES',{minimumFractionDigits:digits,maximumFractionDigits:digits}); },
  roundCoins(value) { return Math.round(value*this.precision)/this.precision; },
  factor(balance) {
    if(!Number.isFinite(balance))throw new Error('Invalid balance');
    const b=Math.max(0,Math.min(this.firstGoal,balance)),k=this.knots;
    for(let i=1;i<k.length;i++){const [from,start]=k[i-1],[to,end]=k[i];if(b<=to)return start*Math.exp(Math.log(end/start)*(b-from)/(to-from));}
    const q=(b/this.firstGoal-this.reductionStartsAt)/(1-this.reductionStartsAt);
    return this.factorAtReduction*Math.exp(-this.lateDecay*q);
  },
  tailScale(balance) { const q=Math.max(0,Math.min(1,(balance-this.finalBrakeStarts)/(this.firstGoal-this.finalBrakeStarts)));return this.finalBrakeDivisor**(-q); },
  minimumFor(base) { return Math.round(Math.min(this.maximumTailReward,Math.max(this.minimumReward,base/600*.1))*1000)/1000; },
  reward(base,balance) {
    if(!Number.isFinite(base)||base<=0)throw new Error('Invalid reward');
    const reference=Math.min(this.maxReward,Math.max(this.minimumFor(base),Math.round(base*this.factor(balance)*1000)/1000));
    return this.roundCoins(reference*this.tailScale(balance));
  },
  videoRate(balance) { return Math.max(.03,120*this.factor(balance))*this.tailScale(balance); },
  multiplierBase(balance,base=1000,maxMultiplier=20) {
    // Keep the advertised multiplication exact, including at the tail floor.
    const reference=Math.min(this.maxReward/maxMultiplier,Math.max(this.maximumTailReward/maxMultiplier,Math.round(base*this.factor(balance)*1000)/1000));
    return this.roundCoins(reference*this.tailScale(balance));
  },
  multiplierReward(base,multiplier) { return this.roundCoins(base*multiplier); },
  refreshQuotes(state) {
    const balance=state.coins;
    if(state.pendingChest){
      // Older quotes omitted their raw prize; use the largest chest rather than
      // guessing a lower prize. Already credited coins are never changed.
      state.pendingChest.baseAmount=state.pendingChest.baseAmount||8000;
      state.pendingChest.amount=this.reward(state.pendingChest.baseAmount,balance);
    }
    const offer=state.pendingOffer;
    if(offer){
      if(offer.type==='multiplier'){
        offer.base=this.multiplierBase(balance);
        if(offer.multiplier)offer.amount=this.multiplierReward(offer.base,offer.multiplier);
      }else{offer.base=this.reward(offer.type==='video'?1500:500,balance);offer.amount=offer.base;}
    }
  },
  repricePending(state) {
    if(state.economyVersion===this.version)return false;
    if(state.watch&&Number.isFinite(state.watch.pendingSeconds))state.watch.pendingCoins=this.roundCoins(state.watch.pendingSeconds*this.videoRate(state.coins));
    this.refreshQuotes(state);
    state.economyVersion=this.version;
    return true;
  },
  // Rewarded videos (Android app only, dist/ads.js): a daily ad task in Rewards (base 500, three a day) and doubling
  // a revealed chest or coin bonus. A doubled prize keeps the single-prize cap.
  ads: Object.freeze({perDay: 3, base: 500}),
  doubled(amount,balance) { return this.roundCoins(Math.max(amount,Math.min(amount*2,this.maxReward*this.tailScale(balance)))); },
  canWithdraw(balance,euros) { return this.cashoutEuros.includes(euros)&&balance>=euros*this.coinsPerEuro; }
});
