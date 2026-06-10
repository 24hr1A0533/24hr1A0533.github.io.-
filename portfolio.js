const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
const phrases = [
    'Hire me to build better web experiences.',
    'I turn ideas into clean, working code.',
    'Driven, creative, and ready to deliver.'
];
let phraseIndex = 0;
let letterIndex = 0;
let typingForward = true;

function type() {
    if (!typedText) return;
    const current = phrases[phraseIndex];
    if (typingForward) {
        typedText.textContent = current.slice(0, letterIndex + 1);
        letterIndex++;
        if (letterIndex === current.length) {
            typingForward = false;
            setTimeout(type, 1400);
            return;
        }
    } else {
        typedText.textContent = current.slice(0, letterIndex - 1);
        letterIndex--;
        if (letterIndex === 0) {
            typingForward = true;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    setTimeout(type, typingForward ? 90 : 45);
}

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowBottom = window.innerHeight;
    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowBottom - 80) {
            element.classList.add('active');
        }
    });
}

function copyContact() {
    const email = 'cskishoreroyal@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const button = document.querySelector('.secondary-button');
        if (button) {
            button.textContent = 'Email Copied!';
            setTimeout(() => button.textContent = 'Copy Email', 1800);
        }
    }).catch(() => {
        window.prompt('Copy this email address', email);
    });
}

function showHirePrompt() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const prompt = document.createElement('div');
    prompt.className = 'hero-prompt';
    prompt.innerHTML = '<strong>Ready to hire?</strong> I am available for internships and software roles. Contact me now.';
    hero.appendChild(prompt);
    setTimeout(() => prompt.classList.add('visible'), 100);
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    type();
    revealOnScroll();
    showHirePrompt();
    const copyButton = document.querySelector('.secondary-button');
    if (copyButton) copyButton.addEventListener('click', copyContact);
});
