const animatedTextElement = document.querySelector('.animated-text');
const words = [
    "BIR KODLAYICIYIM",
    "BIR YAZILIM GELISTIRICIYIM",
    "BIR SIBER GÜVENLİK UZMANIYIM",
    "BIR WEB TASARIMCISIYIM"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = words[wordIndex];
    let displayText = '';

    if (isDeleting) {
        displayText = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        displayText = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    animatedTextElement.textContent = displayText;

    let typingSpeed = isDeleting ? 75 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});