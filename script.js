const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
        nav.style.background = '#fff';
    } else {
        nav.style.padding = '1rem 5%';
    }
});

// Booking Modal Logic
const modal = document.getElementById('bookingModal');
const bookBtn = document.querySelector('.btn-nav'); // "Book Now" button in navbar
const closeModal = document.getElementById('closeModal');

bookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks outside the box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. We will contact you shortly.');
    e.target.reset();
});
