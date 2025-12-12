// Ana sayfa JavaScript işlevleri

(function() {
  'use strict';

  // Sayfa yüklendiğinde animasyonları tetikle
  document.addEventListener('DOMContentLoaded', function() {
    // Menü linklerine loaded class'ı ekle
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add('loaded');
      }, 100 * (index + 1));
    });

    // Cursor tracking (sadece desktop için)
    if (window.matchMedia('(min-width: 769px)').matches) {
      initCursorTracking();
    }

    // Smooth scroll için anchor linkler
    initSmoothScroll();

    // Lazy loading için intersection observer
    initLazyLoading();
  });

  // Cursor tracking fonksiyonu
  function initCursorTracking() {
    const body = document.body;
    let isClicking = false;

    body.addEventListener('mousedown', function() {
      isClicking = true;
      body.classList.add('clicking');
    });

    body.addEventListener('mouseup', function() {
      isClicking = false;
      body.classList.remove('clicking');
    });

    // Mouse leave durumunda clicking'i kaldır
    body.addEventListener('mouseleave', function() {
      isClicking = false;
      body.classList.remove('clicking');
    });
  }

  // Smooth scroll fonksiyonu
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 20;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Lazy loading için intersection observer
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  // Performans: Passive event listeners
  if ('addEventListener' in document) {
    document.addEventListener('touchstart', function() {}, { passive: true });
  }
})();

