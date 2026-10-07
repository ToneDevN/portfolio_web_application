type Lang = 'en' | 'th';

function getLang(): Lang {
    return (localStorage.getItem('lang') as Lang) || 'en';
}

function getTranslation(key: string): string {
    const lang = getLang();
    const langEl = document.getElementById(`i18n-${lang}`);
    const enEl = document.getElementById('i18n-en');
    try {
        const langDict: Record<string, string> = JSON.parse(langEl?.textContent ?? '{}');
        const enDict: Record<string, string> = JSON.parse(enEl?.textContent ?? '{}');
        const langVal = langDict[key];
        if (langVal !== undefined && langVal !== '') return langVal;
        return enDict[key] ?? key;
    } catch {
        return key;
    }
}

interface ProjectData {
    id: string;
    titleKey: string;
    descKey: string;
    category: string;
    categoryKey: string;
    tags: string[];
    accent: string;
    emoji: string;
    live: string;
    repo: string;
    featured: boolean;
    metric?: string;
}

const rawProjectsData = document.getElementById("projectsData")?.textContent ?? "[]";
const projectsData: ProjectData[] = JSON.parse(rawProjectsData);

/* ─────────────────────────────────────────────────────── */
/*  Category Filter                                       */
/* ─────────────────────────────────────────────────────── */
const filterBtns = document.querySelectorAll<HTMLButtonElement>(".prj-filter");
const projectCards = document.querySelectorAll<HTMLElement>(".prj-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter ?? "all";

        filterBtns.forEach(b => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        projectCards.forEach(card => {
            const cat = card.dataset.category;
            if (filter === "all" || cat === filter) {
                card.style.display = "";
                card.style.animation = "prjCardIn 0.35s ease forwards";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/* ─────────────────────────────────────────────────────── */
/*  Mouse Spotlight Effect                                */
/* ─────────────────────────────────────────────────────── */
projectCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });
});

/* ─────────────────────────────────────────────────────── */
/*  Project Modal                                         */
/* ─────────────────────────────────────────────────────── */
const modal = document.getElementById("projectModal") as HTMLElement;
const closeBtn = document.getElementById("projectModalClose") as HTMLButtonElement;
const prmEmoji = document.getElementById("prmEmoji") as HTMLElement;
const prmCat = document.getElementById("prmCat") as HTMLElement;
const prmTitle = document.getElementById("prmTitle") as HTMLElement;
const prmMetric = document.getElementById("prmMetric") as HTMLElement;
const prmDesc = document.getElementById("prmDesc") as HTMLElement;
const prmTags = document.getElementById("prmTags") as HTMLElement;
const prmLive = document.getElementById("prmLive") as HTMLAnchorElement;
const prmRepo = document.getElementById("prmRepo") as HTMLAnchorElement;

function openProjectModal(id: string) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    prmEmoji.textContent = project.emoji;
    prmCat.textContent = getTranslation(project.categoryKey) || project.category;
    prmTitle.textContent = getTranslation(project.titleKey) || project.id;
    prmDesc.textContent = getTranslation(project.descKey) || '';

    if (project.metric) {
        prmMetric.textContent = project.metric;
        prmMetric.style.display = "inline-block";
    } else {
        prmMetric.style.display = "none";
    }

    prmTags.innerHTML = "";
    project.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "skill-tag text-xs";
        span.textContent = tag;
        prmTags.appendChild(span);
    });

    prmLive.href = project.live;
    prmRepo.href = project.repo;

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
}

projectCards.forEach(card => {
    card.addEventListener("click", (e) => {
        // Prevent modal open when clicking direct demo/code links
        if ((e.target as HTMLElement).closest(".prj-btn")) return;
        const id = card.dataset.projectId;
        if (id) openProjectModal(id);
    });
});

closeBtn?.addEventListener("click", closeProjectModal);

modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("is-open")) closeProjectModal();
});
