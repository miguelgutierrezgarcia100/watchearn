'use strict';
// Shared script of terms.html and privacy.html: language picker and the document in the interface language.
(() => {
  const kind = document.documentElement.dataset.legal;
  async function render() {
    const picker = document.querySelector('[data-language]');
    if (picker) picker.innerHTML = I18n.languagePicker();
    await Legal.load();
    const title = Legal.title(kind);
    document.title = `${title} · WatchEarn`;
    document.querySelector('h1').textContent = title;
    document.querySelector('#legal').innerHTML = kind === 'privacy' ? Legal.privacyHTML() : Legal.termsHTML();
    document.querySelector('[data-other]').textContent = Legal.title(kind === 'privacy' ? 'terms' : 'privacy');
  }
  document.addEventListener('DOMContentLoaded', render, {once: true});
  document.addEventListener('watchearn:languagechange', render);
})();
