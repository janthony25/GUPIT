// Immediately log if script is running
console.log('Script is running');

// DOM Elements
const menuBtn = document.querySelector('#menuBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const closeMenuBtn = document.querySelector('#closeMenuBtn');

// Debug log to check if elements are found
console.log('menuBtn:', menuBtn);
console.log('mobileMenu:', mobileMenu);
console.log('closeMenuBtn:', closeMenuBtn);

// Very simple toggle function
function toggleMenu() {
    console.log('Toggle function called');
    if (mobileMenu) {
        console.log('Current mobile menu classes:', mobileMenu.classList);
        if (mobileMenu.classList.contains('translate-x-full')) {
            console.log('Opening menu');
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
        } else {
            console.log('Closing menu');
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('translate-x-0');
        }
    }
}

// Add click listeners with debug logs
if (menuBtn) {
    console.log('Adding click listener to menu button');
    menuBtn.onclick = (e) => {
        e.preventDefault();
        console.log('Menu button clicked');
        toggleMenu();
    };
}

if (closeMenuBtn) {
    console.log('Adding click listener to close button');
    closeMenuBtn.onclick = (e) => {
        e.preventDefault();
        console.log('Close button clicked');
        toggleMenu();
    };
}