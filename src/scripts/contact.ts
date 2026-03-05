export { };

const form = document.getElementById('contact-form') as HTMLFormElement;
const btnText = document.getElementById('btn-text')!;
const formStatus = document.getElementById('form-status')!;

type Lang = 'en' | 'th';

function getLang(): Lang {
    return (localStorage.getItem('lang') as Lang) || 'en';
}

const msgSending: Record<Lang, string> = {
    en: 'Sending...',
    th: 'กำลังส่ง...',
};
const msgSent: Record<Lang, string> = {
    en: '✓ Message Sent!',
    th: '✓ ส่งแล้ว!',
};
const msgSuccess: Record<Lang, string> = {
    en: "Thanks! I'll reply within 24 hours.",
    th: 'ขอบคุณ! จะตอบกลับภายใน 24 ชั่วโมง',
};
const msgDefault: Record<Lang, string> = {
    en: 'Send Message',
    th: 'ส่งข้อความ',
};

form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = getLang();
    btnText.textContent = msgSending[lang];
    await new Promise((r) => setTimeout(r, 1500));
    btnText.textContent = msgSent[lang];
    formStatus.textContent = msgSuccess[lang];
    formStatus.style.color = 'var(--blue)';
    formStatus.classList.remove('hidden');
    form.reset();
    setTimeout(() => {
        btnText.textContent = msgDefault[lang];
        formStatus.classList.add('hidden');
    }, 5000);
});
