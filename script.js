// 1. TYPING EFFECT
const text = "JavaScript | Python | Web Development | Data Analyst";
let index = 0;
const speed = 100;

function typeWriter() {
    const typingElement = document.getElementById("typing-text");
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;

// 2. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close menu when a link is clicked (Mobile fix)
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// 3. MENU TOGGLE FUNCTION (This makes the button work!)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}