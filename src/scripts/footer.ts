const backToTop = document.getElementById('back-to-top')!;

window.addEventListener('scroll', () => {
    const visible = window.scrollY > 400;
    backToTop.style.opacity = visible ? '1' : '0';
    backToTop.style.pointerEvents = visible ? 'auto' : 'none';
}, { passive: true });

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
