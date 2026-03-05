import { en, type TranslationKey } from './en';
import { th } from './th';

export type Lang = 'en' | 'th';

export const defaultLang: Lang = 'en';

const translations: Record<Lang, Record<TranslationKey, string>> = { en, th };

/**
 * Get a translation string by key for a given language.
 * Falls back to English when:
 *   – the key is missing in the requested language, OR
 *   – the value is an empty string (unfinished translation)
 */
export function t(lang: Lang, key: TranslationKey, vars?: Record<string, string>): string {
    const dict = translations[lang] ?? translations.en;
    const raw = dict[key];
    // Fallback to English when value is absent or empty
    let str: string = (raw !== undefined && raw !== '') ? raw : (translations.en[key] ?? key);
    if (vars) {
        for (const [k, v] of Object.entries(vars)) {
            str = str.replace(`{${k}}`, v);
        }
    }
    return str;
}


/** Build a translator bound to a given language (for use in Astro templates) */
export function useTranslations(lang: Lang) {
    return (key: TranslationKey, vars?: Record<string, string>) => t(lang, key, vars);
}

/** Get language from URL pathname, e.g. /th/about → 'th' */
export function getLangFromUrl(pathname: string): Lang {
    const [, maybeLocale] = pathname.split('/');
    if (maybeLocale === 'th') return 'th';
    return defaultLang;
}

export { en, th };
export type { TranslationKey };
