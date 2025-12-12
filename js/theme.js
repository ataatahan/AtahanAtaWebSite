// Tema Değiştirme Fonksiyonu

(function() {
  'use strict';

  const THEME_KEY = 'site-theme';
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Sayfa yüklendiğinde kaydedilmiş temayı yükle
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Eğer kaydedilmiş tema varsa onu kullan, yoksa sistem tercihini kullan
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(theme);
  }

  // Tema ayarla
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    
    // Buton ikonunu güncelle
    updateToggleIcon(theme);
  }

  // Toggle buton ikonunu güncelle
  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('.theme-icon');
    if (icon) {
      // İkon zaten CSS ile yönetiliyor, burada sadece aria-label güncelleniyor
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç');
      themeToggle.setAttribute('title', theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç');
    }
  }

  // Tema değiştir
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Event listener ekle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    
    // Klavye erişilebilirliği
    themeToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  // Sistem tema değişikliğini dinle (isteğe bağlı)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', function(e) {
    // Sadece kullanıcı manuel olarak tema seçmemişse sistem tercihini kullan
    if (!localStorage.getItem(THEME_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Sayfa yüklendiğinde temayı başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

})();

