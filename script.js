const translations = {};
let currentLang = "pt";

function loadTranslations(lang) {
  fetch(`${lang}.json`)
    .then((res) => res.json())
    .then((data) => {
      Object.assign(translations, data);
      translatePage();
    });
}

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

document.getElementById("language-select").addEventListener("change", (e) => {
  currentLang = e.target.value;
  loadTranslations(currentLang);
});

loadTranslations(currentLang);