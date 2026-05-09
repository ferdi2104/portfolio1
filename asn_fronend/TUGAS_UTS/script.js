document.addEventListener('DOMContentLoaded', function () {
  setActiveNav();
  setHeroGreeting();
  attachContactForm();
  initMobileMenu();
  initScrollReveal();
});

function setActiveNav() {
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function setHeroGreeting() {
  const greetingEl = document.getElementById('hero-greeting');
  if (!greetingEl) return;
  const hours = new Date().getHours();
  let greeting = 'Selamat datang';

  if (hours >= 4 && hours < 12) {
    greeting = 'Selamat pagi';
  } else if (hours >= 12 && hours < 18) {
    greeting = 'Selamat siang';
  } else if (hours >= 18 && hours < 22) {
    greeting = 'Selamat sore';
  } else {
    greeting = 'Selamat malam';
  }

  greetingEl.textContent = `${greeting}, selamat datang di Web3 Nexus`;
}

function attachContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert('Terima kasih! Pesan Anda telah dikirim.');
    form.reset();
  });
}

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('open');
      }
    });
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('section');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}
