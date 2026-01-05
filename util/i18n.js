let translations = {};
let currentLang = 'pt-BR';

const browserLang = navigator.language.startsWith('pt') ? 'pt-BR' : 'en-US';

const savedLang = localStorage.getItem('lang') || browserLang || 'pt-BR';
// const savedLang = localStorage.getItem('lang') || 'pt-BR';

async function loadLanguage(lang) {
        const response = await fetch(`/i18n/${lang}.json`);
        translations = await response.json();
        currentLang = lang;
}

function t(key) {
        return translations[key] || key;
}

function updateTexts() {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
                const key = el.getAttribute('data-i18n');
                el.textContent = t(key);
        });
}

async function initI18n(lang) {
        await loadLanguage(lang);
        updateTexts();
}

if (savedLang) {
        initI18n(savedLang.slice(3, savedLang.length));
} else {
        initI18n('pt-BR');
}

// const langSelect = document.getElementById('lang-select');

const select = document.querySelector('.custom-select');
const btn = document.getElementById('select-btn');

btn.innerHTML = savedLang.slice(0, 2);

document.querySelectorAll('.options li').forEach((option) => {
        option.addEventListener('click', () => {
                btn.textContent = option.textContent;
                select.classList.remove('open');

                let selectedLang = option.dataset.value;
                let lang = selectedLang.slice(0, 2).toLocaleUpperCase();

                initI18n(selectedLang);
                localStorage.setItem('lang', [lang, selectedLang]);
        });
});

// langSelect.addEventListener('change', async (e) => {
//   const selectedLang = e.target.value;
//
//   await initI18n(selectedLang);
//   localStorage.setItem('lang', selectedLang);
// });

// langSelect.value = savedLang;
// initI18n(savedLang);

// const savedLang = localStorage.getItem('lang') || navigator.language;
