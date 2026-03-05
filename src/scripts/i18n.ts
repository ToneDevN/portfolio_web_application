/**
 * Client-side i18n script
 * – Reads saved language preference from localStorage
 * – Applies lang="th" / lang="en" to <html>
 * – Updates all [data-i18n] elements and [data-i18n-placeholder] inputs
 * – Handles language toggle button
 */

export { };

type Lang = 'en' | 'th';

declare global {
    interface Window {
        __heroRoles?: string[];
    }
}

// ─── Translation registry (injected by Astro via inline JSON) ─────────────
let translations: Record<Lang, Record<string, string>> = { en: {}, th: {} };

function applyTranslation(lang: Lang) {
    const dict = translations[lang] || translations['en'];

    /** resolve: prefer target lang value, fallback to EN when missing or empty */
    const resolve = (key: string): string | undefined => {
        const langVal = dict[key];
        const enVal = translations['en'][key];
        // Use EN fallback when Thai value is absent or empty string
        if (langVal !== undefined && langVal !== '') return langVal;
        return enVal;
    };

    // Text content
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n!;
        const val = resolve(key);
        if (val !== undefined) el.innerHTML = val;
    });

    // Placeholder attributes
    document
        .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i18n-placeholder]')
        .forEach((el) => {
            const key = el.dataset.i18nPlaceholder!;
            const val = resolve(key);
            if (val !== undefined) el.placeholder = val;
        });

    // Aria-label attributes
    document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
        const key = el.dataset.i18nAria!;
        const val = resolve(key);
        if (val !== undefined) el.setAttribute('aria-label', val);
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update toggle button visual
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        const labelEl = btn.querySelector<HTMLElement>('.lang-label');
        if (labelEl) labelEl.textContent = lang === 'en' ? 'TH' : 'EN';
        btn.setAttribute(
            'aria-label',
            lang === 'en' ? 'Switch to Thai' : 'เปลี่ยนเป็นภาษาอังกฤษ',
        );
    }

    // Persist preference
    localStorage.setItem('lang', lang);

    // Update typing roles if hero typing animation is active
    const rolesStr = resolve('hero.roles');
    if (rolesStr) {
        window.__heroRoles = rolesStr.split(',').map((r) => r.trim());
    }
}

function getCurrentLang(): Lang {
    const stored = localStorage.getItem('lang') as Lang | null;
    // Only honour explicit user preference; default is always English
    if (stored === 'th' || stored === 'en') return stored;
    return 'en';
}

function toggleLang() {
    const current = getCurrentLang();
    applyTranslation(current === 'en' ? 'th' : 'en');
}

// ─── Initialise ───────────────────────────────────────────────────────────
function init() {
    const enEl = document.getElementById('i18n-en');
    const thEl = document.getElementById('i18n-th');
    if (enEl) translations['en'] = JSON.parse(enEl.textContent ?? '{}');
    if (thEl) translations['th'] = JSON.parse(thEl.textContent ?? '{}');

    const lang = getCurrentLang();
    applyTranslation(lang);

    const btn = document.getElementById('lang-toggle');
    btn?.addEventListener('click', toggleLang);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
