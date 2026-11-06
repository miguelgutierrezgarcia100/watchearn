'use strict';
// Legal texts (terms of use and privacy policy) in every interface language: dist/legal-text/<code>.js,
// loaded on demand, with the operator data of legal-config.js, amounts in the user's currency (currency.js) and the
// figures of economy.js. If a translation differs, the Spanish version prevails. tests/legal.test.cjs checks that every
// translation has the same structure and placeholders as the Spanish one and that the hour estimates match the economy.
const Legal = (() => {
  // 1.0: first public release on Google Play (privacy policy reorganised, third-party SDKs in section 3).
  const VERSION = '1.0', EFFECTIVE = new Date(2026, 10, 6);
  const config = typeof WatchEarnLegal !== 'undefined' ? WatchEarnLegal : {operator: {}};
  const operator = config.operator || {};
  const texts = {}, loading = {};
  // Hours of eligible watching to reach the first withdrawal (50,000 coins), counting videos only.
  const estimates = Object.freeze({at25Minutes: 15, at40: 1.6, at45: 32, at49: 800, at50: 2460, range: Object.freeze([2400, 2550])});
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const raw = key => String((key === 'hosting' ? config.hosting : operator[key]) || '').trim();
  const contactEmail = () => /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/.test(raw('email')) ? raw('email') : '';
  const missing = () => ['name', 'taxId', 'address', 'email', 'hosting'].filter(key => key === 'email' ? !contactEmail() : !raw(key));
  const minAge = () => Number(config.minAge) || 18;
  // countries: 'ALL' (every country where we can pay by PayPal and taking part is legal, except excludedCountries) or ISO codes.
  const allCountries = () => config.countries === 'ALL';
  const excludedCodes = () => Array.isArray(config.excludedCountries) ? config.excludedCountries : [];
  const countryCodes = () => allCountries() ? [] : Array.isArray(config.countries) && config.countries.length ? config.countries : ['ES'];
  const code = () => typeof I18n !== 'undefined' ? I18n.code : 'es';
  const locale = () => typeof I18n !== 'undefined' ? I18n.locale : 'es-ES';
  const text = (lang = code()) => texts[lang] || texts.es;
  const num = (value, options = {}) => new Intl.NumberFormat(locale(), options).format(value);
  const money = (coins, options = {}) => typeof Currency !== 'undefined' ? Currency.money(coins, locale(), options) : num(coins / 1000, {style: 'currency', currency: 'EUR', ...(options.whole ? {maximumFractionDigits: 0} : {})});
  const list = (items, type = 'conjunction') => { try { return new Intl.ListFormat(locale(), {type}).format(items); } catch { return items.join(', '); } };
  const regionNames = codes => { try { const display = new Intl.DisplayNames([locale()], {type: 'region'}); return codes.map(c => display.of(c)); } catch { return codes; } };
  // Eligible countries as safe HTML, in the language of the legal text t: a list of names, or the 'all countries' phrase.
  function countries(t = text()) {
    if (!allCountries()) return esc(list(regionNames(countryCodes())));
    const excluded = regionNames(excludedCodes()).sort((a, b) => a.localeCompare(b, locale()));
    const template = excluded.length ? t.allCountries : t.allCountries.replace(/\s*[(（][^()（）]*\{excluded\}[^()（）]*[)）]/, '');
    return render(template, {excluded: esc(list(excluded))});
  }

  function add(lang, data) { texts[lang] = data; }
  // Loads dist/legal-text/<lang>.js once (Spanish is always loaded); resolves even if the file is missing.
  function load(lang = code()) {
    if (texts[lang] || typeof document === 'undefined') return Promise.resolve();
    return loading[lang] ??= new Promise(resolve => {
      const script = document.createElement('script');
      script.src = `legal-text/${lang}.js`;
      script.onload = script.onerror = () => resolve();
      document.head.append(script);
    });
  }

  // Template markup: **bold**, `code`, [label](terms.html | privacy.html | https://…) and {placeholders}.
  function render(template, values) {
    return esc(template)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label, href) => /^(https:\/\/[\w.-]+\/[\w./-]*|[\w-]+\.html)$/.test(href) ? `<a href="${href}"${href.startsWith('https') ? ' rel="noopener noreferrer"' : ''}>${label}</a>` : label)
      .replace(/\{(\w+)\}/g, (match, key) => key in values ? values[key] : match);
  }
  function values(t) {
    const E = CliplyEconomy;
    const pending = key => raw(key) ? esc(raw(key)) : `<span class="legal-pending">[${esc(t.pending)}: ${esc(t.fields[key])}]</span>`;
    const pct = value => num(value, {style: 'percent', maximumFractionDigits: 1});
    const email = contactEmail() ? `<a href="mailto:${esc(contactEmail())}">${esc(contactEmail())}</a>` : pending('email');
    return {
      name: pending('name'), taxId: pending('taxId'), address: pending('address'), hosting: pending('hosting'), email,
      registry: raw('registry') ? render(t.registry, {registry: esc(raw('registry'))}) : '',
      adr: String(config.adr || '').trim() ? render(t.adrYes, {adr: esc(String(config.adr).trim())}) : esc(t.adrNo),
      countries: countries(t), age: num(minAge()),
      goal: esc(money(E.firstGoal, {whole: true})), rate: esc(money(1000)), c1: num(1000), c50: num(E.firstGoal),
      amounts: esc(list(E.cashoutEuros.map(n => money(n * 1000, {whole: true})), 'disjunction')),
      payoutDays: num(Number(config.payoutDays) || 30), noticeDays: num(Number(config.closingNoticeDays) || 30), claimDays: num(Number(config.closingClaimDays) || 60),
      range: `${num(estimates.range[0])}–${num(estimates.range[1])}`, last: num(Math.floor((estimates.range[0] - estimates.at45) / 100) * 100),
      m25: num(estimates.at25Minutes), h40: num(estimates.at40), h45: num(estimates.at45), h49: num(estimates.at49), h50: num(estimates.at50),
      c25: num(E.knots[1][0]), c30: num(E.knots[2][0]), c40: num(E.knots[3][0]), c45: num(E.finalBrakeStarts), max: num(E.maxReward), adsPerDay: num(E.ads.perDay),
      f0: pct(E.knots[0][1]), f25: pct(E.knots[1][1]), f30: pct(E.knots[2][1]), f40: pct(E.knots[3][1]),
      version: esc(VERSION), date: esc(new Intl.DateTimeFormat(locale(), {dateStyle: 'long'}).format(EFFECTIVE))
    };
  }
  function rulesHTML(t, v, balance) {
    const E = CliplyEconomy, current = Number.isFinite(balance) ? E.roundCoins(E.videoRate(balance) * 5) : null, six = {maximumFractionDigits: 6};
    return `<p>${render(t.rules.intro, v)}</p>
      ${current === null ? '' : `<div class="rules-example"><span>${esc(t.rules.reference)}</span><strong>${render(t.rules.coins, {n: num(current, six)})}</strong></div>`}
      <table class="rules-table"><thead><tr>${t.rules.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${[0, 10, 20, 25, 30, 35, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50].map(n => `<tr><td>${esc(money(n * 1000, {whole: true}))}</td><td>${num(E.roundCoins(E.videoRate(n * 1000) * 5), six)}</td><td>${num(E.reward(8000, n * 1000), six)}</td></tr>`).join('')}</tbody></table>
      <p>${render(t.rules.rounding, v)}</p>`;
  }
  function currenciesHTML() {
    const goals = typeof Currency !== 'undefined' ? Currency.goals : {EUR: 50};
    return `<p class="legal-currencies">${Object.entries(goals).map(([iso, value]) => `<span>${iso} ${esc(num(value))}</span>`).join(' · ')}</p>`;
  }
  // An operator identified by name only (legal-config.js with a name but no tax ID or address): the operator sentences
  // leave out the tax ID and address clause instead of showing them as pending. In every language that clause runs
  // from the separator before {taxId} to {address}.
  function operatorOnly(template) {
    if (!raw('name') || raw('taxId') || raw('address') || !template.includes('{taxId}')) return template;
    let out = template.replace(/(?:[,،;，、]\s*|(?<=[。.])\s*)[^,،;，、。.{}]*\{taxId\}.*?\{address\}/g, '');
    if (!raw('registry')) out = out.replace(/\{registry\}/g, '');
    return out.replace(/。。/g, '。').replace(/\.\./g, '.');
  }
  function block(item, t, v, balance) {
    if (Array.isArray(item)) return `<ul>${item.map(entry => `<li>${render(operatorOnly(entry), v)}</li>`).join('')}</ul>`;
    if (item === '{rules}') return rulesHTML(t, v, balance);
    if (item === '{currencies}') return currenciesHTML();
    return `<p>${render(operatorOnly(item), v)}</p>`;
  }
  function documentHTML(kind, {balance = null, lang = code()} = {}) {
    const t = text(lang), doc = t[kind], v = values(t);
    const note = lang !== 'es' && texts[lang] && t.note ? `<p class="legal-language-note">${esc(t.note)}</p>` : '';
    return `<div class="terms-document" lang="${texts[lang] ? lang : 'es'}">${note}
      <p class="terms-version">${render(t.version, v)}</p>${doc.intro ? `<p class="legal-intro">${render(doc.intro, v)}</p>` : ''}
      <div class="legal-summary"><p>${render(doc.summaryTitle, v)}</p><ul>${doc.summary.map(item => `<li>${render(item, v)}</li>`).join('')}</ul></div>
      ${doc.sections.map(([heading, items]) => `<h3>${esc(heading)}</h3>${items.map(item => block(item, t, v, balance)).join('')}`).join('\n')}
    </div>`;
  }
  const termsHTML = options => documentHTML('terms', options);
  const privacyHTML = options => documentHTML('privacy', options);
  const title = (kind, lang = code()) => text(lang)[kind].title;

  // Withdrawal request sent by the user's own email app (to the operator, in Spanish): the app itself sends nothing.
  function withdrawalEmail({id, coins, amount, currency = 'EUR', method, date}) {
    const to = contactEmail(), subject = `Solicitud de retirada ${id} · ${amount}`;
    const body = ['Hola:', '', 'Solicito esta retirada de WatchEarn:', '', `Código: ${id}`, `Importe: ${amount} (${currency})`, `Monedas: ${new Intl.NumberFormat('es-ES', {useGrouping: 'always'}).format(coins)}`, `Método: ${method}`, `Fecha: ${date}`, `Condiciones aceptadas: versión ${VERSION}`, '',
      method === 'Bizum' ? 'Mi número de móvil de Bizum: ' : 'Mi correo de PayPal: ', 'Nombre del titular de la cuenta: ', 'País de residencia: ', '',
      `Confirmo que tengo ${minAge()} años o más y que la cuenta de cobro está a mi nombre.`].join('\n');
    return {to, subject, body, href: to ? `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` : null};
  }

  return {VERSION, estimates, add, load, texts, missing, contactEmail, termsHTML, privacyHTML, title, withdrawalEmail, render,
    countriesText: (lang = code()) => countries(text(lang)),
    get minAge() { return minAge(); }, get payoutDays() { return Number(config.payoutDays) || 30; }, get countries() { return countryCodes(); },
    get global() { return allCountries(); }, get excludedCountries() { return excludedCodes(); }};
})();
