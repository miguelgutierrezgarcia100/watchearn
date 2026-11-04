'use strict';
// about.html: public page of the app. Figures in the user's language and currency, and the operator's contact data
// from legal-config.js (empty fields are left out). Static Spanish texts are translated by i18n.js from the catalog.
(() => {
  const esc = value => I18n.escape(value), t = (key, params) => esc(I18n.t(key, params)), num = value => I18n.number(value);
  const set = (selector, html) => { const node = document.querySelector(selector); if (node) node.innerHTML = html; };
  const config = typeof WatchEarnLegal !== 'undefined' ? WatchEarnLegal : {operator: {}};
  const field = key => String(config.operator?.[key] || '').trim();

  function countries() {
    let names = Legal.countries;
    try { const display = new Intl.DisplayNames([I18n.locale], {type: 'region'}); names = names.map(code => display.of(code)); } catch {}
    try { return new Intl.ListFormat(I18n.locale, {type: 'conjunction'}).format(names); } catch { return names.join(', '); }
  }

  async function render() {
    const picker = document.querySelector('[data-language]');
    if (picker) picker.innerHTML = I18n.languagePicker();
    const play = document.querySelector('#play');
    if (play?.getAttribute('href')) { play.hidden = false; document.querySelector('#play-soon').hidden = true; }

    const E = Legal.estimates, goal = I18n.money(CliplyEconomy.firstGoal, {whole: true});
    const hours = num(Math.round((E.range[0] + E.range[1]) / 2 / 100) * 100), last = num(Math.floor((E.range[0] - E.at45) / 100) * 100);
    document.title = `WatchEarn · ${I18n.t('aboutTitle')}`;
    set('#redeem', t('redeemInfo', {rate: I18n.money(1000), goal}));
    set('#hours-title', t('hoursTitle', {hours, goal}));
    set('#hours-info', t('hoursInfo', {h45: num(E.at45), last}));
    set('#payout', t('payoutNote', {n: num(Legal.payoutDays)}));
    set('#countries', t('availableIn', {countries: countries()}));
    document.querySelector('#adults').textContent = `Solo mayores de ${Legal.minAge} años`;

    await Legal.load();
    const labels = (Legal.texts[I18n.code] || Legal.texts.es).fields, email = Legal.contactEmail();
    const capital = text => text.charAt(0).toLocaleUpperCase(I18n.locale) + text.slice(1);
    set('#email', email ? `<a href="mailto:${esc(email)}">${esc(email)}</a>` : '');
    set('#operator', [['name', esc(field('name'))], ['taxId', esc(field('taxId'))], ['address', esc(field('address'))]]
      .filter(([, value]) => value).map(([key, value]) => `<dt>${esc(capital(labels[key]))}</dt><dd>${value}</dd>`).join(''));
  }

  document.addEventListener('DOMContentLoaded', render, {once: true});
  document.addEventListener('watchearn:languagechange', render);
})();
