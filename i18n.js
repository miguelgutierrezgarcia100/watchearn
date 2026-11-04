'use strict';
// Local bundled translations: no translation API, geolocation or tracking.
const I18n = (() => {
  const catalog = window.WatchEarnLocales;
  const languages = [
    ['en','English'],['es','Español'],['pt','Português'],['fr','Français'],['de','Deutsch'],['it','Italiano'],
    ['ru','Русский'],['ar','العربية'],['hi','हिन्दी'],['id','Bahasa Indonesia'],
    ['zh-Hans','简体中文'],['zh-Hant','繁體中文'],['ja','日本語'],['ko','한국어'],['tr','Türkçe'],['vi','Tiếng Việt']
  ];
  const supported = new Set(languages.map(([code]) => code));
  const storageKey = 'watchearn-language';
  function match(tag) {
    if (typeof tag !== 'string') return null;
    const parts = tag.replace(/_/g,'-').toLowerCase().split('-');
    if (parts[0] === 'zh') return parts.includes('hant') || (!parts.includes('hans') && parts.some(p=>['tw','hk','mo'].includes(p))) ? 'zh-Hant' : 'zh-Hans';
    const base = parts[0] === 'in' ? 'id' : parts[0];
    return supported.has(base) ? base : null;
  }
  function detect(preferences) {
    for (const tag of preferences || []) { const code = match(tag); if (code) return {code, tag: tag.replace(/_/g,'-')}; }
    return {code:'en', tag:'en'};
  }
  let preference = 'auto';
  try { const saved=localStorage.getItem(storageKey); if(saved==='auto'||supported.has(saved))preference=saved; } catch {}
  let code, locale;
  function resolve() {
    const detected = preference==='auto' ? detect(navigator.languages?.length ? navigator.languages : [navigator.language]) : {code:preference,tag:preference};
    code=detected.code;
    try { locale=new Intl.NumberFormat(detected.tag).resolvedOptions().locale; } catch { locale=code; }
    document.documentElement.lang=code;
    document.documentElement.dir=code==='ar'?'rtl':'ltr';
  }
  resolve();
  function t(key, params={}) {
    const message=catalog[key]?.[code] ?? catalog[key]?.en ?? key;
    return message.replace(/\{(\w+)\}/g,(_,name)=>String(params[name]??`{${name}}`));
  }
  function number(value, options={}) { return new Intl.NumberFormat(locale,options).format(value); }
  // Money in the user's currency (currency.js); 1,000 coins = 1 € when it is not loaded.
  function money(coins, options={}) { if(typeof Currency!=='undefined')return Currency.money(coins,locale,options);const digits=options.whole?0:2;return new Intl.NumberFormat(locale,{style:'currency',currency:'EUR',minimumFractionDigits:digits,maximumFractionDigits:digits}).format(coins/1000); }
  function coinNumber(value) { if(value!==0&&Math.abs(value)<.01)return (value<0?'−':'')+'<'+number(.01,{minimumFractionDigits:2,maximumFractionDigits:2});const digits=Math.abs(value)>10?0:2;return number(value,{minimumFractionDigits:digits,maximumFractionDigits:digits}); }
  function escape(value) { return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function languagePicker() { return `<label class="language-row"><span>${escape(t('language'))}</span><select class="language-select" aria-label="${escape(t('language'))}" data-language-select><option value="auto" ${preference==='auto'?'selected':''}>${escape(t('auto'))}</option>${languages.map(([id,name])=>`<option lang="${id}" value="${id}" ${preference===id?'selected':''}>${name}</option>`).join('')}</select></label>`; }
  const aliases = {
    'Recompensa diaria':'todayReward','Tus clips guardados':'saved','Ver clips guardados':'saved',
    'Regalo de monedas':'gift','Ruleta diaria':'wheel','Tarjeta rasca y descubre':'scratch',
    'Tarea: ver 30 segundos':'watchTask','Tarea: 3 favoritos':'likeTask','Tarea: agua':'waterTask','Tarea: ver 3 clips':'watchClipsTask','Tarea: guardar un clip':'saveClipTask',
    'Visionado':'watchTime','Visionado · Tramo final':'watchTime',
    '3 giros al día':'dailyLimit','Has completado tus giros de hoy':'dailyLimit',
    'Has completado tus giros de hoy. Vuelve mañana para otros tres.':'comeTomorrow',
    'Has descubierto todas las tarjetas de hoy.':'dailyLimit','Mañana tendrás tres nuevas.':'daily',
    'RASCA':'scratch','Rasca la tarjeta o usa el botón Descubrir':'reveal','Reproducir':'play',
    'Navegación de escritorio':'clips','Navegación principal':'clips','WatchEarn, inicio':'clips',
    'Desliza para cambiar de vídeo':'swipe','Abrir cartera y progreso hacia 50 euros':'goalProgress',
    'Base':'base','Clips':'clips','Este clip de muestra no tiene audio':'soundOff',
    'Comparte la dirección de WatchEarn desde tu navegador':'share',
    'A veces, perderse':'autumn','es el mejor plan.':'autumn',
    'Un momento para bajar el ritmo. 🍂':'autumn','Una pausa a pie de campo. ⚾':'baseball','Un momento de concentración en el aula. 📚':'classroom',
    'PEQUEÑAS ESCAPADAS':'clips','DENTRO DEL JUEGO':'clips','PEQUEÑOS GRANDES MOMENTOS':'clips'
  };
  const exact = new Map(Object.entries(catalog).filter(([,v])=>!v.es.includes('{')).map(([key,v])=>[v.es,key]));
  for(const [source,key] of Object.entries(aliases))exact.set(source,key);
  const escapeRegExp=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  // {n} matches numbers and amounts, including the symbol of the user's currency in the current locale (US$, ¥, R$…).
  let templates=[],templatesLocale=null;
  function buildTemplates(){
    let symbol='';try{if(typeof Currency!=='undefined')symbol=Currency.parts(1,locale).symbol;}catch{}
    const digits='((?:[+−–<×\\d٠-٩۰-۹०-९\\s.,٬٫€%:/—\\u200e\\u200f\\u061c\\u2066-\\u2069-]'+(symbol?'|'+escapeRegExp(symbol):'')+')+)';
    templates=Object.entries(catalog).filter(([,v])=>v.es.includes('{n}')).sort((a,b)=>b[1].es.length-a[1].es.length).map(([key,v])=>({key,re:new RegExp('^'+v.es.split('{n}').map(escapeRegExp).join(digits)+'$','u')}));
    templatesLocale=locale;
  }
  function text(source) {
    if(code==='es'||!source?.trim())return source;
    const normalized=source.trim().replace(/\s+/g,' '), key=exact.get(normalized);
    let output;
    if(key)output=t(key);
    else {
      if(templatesLocale!==locale)buildTemplates();
      for(const item of templates){const m=normalized.match(item.re);if(m){output=t(item.key,{n:m[1]});break;}}
      if(output===undefined){
        let m;
        if((m=normalized.match(/^\+(.*?) monedas recogidas$/)))output='+'+t('coins',{n:m[1]});
        else if((m=normalized.match(/^Ruleta · \+(.*?) monedas$/)))output=t('wheel')+' · +'+t('coins',{n:m[1]});
        else if((m=normalized.match(/^Otro giro · (.*?) disponibles$/)))output=t('spin')+' · '+t('available',{n:m[1]});
        else if((m=normalized.match(/^Otra tarjeta · (.*?) disponibles$/)))output=t('scratch')+' · '+t('available',{n:m[1]});
        else if((m=normalized.match(/^Abrir cofre (\d+)$/)))output=t('chest',{n:number(Number(m[1]))});
        else if((m=normalized.match(/^Seleccionar (.+)$/)))output=m[1];
        else if((m=normalized.match(/^Te quedan (\d+) giros hoy\. Todos los premios tienen la misma probabilidad\.$/)))output=t('available',{n:m[1]})+' · '+t('odds')+' 1/6';
        else if((m=normalized.match(/^Pasa el dedo sobre la tarjeta para descubrir tus monedas\. (\d+) tarjetas disponibles hoy\.$/)))output=t('scratch')+' · '+t('available',{n:m[1]});
        else if((m=normalized.match(/^Premios actuales: (.*?) · Probabilidad: 1 de 6$/)))output=t('rewards')+': '+m[1]+' · '+t('odds')+': 1/6';
        else if((m=normalized.match(/^Posibles premios: (.*?) monedas\. Probabilidad: 1 de 3\.$/)))output=t('rewards')+': '+m[1]+' · '+t('odds')+': 1/3';
        else if(normalized==='6 premios equiprobables · 3 giros al día')output=t('odds')+' 1/6 · '+t('perDay',{n:number(3)});
      }
    }
    if(output===undefined && normalized.includes(' · ')){const parts=normalized.split(' · ');const translated=parts.map(part=>text(part));if(translated.some((part,i)=>part!==parts[i]))output=translated.join(' · ');}
    if(output===undefined){const parts=normalized.split(/(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚ])/u);if(parts.length>1){const translated=parts.map(part=>text(part));if(translated.some((part,i)=>part!==parts[i]))output=translated.join(' ');}}
    return output===undefined?source:source.slice(0,source.indexOf(source.trim()))+output+source.slice(source.lastIndexOf(source.trim())+source.trim().length);
  }
  const originals=new WeakMap(), attributes=new WeakMap();
  function skip(node){return node.parentElement?.closest('script,style,svg,canvas,code,[data-no-i18n],.language-select');}
  function translate(root=document.body) {
    if(!root)return;
    const translateNode=node=>{
      if(skip(node))return;
      const previous=originals.get(node), current=node.nodeValue;
      if(previous && current===previous.rendered)return;
      const source=previous&&current===previous.source?previous.source:current;
      const rendered=text(source);
      originals.set(node,{source,rendered});if(rendered!==current)node.nodeValue=rendered;
    };
    if(root.nodeType===3){translateNode(root);return;}
    if(root.nodeType!==1&&root.nodeType!==9)return;
    const walker=document.createTreeWalker(root,4);let node;while((node=walker.nextNode()))translateNode(node);
    const nodes=[...(root.nodeType===1?[root]:[]),...root.querySelectorAll('[aria-label],[title],[placeholder],[alt]')];
    for(const el of nodes){if(el.closest('script,style,svg,[data-no-i18n],.language-select'))continue;const saved=attributes.get(el)||{};
      for(const attr of ['aria-label','title','placeholder','alt']){if(!el.hasAttribute(attr))continue;const current=el.getAttribute(attr),previous=saved[attr];if(previous&&current===previous.rendered)continue;const source=previous&&current===previous.source?previous.source:current,rendered=text(source);saved[attr]={source,rendered};if(rendered!==current)el.setAttribute(attr,rendered);}
      attributes.set(el,saved);
    }
  }
  function retranslate() {
    // Restore source before translating to a different locale.
    const walker=document.createTreeWalker(document.body,4);let node;while((node=walker.nextNode())){const saved=originals.get(node);if(saved&&node.nodeValue===saved.rendered)node.nodeValue=saved.source;originals.delete(node);}
    for(const el of document.querySelectorAll('[aria-label],[title],[placeholder],[alt]')){const saved=attributes.get(el);if(saved)for(const [attr,value]of Object.entries(saved)){if(el.getAttribute(attr)===value.rendered)el.setAttribute(attr,value.source);}attributes.delete(el);}
    translate();
  }
  function setLanguage(value) {
    if(value!=='auto'&&!supported.has(value))return false;
    preference=value;try{localStorage.setItem(storageKey,value);}catch{}
    resolve();retranslate();document.dispatchEvent(new CustomEvent('watchearn:languagechange'));
    return true;
  }
  function boot(){
    translate();
    new MutationObserver(records=>{for(const record of records){if(record.type==='characterData')translate(record.target);else if(record.type==='attributes')translate(record.target);else for(const node of record.addedNodes)translate(node);}}).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','placeholder','alt']});
    document.addEventListener('change',event=>{if(event.target.matches('[data-language-select]'))setLanguage(event.target.value);});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
  window.addEventListener('languagechange',()=>{if(preference==='auto'){resolve();retranslate();document.dispatchEvent(new CustomEvent('watchearn:languagechange'));}});
  return {get code(){return code;},get locale(){return locale;},get preference(){return preference;},languages,match,detect,t,text,number,money,coinNumber,escape,languagePicker,setLanguage,translate};
})();
