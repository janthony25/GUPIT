const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.getElementById('header');
const menuIcon = hamburger.querySelector('.menu-icon');
const closeIcon = hamburger.querySelector('.close-icon');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Add scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('bg-[#2D2D2D]', 'shadow-lg');
        header.classList.remove('backdrop-blur-sm', 'bg-black/50');
    } else {
        header.classList.add('backdrop-blur-sm', 'bg-black/50');
        header.classList.remove('bg-[#2D2D2D]', 'shadow-lg');
    }
});