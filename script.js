// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const status = this.querySelector('.form-status');
  status.textContent = 'Thank you! Your message has been sent.';
  status.style.color = 'green';
  this.reset();
});
