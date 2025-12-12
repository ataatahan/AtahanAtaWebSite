// Manuel Projeler Listesi

(function() {
  'use strict';

  // Manuel proje listesi - İstediğiniz zaman burayı güncelleyebilirsiniz
  // language: Tek dil için string ('C#') veya birden fazla dil için array (['HTML', 'CSS', 'JavaScript'])
  const PROJECTS = [
    {
      title: 'PetTagAppDemo',
      link: 'https://github.com/ataatahan/PetTagAppDemo',
      description: 'Evcil hayvan takip ve yönetim sistemi. SOLID prensipleri ve Clean Architecture kullanılarak geliştirilmiştir.',
      language: ['C#', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'PhoneBookApp-ADO.NET',
      link: 'https://github.com/ataatahan/PhoneBookApp-ADO.NET',
      description: 'ADO.NET kullanılarak geliştirilmiş telefon rehberi uygulaması. CRUD işlemleri ve veritabanı yönetimi içerir.',
      language: 'C#'
    },
    {
      title: 'CarRentalOOPDemo',
      link: 'https://github.com/ataatahan/CarRentalOOPDemo',
      description: 'Nesne yönelimli programlama prensipleri ile geliştirilmiş araç kiralama sistemi demo projesi.',
      language: 'C#'
    },
    {
      title: 'S.O.L.I.D-Principles-Infographic-Tr',
      link: 'https://github.com/ataatahan/S.O.L.I.D-Principles-Infographic-Tr',
      description: 'S.O.L.I.D yazılım geliştirme prensiplerinin Türkçe infografik ve açıklamaları.',
      language: '' // Markdown içerik, dil belirtilmemiş
    },
    {
      title: 'AtahanAtaWebSite',
      link: 'https://github.com/ataatahan/AtahanAtaWebSite',
      description: 'Kişisel portfolyo web sitesi. Modern web teknolojileri ile responsive tasarım uygulanmıştır.',
      language: ['HTML', 'CSS', 'JavaScript'] // Birden fazla dil
    },
    {
      title: 'SmartHomeDeviceOOPDemo',
      link: 'https://github.com/ataatahan/SmartHomeDeviceOOPDemo',
      description: 'Nesne yönelimli programlama ile akıllı ev cihazları yönetim sistemi demo uygulaması.',
      language: 'C#'
    }
  ];

  // Sayfa yüklendiğinde projeleri göster
  document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
  });

  // Projeleri yükle ve göster
  function loadProjects() {
    const container = document.getElementById('projects-container');
    const loading = document.getElementById('projects-loading');
    const error = document.getElementById('projects-error');

    if (!container || !loading) return;

    // Loading'i gizle
    loading.style.display = 'none';
    error.style.display = 'none';
    container.innerHTML = '';

    if (PROJECTS.length === 0) {
      showNoProjects();
      return;
    }

    // Projeleri render et
    PROJECTS.forEach((project, index) => {
      const projectCard = createProjectCard(project, index);
      container.appendChild(projectCard);
    });

    // Animasyonları tetikle
    animateProjects();
  }

  // Proje kartı oluştur
  function createProjectCard(project, index) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('role', 'listitem');
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    // Dil bilgilerini işle (string veya array olabilir)
    const languages = Array.isArray(project.language) 
      ? project.language 
      : (project.language ? [project.language] : []);

    // GitHub repo adını link'ten çıkar
    const repoName = project.link.split('/').pop();

    // Dil badge'lerini oluştur
    const languageBadges = languages.map(lang => {
      const languageColor = getLanguageColor(lang);
      return `
        <span class="project-language">
          <span class="language-dot" style="background-color: ${languageColor}"></span>
          ${escapeHtml(lang)}
        </span>
      `;
    }).join('');

    card.innerHTML = `
      <div class="project-card-header">
        <h3 class="project-title">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(project.title)} projesini GitHub'da görüntüle">
            ${escapeHtml(project.title)}
          </a>
        </h3>
        ${project.description ? `<p class="project-description">${escapeHtml(project.description)}</p>` : ''}
      </div>
      
      <div class="project-card-body">
        ${languages.length > 0 ? `
          <div class="project-meta">
            ${languageBadges}
          </div>
        ` : ''}
        
        <div class="project-footer">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="${escapeHtml(project.title)} projesini görüntüle">
            GitHub'da Görüntüle →
          </a>
        </div>
      </div>
    `;

    // Animasyon delay'i
    card.style.animationDelay = `${index * 0.1}s`;

    return card;
  }

  // Dil rengi al
  function getLanguageColor(language) {
    if (!language) return '#8e8e93';
    
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'C#': '#239120',
      'Python': '#3572A5',
      'Java': '#b07219',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Swift': '#fa7343',
      'Kotlin': '#F18E33',
      'Dart': '#00B4AB',
      'Vue': '#4fc08d',
      'React': '#61dafb',
      'Angular': '#dd0031',
      'Svelte': '#ff3e00',
      'C++': '#f34b7d',
      'C': '#555555',
      'Shell': '#89e051',
      'PowerShell': '#012456',
      'Dockerfile': '#384d54',
      'Other': '#8e8e93'
    };
    return colors[language] || colors['Other'];
  }

  // HTML escape
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Proje kartlarını animasyonla göster
  function animateProjects() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      }, index * 100);
    });
  }

  // Proje yoksa mesaj göster
  function showNoProjects() {
    const container = document.getElementById('projects-container');
    const loading = document.getElementById('projects-loading');
    
    if (container && loading) {
      loading.style.display = 'none';
      container.innerHTML = `
        <div class="no-projects">
          <p>Henüz proje bulunmuyor.</p>
        </div>
      `;
    }
  }

})();
