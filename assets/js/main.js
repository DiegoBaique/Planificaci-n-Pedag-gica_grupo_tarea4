/**
 * Main Application Logic & Interactivity
 * Evaluación del Pensamiento Crítico con IA Gemini
 * Maestría en IA para la Educación
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicialización de Lucide Icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // 2. Inicialización de Librería de Animaciones AOS
  if (window.AOS && typeof window.AOS.init === 'function') {
    window.AOS.init({
      once: false,
      duration: 1000,
      easing: 'ease',
      offset: 60,
    });
  }

  // 3. Menú Móvil Accesible (Hamburger Menu)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = (open) => {
    if (!mobileMenu) return;
    const shouldOpen = open !== undefined ? open : mobileMenu.classList.contains('hidden');
    if (shouldOpen) {
      mobileMenu.classList.remove('hidden');
      if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('hidden');
      if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => toggleMobileMenu(false));
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // Cerrar menú móvil con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      toggleMobileMenu(false);
      if (mobileMenuBtn) mobileMenuBtn.focus();
    }
  });

  // 4. Indicador Activo de Navegación por Scroll (Intersection Observer)
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  const sections = document.querySelectorAll('main section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('text-brand-leaf', 'font-bold');
              link.classList.remove('text-brand-forest/80');
            } else {
              link.classList.remove('text-brand-leaf', 'font-bold');
              link.classList.add('text-brand-forest/80');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => navObserver.observe(section));
  }

  // 5. Verificación de Carga y Consola Limpia
  console.log('✓ Proyecto: Evaluación del Pensamiento Crítico inicializado correctamente.');
});
