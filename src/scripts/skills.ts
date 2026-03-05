/* ─────────────────────────────────────────────────────── */
/*  Tab system                                            */
/* ─────────────────────────────────────────────────────── */
const tabs = document.querySelectorAll<HTMLButtonElement>(".sk-tab");
const panels = document.querySelectorAll<HTMLElement>(".sk-panel");
const indicator = document.querySelector<HTMLElement>(".sk-indicator");

const accentBg = [
    "var(--blue)",
    "var(--pink)",
    "linear-gradient(90deg, var(--blue), var(--pink))",
];

function animateTiles(panelIdx: number) {
    const tiles = panels[panelIdx]?.querySelectorAll<HTMLElement>(".sk-tile");
    tiles?.forEach((tile, i) => {
        tile.style.setProperty("--i", String(i));
        tile.classList.remove("sk-anim");
        void tile.offsetWidth;
        tile.classList.add("sk-anim");
    });
}

function moveIndicator(tab: HTMLButtonElement, idx: number) {
    if (!indicator) return;
    indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
    indicator.style.width = `${tab.offsetWidth}px`;
    indicator.style.background = accentBg[idx] ?? "var(--blue)";
}

function activateTab(idx: number) {
    tabs.forEach((t, i) => {
        const active = i === idx;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
    });
    panels.forEach((p, i) => p.classList.toggle("is-active", i === idx));
    moveIndicator(tabs[idx], idx);
    animateTiles(idx);
}

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => activateTab(i));
});

activateTab(0);

/* ─────────────────────────────────────────────────────── */
/*  Icon theme swap                                       */
/* ─────────────────────────────────────────────────────── */
function updateIconTheme() {
    const isLight = document.documentElement.classList.contains("light");
    document
        .querySelectorAll<HTMLImageElement>(".sk-tile-icon[data-src-dark]")
        .forEach((img) => {
            const src = isLight
                ? (img.dataset.srcLight ?? img.src)
                : (img.dataset.srcDark ?? img.src);
            if (img.src !== src) img.src = src;
        });
}

updateIconTheme();

const themeObserver = new MutationObserver(updateIconTheme);
themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
});

/* ─────────────────────────────────────────────────────── */
/*  Glow parallax                                         */
/* ─────────────────────────────────────────────────────── */
const glowA = document.querySelector<HTMLElement>(".sk-glow--a");
const glowB = document.querySelector<HTMLElement>(".sk-glow--b");
window.addEventListener("mousemove", (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    glowA?.style.setProperty("transform", `translate(${dx * 22}px, ${dy * 22}px)`);
    glowB?.style.setProperty("transform", `translate(${-dx * 14}px, ${-dy * 14}px)`);
});

/* ─────────────────────────────────────────────────────── */
/*  Modal                                                 */
/* ─────────────────────────────────────────────────────── */
type Lang = 'en' | 'th';

function getLang(): Lang {
    return (localStorage.getItem('lang') as Lang) || 'en';
}

function getTranslation(key: string): string {
    const lang = getLang();
    // Try requested language first
    const langEl = document.getElementById(`i18n-${lang}`);
    const enEl = document.getElementById('i18n-en');
    try {
        const langDict: Record<string, string> = JSON.parse(langEl?.textContent ?? '{}');
        const enDict: Record<string, string> = JSON.parse(enEl?.textContent ?? '{}');
        const langVal = langDict[key];
        // Fallback to English when Thai value is missing or empty
        if (langVal !== undefined && langVal !== '') return langVal;
        return enDict[key] ?? key;
    } catch {
        return key;
    }
}


const levelLabels: Record<Lang, [string, string, string, string]> = {
    en: ['Expert', 'Advanced', 'Intermediate', 'Learning'],
    th: ['เชี่ยวชาญ', 'ขั้นสูง', 'ปานกลาง', 'กำลังเรียน'],
};

interface SkillData {
    name: string;
    slug: string | null;
    level: number;
    descKey: string;
    tags: string[];
    since: string;
    category: string;
    categoryKey: string;
    accent: 'blue' | 'pink' | 'mixed';
}

