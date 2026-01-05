let translations = {};
let currentLang = 'pt-BR';

const browserLang = navigator.language.startsWith('pt') ? ['PT', 'pt-BR'] : ['EN', 'en-US'];

const storedLang = localStorage.getItem('lang') || browserLang || 'pt-BR';
// const savedLang = localStorage.getItem('lang') || 'pt-BR';]
 let processedStoredLang = ""
if (storedLang.length <= 1) {
        processedStoredLang = storedLang.split(',');
} else {
        processedStoredLang = storedLang;
}

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

if (processedStoredLang) {
        initI18n(processedStoredLang[1]);
} else {
        initI18n('pt-BR');
}

// const langSelect = document.getElementById('lang-select');

const select = document.querySelector('.custom-select');
const btn = document.getElementById('select-btn');

btn.innerHTML = processedStoredLang[0];

document.querySelectorAll('.options li').forEach((option) => {
        option.addEventListener('click', () => {
                btn.textContent = option.textContent;
                select.classList.remove('open');

                let selectedLang = option.dataset.value;
                let lang = selectedLang.slice(0, 2).toLocaleUpperCase();

                initI18n(selectedLang);
                localStorage.setItem('lang', [lang.toString(), selectedLang.toString()]);
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
