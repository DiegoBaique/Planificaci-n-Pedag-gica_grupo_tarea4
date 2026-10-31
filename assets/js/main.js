/**
 * ==========================================================================
 * LÓGICA DE INTERACCIÓN Y COMPONENTES DINÁMICOS
 * Proyecto: Evaluación del Pensamiento Crítico con IA Gemini | UNEMI
 * Maestría en Inteligencia Artificial para la Educación
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Inicialización de Lucide Icons
  const initLucide = () => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };
  initLucide();

  // 2. Inicialización de Librería de Animaciones AOS
  const initAOS = () => {
    if (window.AOS && typeof window.AOS.init === 'function') {
      // Si el usuario prefiere movimiento reducido, desactivar animaciones de desplazamiento
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.AOS.init({
        once: false,
        duration: 1000,
        easing: 'ease',
        offset: 40,
        disable: prefersReducedMotion,
      });
    }
  };
  initAOS();

  // 3. Menú Móvil Accesible (Hamburger Menu)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = (forceState) => {
    if (!mobileMenu) return;
    const shouldOpen = forceState !== undefined ? forceState : mobileMenu.classList.contains('hidden');
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

  // Cerrar menú con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
      toggleMobileMenu(false);
      if (mobileMenuBtn) mobileMenuBtn.focus();
    }
  });

  // 4. Desplazamiento Suave y Accesible para Enlaces Internos
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Mover el foco accesible para lectores de pantalla
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
        // Actualizar URL sin salto abrupto
        history.pushState(null, '', targetId);
      }
    });
  });

  // 5. Verificación de Carga en Consola
  console.log('✓ UNEMI: Instrumento de Evaluación del Pensamiento Crítico con IA Gemini cargado correctamente.');
});

