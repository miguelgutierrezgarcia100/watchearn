'use strict';
// Display and redemption currency from the user's country: the device time zone first, then the region of the
// browser languages. No geolocation or network request. Coins are the same everywhere; each currency has a fixed,
// rounded value for the 50,000-coin first withdrawal, close to 50 € (listed in the terms, section 5).
const Currency = (() => {
  const goals = Object.freeze({EUR: 50, USD: 55, GBP: 45, CHF: 45, CAD: 80, AUD: 90, MXN: 1000, BRL: 300, COP: 230000, CLP: 55000, PEN: 200,
    INR: 5000, IDR: 950000, JPY: 8500, KRW: 80000, CNY: 400, TWD: 1800, HKD: 450, RUB: 4800, TRY: 2400, VND: 1500000,
    SAR: 220, AED: 210, EGP: 2800, MAD: 550, PLN: 210, SEK: 550, NOK: 600, DKK: 375});
  const byCurrency = {EUR: 'AT BE CY DE EE ES FI FR GR HR IE IT LT LU LV MT NL PT SI SK AD MC SM VA ME XK', USD: 'US PR EC SV PA AR VE GU AS VI', GBP: 'GB GG JE IM',
    CHF: 'CH LI', CAD: 'CA', AUD: 'AU', MXN: 'MX', BRL: 'BR', COP: 'CO', CLP: 'CL', PEN: 'PE', INR: 'IN', IDR: 'ID', JPY: 'JP', KRW: 'KR', CNY: 'CN', TWD: 'TW',
    HKD: 'HK', RUB: 'RU', TRY: 'TR', VND: 'VN', SAR: 'SA', AED: 'AE', EGP: 'EG', MAD: 'MA', PLN: 'PL', SEK: 'SE', NOK: 'NO SJ', DKK: 'DK FO GL'};
  const currencyOf = {};
  for (const [code, list] of Object.entries(byCurrency)) for (const country of list.split(' ')) currencyOf[country] = code;
  // IANA time zones of the countries above ("*" matches a whole family, such as Australia/*).
  const zones = {ES: 'Europe/Madrid Atlantic/Canary Africa/Ceuta', FR: 'Europe/Paris', DE: 'Europe/Berlin Europe/Busingen', IT: 'Europe/Rome', PT: 'Europe/Lisbon Atlantic/Madeira Atlantic/Azores',
    NL: 'Europe/Amsterdam', BE: 'Europe/Brussels', AT: 'Europe/Vienna', IE: 'Europe/Dublin', FI: 'Europe/Helsinki', GR: 'Europe/Athens', LU: 'Europe/Luxembourg', SK: 'Europe/Bratislava',
    SI: 'Europe/Ljubljana', EE: 'Europe/Tallinn', LV: 'Europe/Riga', LT: 'Europe/Vilnius', MT: 'Europe/Malta', HR: 'Europe/Zagreb', CY: 'Asia/Nicosia Asia/Famagusta Europe/Nicosia',
    AD: 'Europe/Andorra', MC: 'Europe/Monaco', SM: 'Europe/San_Marino', VA: 'Europe/Vatican', ME: 'Europe/Podgorica',
    GB: 'Europe/London Europe/Belfast', GG: 'Europe/Guernsey', JE: 'Europe/Jersey', IM: 'Europe/Isle_of_Man', CH: 'Europe/Zurich', LI: 'Europe/Vaduz', PL: 'Europe/Warsaw',
    SE: 'Europe/Stockholm', NO: 'Europe/Oslo Arctic/Longyearbyen', DK: 'Europe/Copenhagen Atlantic/Faroe', GL: 'America/Nuuk America/Godthab',
    RU: 'Europe/Moscow Europe/Kaliningrad Europe/Samara Europe/Volgograd Europe/Saratov Europe/Ulyanovsk Europe/Astrakhan Europe/Kirov Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr',
    TR: 'Europe/Istanbul Asia/Istanbul',
    US: 'America/New_York America/Chicago America/Denver America/Los_Angeles America/Phoenix America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak America/Boise America/Detroit America/Menominee America/Indiana/* America/Kentucky/* America/North_Dakota/* Pacific/Honolulu US/*',
    PR: 'America/Puerto_Rico',
    CA: 'America/Toronto America/Vancouver America/Edmonton America/Winnipeg America/Halifax America/St_Johns America/Regina America/Montreal America/Moncton America/Glace_Bay America/Goose_Bay America/Whitehorse America/Dawson America/Yellowknife America/Iqaluit America/Swift_Current America/Dawson_Creek America/Fort_Nelson America/Creston America/Inuvik America/Cambridge_Bay America/Rankin_Inlet America/Resolute America/Atikokan America/Thunder_Bay America/Nipigon America/Rainy_River America/Blanc-Sablon Canada/*',
    MX: 'America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Chihuahua America/Ciudad_Juarez America/Ojinaga America/Mazatlan America/Bahia_Banderas America/Hermosillo America/Tijuana',
    BR: 'America/Sao_Paulo America/Bahia America/Fortaleza America/Recife America/Belem America/Manaus America/Cuiaba America/Campo_Grande America/Porto_Velho America/Boa_Vista America/Rio_Branco America/Araguaina America/Maceio America/Santarem America/Noronha America/Eirunepe',
    AR: 'America/Argentina/* America/Buenos_Aires', CO: 'America/Bogota', CL: 'America/Santiago America/Punta_Arenas Pacific/Easter', PE: 'America/Lima', EC: 'America/Guayaquil Pacific/Galapagos',
    SV: 'America/El_Salvador', PA: 'America/Panama', VE: 'America/Caracas', AU: 'Australia/*', IN: 'Asia/Kolkata Asia/Calcutta', ID: 'Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura',
    JP: 'Asia/Tokyo', KR: 'Asia/Seoul', CN: 'Asia/Shanghai Asia/Urumqi Asia/Chongqing Asia/Harbin', TW: 'Asia/Taipei', HK: 'Asia/Hong_Kong', VN: 'Asia/Ho_Chi_Minh Asia/Saigon',
    SA: 'Asia/Riyadh', AE: 'Asia/Dubai', EG: 'Africa/Cairo', MA: 'Africa/Casablanca Africa/El_Aaiun'};
  const exact = {}, families = [];
  for (const [country, list] of Object.entries(zones)) for (const zone of list.split(' ')) zone.endsWith('/*') ? families.push([zone.slice(0, -1), country]) : exact[zone] = country;
  function countryOfZone(zone) {
    if (typeof zone !== 'string') return null;
    return exact[zone] || families.find(([prefix]) => zone.startsWith(prefix))?.[1] || null;
  }
  function regionOf(tag) {
    try { const locale = new Intl.Locale(tag); return locale.region || null; } catch { return null; }
  }
  // Country from the time zone, else the first browser language with a region, else the likely region of the first language.
  function detect(zone, languages = []) {
    let country = countryOfZone(zone);
    if (!country) country = languages.map(regionOf).find(Boolean) || null;
    if (!country && languages[0]) { try { country = new Intl.Locale(languages[0]).maximize().region || null; } catch {} }
    const code = currencyOf[country] || 'EUR';
    return {country: country || null, code};
  }
  let zone = null, languages = [];
  try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch {}
  try { languages = [...(navigator.languages?.length ? navigator.languages : [navigator.language])].filter(Boolean); } catch {}
  const found = detect(zone, languages);
  const goalCoins = 50000;
  const unitsFor = code => goals[code] ? goalCoins / goals[code] : 1000;
  const format = (value, code, locale, whole = false) => new Intl.NumberFormat(locale, {style: 'currency', currency: code, ...(whole ? {minimumFractionDigits: 0, maximumFractionDigits: 0} : {})}).format(value);
  return {
    goals, detect, countryOfZone, currencyOf: country => currencyOf[country] || null,
    code: found.code, country: found.country,
    // Coins per currency unit: 1,000 for EUR; 50,000 / goal in general.
    get coinsPerUnit() { return unitsFor(this.code); },
    coinsPerUnitFor: unitsFor,
    // Money value of a number of coins, formatted for a locale (whole: no decimals).
    money(coins, locale, {whole = false, code = this.code} = {}) { return format(coins / unitsFor(code), code, locale, whole); },
    parts(coins, locale) {
      const parts = new Intl.NumberFormat(locale, {style: 'currency', currency: this.code}).formatToParts(coins / this.coinsPerUnit);
      const at = parts.findIndex(p => p.type === 'currency');
      const number = parts.filter(p => p.type !== 'currency').map(p => p.value).join('').trim();
      return {symbol: parts[at]?.value || this.code, number, before: at === 0 || parts.slice(0, at).every(p => p.type === 'literal' || p.type === 'minusSign')};
    }
  };
})();
