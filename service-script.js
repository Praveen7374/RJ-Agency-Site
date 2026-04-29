// ═══════════════════════════════════════
//   RJ Marketing — service-script.js
//   Shared JS for all service pages
// ═══════════════════════════════════════

// ─── SCROLL ANIMATIONS ───
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ─── NAVBAR SCROLL ───
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initNavbar();
});
