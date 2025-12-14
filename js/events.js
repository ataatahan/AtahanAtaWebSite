// Manuel Etkinlikler Listesi

(function() {
  'use strict';

  // Manuel etkinlik listesi - İstediğiniz zaman burayı güncelleyebilirsiniz
  const EVENTS = [
    {
      month: 'Aralık',
      year: '2025',
      title: 'Google DevFest 2025 Kocaeli Konferansı',
      badge: 'Konferans',
      description: 'Bugün teknoloji ekosisteminin nabzını tutan Google Dev 2025 Kocaeli Konferansı\'na katılma fırsatı buldum. Sektörün geleceğini şekillendiren yenilikleri, yapay zeka odaklı çözümleri ve modern yazılım geliştirme trendlerini birinci elden dinlemek benim için çok değerliydi.',
      images: [
        { src: 'img/events/google-dev-2025/google-dev-2025-1.jpg', alt: 'Google Dev 2025 Kocaeli - Görsel 1' },
        { src: 'img/events/google-dev-2025/google-dev-2025-2.jpg', alt: 'Google Dev 2025 Kocaeli - Görsel 2' },
        { src: 'img/events/google-dev-2025/google-dev-2025-3.jpg', alt: 'Google Dev 2025 Kocaeli - Görsel 3' }
      ],
      highlights: [
        '🔹 Google Developer ekibinden önemli konuşmacılar',
        '🔹 Yeni teknoloji roadmap\'leri',
        '🔹 Cloud, AI, mobil ve web teknolojileri',
        '🔹 Networking fırsatları'
      ],
      tags: ['#GoogleDevFest2025', '#GoogleDevelopers', '#Kocaeli', '#AI', '#Cloud', '#SoftwareDevelopment'],
      link: 'https://www.linkedin.com/posts/atahan-ata_googledev2025-googledevelopers-kocaeli-activity-7403077504254529537-uabN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3EpAkBGQ0SqGJqImpjVkWTGM9xIjLkyJs'
    },
    {
  month: 'Aralık',
  year: '2025',
  title: 'SmartTech – Akıllı Ev Ürünleri E-Ticaret Platformu',
  badge: 'Proje',
  description: 'SmartTech, akıllı ev ürünlerinin satışını yapan, Clean Architecture prensipleriyle geliştirilmiş bir ASP.NET Core MVC e-ticaret platformudur. Kullanıcı, admin ve bayii taraflarını kapsayan kapsamlı yapısıyla gerçek hayattaki e-ticaret senaryolarını birebir yansıtan bir portfolyo projesidir.',
  images: [
    { src: 'img/events/smarttech/smarttech-1.png', alt: 'SmartTech Projesi - Ana Sayfa' },
    { src: 'img/events/smarttech/smarttech-2.png', alt: 'SmartTech Projesi - Ürün Listesi' },
    { src: 'img/events/smarttech/smarttech-3.jpg', alt: 'SmartTech Projesi - Admin Paneli' }
  ],
  highlights: [
    '🏗️ Clean Architecture & Katmanlı Mimari',
    '🔐 ASP.NET Core Identity ile Rol & Yetkilendirme',
    '🛒 Session & Database tabanlı Sepet Sistemi',
    '🧩 Repository & Unit of Work Pattern',
    '✅ FluentValidation & Custom Exception Yönetimi',
    '⚙️ Admin Paneli (Area Tabanlı)',
    '💻 ASP.NET Core MVC & Razor Views'
  ],
  tags: [
    '#SmartTech',
    '#AspNetCore',
    '#CleanArchitecture',
    '#ECommerce',
    '#MVC',
    '#EntityFramework',
    '#Identity',
    '#PortfolioProject'
  ],
  link: 'https://www.linkedin.com/posts/atahan-ata_dotnet-aspnetcore-cleanarchitecture-activity-7405920155823763456-OOuJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3EpAkBGQ0SqGJqImpjVkWTGM9xIjLkyJs'
},
    {
      month: 'Kasım',
      year: '2025',
      title: 'PetTag — Evcil Hayvan Takip ve Yönetim Sistemi',
      badge: 'Proje',
      description: 'Ekip olarak geliştirdiğimiz PetTag, basit, temiz ve genişletilebilir bir evcil hayvan takip ve yönetim sistemi demosudur. Bu proje, sahipler, evcil hayvanlar, sağlık kayıtları, anlık konumları ve veteriner randevularının tek bir yapı altında yönetilebilmesi fikrinden yola çıkılarak tasarlandı.',
      images: [
        { src: 'img/events/pettag/pettag-1.jpeg', alt: 'PetTag Projesi - Görsel 1' },
        { src: 'img/events/pettag/pettag-2.jpeg', alt: 'PetTag Projesi - Görsel 2' },
        { src: 'img/events/pettag/pettag-3.jpeg', alt: 'PetTag Projesi - Görsel 3' }
      ],
      highlights: [
        '⚙️ Katmanlı mimari (Core, Repo, Service, ConsoleApp)',
        '🧩 SOLID prensiplerine uygun mimari yapı',
        '📦 Repository Pattern & Unit of Work kullanımı',
        '🔧 Validation ve özel exception yönetimi',
        '💻 .NET 9 & Entity Framework Core',
        '👥 Ekip projesi (5 geliştirici)'
      ],
      tags: ['#PetTag', '#Teamwork', '#CleanCode', '#SoftwareDevelopment', '#DotNet', '#EntityFramework', '#SOLID'],
      link: 'https://www.linkedin.com/posts/atahan-ata_pettag-teamwork-celancode-activity-7387105560229220353-NCA_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3EpAkBGQ0SqGJqImpjVkWTGM9xIjLkyJs'
    }
    // Yeni etkinlikler buraya eklenecek
  ];

  // Sayfa yüklendiğinde etkinlikleri göster
  document.addEventListener('DOMContentLoaded', function() {
    loadEvents();
    initImageLightbox();
  });

  // Etkinlikleri yükle ve göster
  function loadEvents() {
    const container = document.getElementById('events-container');
    
    if (!container) return;

    container.innerHTML = '';

    if (EVENTS.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Henüz etkinlik bulunmuyor.</p>';
      return;
    }

    // Etkinlikleri render et
    EVENTS.forEach((event, index) => {
      const eventCard = createEventCard(event, index);
      container.appendChild(eventCard);
    });
  }

  // Etkinlik kartı oluştur
  function createEventCard(event, index) {
    const article = document.createElement('article');
    article.className = 'event-card';
    article.setAttribute('role', 'listitem');
    article.style.animationDelay = `${index * 0.1}s`;

    // Görselleri oluştur
    const imagesHTML = event.images && event.images.length > 0 ? `
      <div class="event-images">
        ${event.images.map(img => `
          <div class="event-image-wrapper">
            <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}" class="event-image" loading="lazy" />
          </div>
        `).join('')}
      </div>
    ` : '';

    // Highlights'ları oluştur
    const highlightsHTML = event.highlights && event.highlights.length > 0 ? `
      <div class="event-highlights">
        ${event.highlights.map(highlight => `
          <span class="highlight-item">${escapeHtml(highlight)}</span>
        `).join('')}
      </div>
    ` : '';

    // Tag'leri oluştur
    const tagsHTML = event.tags && event.tags.length > 0 ? `
      <div class="event-tags">
        ${event.tags.map(tag => `
          <span class="tag">${escapeHtml(tag)}</span>
        `).join('')}
      </div>
    ` : '';

    // Footer link'i
    const footerHTML = event.link ? `
      <div class="event-footer">
        <a 
          href="${escapeHtml(event.link)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="event-link"
          aria-label="LinkedIn paylaşımını görüntüle"
        >
          LinkedIn Paylaşımını Görüntüle →
        </a>
      </div>
    ` : '';

    article.innerHTML = `
      <div class="event-date">
        <span class="event-day">${escapeHtml(event.month)}</span>
        <span class="event-year">${escapeHtml(event.year)}</span>
      </div>
      <div class="event-content">
        <div class="event-header">
          <h3 class="event-title">${escapeHtml(event.title)}</h3>
          ${event.badge ? `<span class="event-badge">${escapeHtml(event.badge)}</span>` : ''}
        </div>
        <p class="event-description">${escapeHtml(event.description)}</p>
        ${imagesHTML}
        ${highlightsHTML}
        ${tagsHTML}
        ${footerHTML}
      </div>
    `;

    // Klavye erişilebilirliği için görsel wrapper'lara event listener ekle
    if (event.images && event.images.length > 0) {
      const imageWrappers = article.querySelectorAll('.event-image-wrapper');
      imageWrappers.forEach(wrapper => {
        wrapper.setAttribute('tabindex', '0');
        wrapper.setAttribute('role', 'button');
        wrapper.setAttribute('aria-label', 'Görseli büyüt');
        
        wrapper.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            wrapper.click();
          }
        });
      });
    }

    return article;
  }

  // HTML escape
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Etkinlik Görselleri Lightbox Fonksiyonu
  function initImageLightbox() {
    // Modal state
    let currentImages = [];
    let currentIndex = 0;
    let modal = null;
    
    // Modal oluştur
    function createModal() {
      if (modal) return modal;
      
      modal = document.createElement('div');
      modal.className = 'event-image-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-label', 'Görsel büyütülmüş görünüm');
      modal.setAttribute('aria-modal', 'true');
      
      const modalImg = document.createElement('img');
      modalImg.className = 'event-image-modal-img';
      modalImg.setAttribute('alt', 'Büyütülmüş etkinlik görseli');
      
      // Önceki görsel butonu
      const prevBtn = document.createElement('button');
      prevBtn.className = 'event-image-modal-prev';
      prevBtn.innerHTML = '←';
      prevBtn.setAttribute('aria-label', 'Önceki görsel');
      prevBtn.setAttribute('tabindex', '0');
      prevBtn.type = 'button';
      
      // Sonraki görsel butonu
      const nextBtn = document.createElement('button');
      nextBtn.className = 'event-image-modal-next';
      nextBtn.innerHTML = '→';
      nextBtn.setAttribute('aria-label', 'Sonraki görsel');
      nextBtn.setAttribute('tabindex', '0');
      nextBtn.type = 'button';
      
      // Kapat butonu
      const closeBtn = document.createElement('span');
      closeBtn.className = 'event-image-modal-close';
      closeBtn.innerHTML = '&times;';
      closeBtn.setAttribute('aria-label', 'Kapat');
      closeBtn.setAttribute('tabindex', '0');
      
      modal.appendChild(prevBtn);
      modal.appendChild(nextBtn);
      modal.appendChild(modalImg);
      modal.appendChild(closeBtn);
      document.body.appendChild(modal);
      
      // Görseli göster
      function showImage(index) {
        if (currentImages.length === 0) return;
        
        currentIndex = index;
        const image = currentImages[currentIndex];
        modalImg.src = image.src;
        modalImg.alt = image.alt || 'Etkinlik görseli';
        
        // Butonları güncelle (tek görsel varsa gizle)
        if (currentImages.length <= 1) {
          prevBtn.style.display = 'none';
          nextBtn.style.display = 'none';
        } else {
          prevBtn.style.display = 'flex';
          nextBtn.style.display = 'flex';
        }
      }
      
      // Önceki görsel
      function showPrev() {
        if (currentImages.length === 0) return;
        const newIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
        showImage(newIndex);
      }
      
      // Sonraki görsel
      function showNext() {
        if (currentImages.length === 0) return;
        const newIndex = currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1;
        showImage(newIndex);
      }
      
      // Modal'ı kapat
      function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentImages = [];
        currentIndex = 0;
      }
      
      // Buton event listener'ları
      prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showPrev();
      });
      
      nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showNext();
      });
      
      closeBtn.addEventListener('click', closeModal);
      
      modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === modalImg) {
          closeModal();
        }
      });
      
      // ESC tuşu ile kapat
      document.addEventListener('keydown', function handleKeydown(e) {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          showPrev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          showNext();
        }
      });
      
      // Klavye navigasyonu için butonlar
      [prevBtn, nextBtn, closeBtn].forEach(btn => {
        btn.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
          }
        });
      });
      
      // Global fonksiyonlar
      window._eventModal = {
        showImage: showImage,
        showPrev: showPrev,
        showNext: showNext,
        setImages: function(images, index) {
          currentImages = images;
          showImage(index);
        }
      };
      
      return modal;
    }
    
    // Modal'ı oluştur
    modal = createModal();
    
    // Event delegation kullanarak dinamik eklenen görseller için de çalışır
    document.addEventListener('click', function(e) {
      const wrapper = e.target.closest('.event-image-wrapper');
      if (!wrapper) return;

      const img = wrapper.querySelector('.event-image');
      if (!img) return;

      e.preventDefault();
      
      // Tüm görselleri bul (aynı etkinlik kartındaki)
      const eventCard = wrapper.closest('.event-card');
      if (!eventCard) return;
      
      const allImages = Array.from(eventCard.querySelectorAll('.event-image')).map(img => ({
        src: img.src,
        alt: img.alt || 'Etkinlik görseli'
      }));
      
      // Tıklanan görselin indeksini bul
      const clickedIndex = Array.from(eventCard.querySelectorAll('.event-image')).indexOf(img);
      
      // Modal state'ini güncelle ve göster
      if (window._eventModal) {
        window._eventModal.setImages(allImages, clickedIndex >= 0 ? clickedIndex : 0);
      }
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      const closeBtn = modal.querySelector('.event-image-modal-close');
      if (closeBtn) closeBtn.focus();
    });
  }

})();
