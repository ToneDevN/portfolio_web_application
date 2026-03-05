// ── Scroll: add glass to navbar ──────────────────────
const navbar = document.getElementById("navbar")!;
window.addEventListener(
    "scroll",
    () => {
        navbar.classList.toggle("scrolled", window.scrollY > 20);
    },
    { passive: true },
);

// ── Theme Toggle ─────────────────────────────────────
const themeBtn = document.getElementById("theme-toggle")!;
const iconSun = document.getElementById("icon-sun")!;
const iconMoon = document.getElementById("icon-moon")!;

function updateIcons() {
    const isLight = document.documentElement.classList.contains("light");
    iconSun.classList.toggle("hidden", isLight);
    iconSun.classList.toggle("block", !isLight);
    iconMoon.classList.toggle("hidden", !isLight);
    iconMoon.classList.toggle("block", isLight);
}

updateIcons();

themeBtn.addEventListener("click", () => {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    updateIcons();
});

// ── Mobile Menu ──────────────────────────────────────
const mobileBtn = document.getElementById("mobile-menu-btn")!;
const mobileMenu = document.getElementById("mobile-menu")!;

mobileBtn.addEventListener("click", () => {
    const isOpen = mobileBtn.classList.toggle("open");
    mobileMenu.style.maxHeight = isOpen ? mobileMenu.scrollHeight + "px" : "0";
});

// Close mobile menu on link click
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        mobileBtn.classList.remove("open");
        mobileMenu.style.maxHeight = "0";
    });
});
