const translations = {};
let currentLang = 'pt';

async function loadTranslation(lang) {
  const res = await fetch(`${lang}.json`);
  translations[lang] = await res.json();
  applyTranslations(lang);
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerText = translations[lang][key] || el.innerText;
  });
}

document.getElementById('langSwitcher').addEventListener('change', (e) => {
  const lang = e.target.value;
  currentLang = lang;
  if (translations[lang]) {
    applyTranslations(lang);
  } else {
    loadTranslation(lang);
  }
});

loadTranslation(currentLang);
