const supportedLanguages = ['en', 'es', 'de'];
let translations = {
    "app_name": "KaiKaiGo",
    "autocomplete_search": "Autocomplete Suggestions",
    "browser": "Browser",
    "dark_mode": "Dark mode",
    "default_open_via": "Open via default",
    "font_size": "Font size",
    "language": "Display language",
    "open": "Open",
    "open_via": "Open via",
    "seach_placeholder": "Search",
    "search": "Search",
    "settings": "Settings",
    "tab": "Tab"
};
const userLanguage = navigator.language || navigator.userLanguage;
let languageCode = userLanguage.split("-")[0];
const loadLanguageFile = a => new Promise((e, t) => {
    let s = new XMLHttpRequest;
    s.open("GET", `/Translations/languages/${a}.json`, !0), s.onreadystatechange = () => {
        if (4 === s.readyState) {
            if (200 === s.status) try {
                translations = JSON.parse(s.responseText);
                e()
            } catch (l) {
                t(`Error parsing language file: ${l} `);
            } else t(`Error loading language file: ${s.statusText} `);
        }
    }, s.send()
}),
    translate = a => translations[a] || a,
    updateUIWithTranslations = () => {
        Array.from(document.querySelectorAll("[data-translate]")).forEach(a => {
            let e = a.getAttribute("data-translate");
            a.innerText = translate(e)
        })
    },
    isLanguageSupported = a => supportedLanguages.includes(a),
    loadAndTranslate = a => {
        isLanguageSupported(a) ? loadLanguageFile(a).then(updateUIWithTranslations).catch(a => console.error(a)) : (console.error(`Unsupported language: ${a} `), batteryStats())
    };
loadAndTranslate(languageCode);