type LocalesFormat = {
    code: string,
    name: string,
    language: string,
    files?: string[]
}

const availableTranslations = [
    'common.json',
    'navigation.json',
    'home.json',
    'about.json',
]

const getFiles = (locs: Array<LocalesFormat>) => {
    const nl = locs.map((locale) => {
        locale.files = availableTranslations.map((jsonFile) => {
            return `${locale.code}/${jsonFile}`;
        });
        return locale;
    });
    return nl;
}

// Check all flags in https://icon-sets.iconify.design/ (twitter emoji recomended for concistency)

export const IconsByLocale = {
    es: 'twemoji:flag-spain',
    en: 'twemoji:flag-united-states',

    // Add all the locales as you need, eg:
    // ptg: 'twemoji:flag-portugal'
    // ja: 'twemoji:flag-japan'
}


export const localeI18nOptions = {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: getFiles([
        { code: 'es', name: 'Español', language: 'es-ES' },
        { code: 'en', name: 'English', language: 'en-US' }
    ])
}
