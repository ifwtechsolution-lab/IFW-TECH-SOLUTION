import './style.css';

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Initial check

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Add logic for mobile menu display if needed
  });
}

// Form Submission Placeholder
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      alert('Thank you! Your message has been sent successfully.');
      contactForm.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1500);
  });
}

// Initialize Lucide Icons again just in case (though it's in index.html)
if (window.lucide) {
  window.lucide.createIcons();
}

// Stats Animation
const stats = document.querySelectorAll('.stat-number');
let animated = false;

const animateStats = () => {
  if (animated) return;
  
  const statsSection = document.querySelector('.stats');
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight - 100) {
    stats.forEach(stat => {
      const target = parseInt(stat.innerText);
      let current = 0;
      const increment = target / 50;
      const updateCount = () => {
        if (current < target) {
          current += increment;
          stat.innerText = Math.ceil(current) + (stat.innerText.includes('+') ? '+' : '');
          setTimeout(updateCount, 20);
        } else {
          stat.innerText = target + (stat.innerText.includes('+') ? '+' : '');
        }
      };
      updateCount();
    });
    animated = true;
  }
};

window.addEventListener('scroll', () => {
  animateStats();
  
  // Parallax Effect for Hero
  const heroBg = document.querySelector('.hero-bg-wrapper');
  if (heroBg) {
    let scrollPos = window.scrollY;
    heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
  }
});

// Initialize Testimonials Swiper
const swiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