const rawData = document.getElementById("skillsData")?.textContent ?? "[]";
const skillsData: SkillData[] = JSON.parse(rawData);

const modal = document.getElementById("skillModal") as HTMLElement;
const closeBtn = document.getElementById("skillModalClose") as HTMLButtonElement;
const skmLogo = document.getElementById("skmLogo") as HTMLImageElement;
const skmLogoFb = document.getElementById("skmLogoFallback") as HTMLElement;
const skmMeta = document.getElementById("skmMeta") as HTMLElement;
const skmName = document.getElementById("skmName") as HTMLElement;
const skmSince = document.getElementById("skmSince") as HTMLElement;
const skmLevel = document.getElementById("skmLevelValue") as HTMLElement;
const skmBar = document.getElementById("skmBarFill") as HTMLElement;
const skmDesc = document.getElementById("skmDesc") as HTMLElement;
const skmTags = document.getElementById("skmTags") as HTMLElement;

const accentColors: Record<string, string> = {
    blue: "var(--blue)",
    pink: "var(--pink)",
    mixed: "var(--blue)",
};

const levelLabel = (n: number): string => {
    const labels = levelLabels[getLang()] ?? levelLabels.en;
    if (n >= 90) return labels[0];
    if (n >= 75) return labels[1];
    if (n >= 60) return labels[2];
    return labels[3];
};

function openModal(skillName: string) {
    const skill = skillsData.find((s) => s.name === skillName);
    if (!skill) return;

    const isLight = document.documentElement.classList.contains("light");
    const color = accentColors[skill.accent] ?? "var(--blue)";

    if (skill.slug) {
        skmLogo.src = isLight
            ? `https://cdn.simpleicons.org/${skill.slug}`
            : `https://cdn.simpleicons.org/${skill.slug}/ffffff`;
        skmLogo.alt = skill.name;
        skmLogo.style.display = "block";
        skmLogoFb.style.display = "none";
    } else {
        skmLogo.style.display = "none";
        skmLogoFb.textContent = "</>";
        skmLogoFb.style.display = "flex";
    }

    const categoryLabel = getTranslation(skill.categoryKey) || skill.category;
    skmMeta.textContent = categoryLabel;
    skmMeta.style.color = color;
    skmMeta.style.borderColor = color;

    skmName.textContent = skill.name;
    const usedSince = getTranslation('skills.modal.usedSince') || 'Used since';
    skmSince.textContent = `${usedSince} ${skill.since}`;

    skmLevel.textContent = `${skill.level}% — ${levelLabel(skill.level)}`;
    skmBar.style.width = "0%";
    skmBar.style.background =
        skill.accent === "mixed"
            ? "linear-gradient(90deg, var(--blue), var(--pink))"
            : color;

    const descText = getTranslation(skill.descKey) || skill.descKey;
    skmDesc.textContent = descText;

    skmTags.innerHTML = "";
    skill.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.className = "skm-tag";
        span.textContent = tag;
        span.style.setProperty("--tag-color", color);
        skmTags.appendChild(span);
    });

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            skmBar.style.width = `${skill.level}%`;
        });
    });
}

function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
}

document
    .querySelectorAll<HTMLButtonElement>(".sk-tile[data-skill]")
    .forEach((tile) => {
        tile.addEventListener("click", () => {
            const name = tile.dataset.skill ?? "";
            openModal(name);
        });
    });

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

const modalThemeObserver = new MutationObserver(() => {
    if (!modal.classList.contains("is-open")) return;
    const isLight = document.documentElement.classList.contains("light");
    const name = skmName.textContent ?? "";
    const skill = skillsData.find((s) => s.name === name);
    if (!skill?.slug) return;
    skmLogo.src = isLight
        ? `https://cdn.simpleicons.org/${skill.slug}`
        : `https://cdn.simpleicons.org/${skill.slug}/ffffff`;
});
modalThemeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
});
