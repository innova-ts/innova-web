type LocalesFormat = {
    code: string,
    name: string,
    language: string,
    files?: string[]
}

const availableTranslations = [
    'common.json',
    'navigation.json',
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
