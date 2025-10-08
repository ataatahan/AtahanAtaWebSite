document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const hayirBtn = document.getElementById("hayir");
  const evetBtn = document.getElementById("evet");

  // ✅ Evet butonuna tıklanınca
  evetBtn.addEventListener("click", function () {
    alert("İyi ki varsın! 💕");
  });

  // ✅ Kaçma fonksiyonu
  function kac() {
    hayirBtn.style.position = "absolute"; // kaçarken absolute olsun

    const isMobile = window.innerWidth < 600;
    const rangeX = isMobile ? 400 : 800;
    const rangeY = isMobile ? 300 : 500;

    let newLeft, newTop;
    let tries = 0;
    let overlap = true;

    // Çakışma kontrolü
    while (overlap && tries < 15) {
      const x = Math.floor(Math.random() * rangeX) - rangeX / 2;
      const y = Math.floor(Math.random() * rangeY) - rangeY / 2;

      newLeft = hayirBtn.offsetLeft + x;
      newTop = hayirBtn.offsetTop + y;

      hayirBtn.style.left = newLeft + "px";
      hayirBtn.style.top = newTop + "px";

      const hayirRect = hayirBtn.getBoundingClientRect();
      const evetRect = evetBtn.getBoundingClientRect();

      // Çakışma var mı?
      overlap = !(
        hayirRect.right < evetRect.left ||
        hayirRect.left > evetRect.right ||
        hayirRect.bottom < evetRect.top ||
        hayirRect.top > evetRect.bottom
      );

      tries++;
    }

    // Animasyon
    hayirBtn.style.transition = "left 180ms ease, top 180ms ease, transform 120ms";
    hayirBtn.style.transform = "scale(1.05)";
    setTimeout(() => (hayirBtn.style.transform = "scale(1)"), 250);
  }

  // ✅ Eventler
  hayirBtn.addEventListener("mouseenter", kac); // PC
  hayirBtn.addEventListener("touchstart", kac, { passive: true }); // Mobil

  // ✅ Başlangıç pozisyonu
  function setInitialPosition() {
    hayirBtn.style.position = "relative";
    hayirBtn.style.left = "auto";
    hayirBtn.style.top = "auto";
    hayirBtn.style.right = "auto";
    hayirBtn.style.bottom = "auto";
  }
  setInitialPosition();

  // ✅ Resize sonrası buton ekran dışına çıkarsa ortala
  window.addEventListener(
    "resize",
    function () {
      const cRect = container.getBoundingClientRect();
      const bRect = hayirBtn.getBoundingClientRect();

      if (
        bRect.right > cRect.right ||
        bRect.bottom > cRect.bottom ||
        bRect.left < cRect.left ||
        bRect.top < cRect.top
      ) {
        const left = Math.max(10, (cRect.width - bRect.width) / 2);
        const top = Math.max(10, (cRect.height - bRect.height) / 2);
        hayirBtn.style.left = left + "px";
        hayirBtn.style.top = top + "px";
        hayirBtn.style.right = "auto";
        hayirBtn.style.bottom = "auto";
      }
    },
    { passive: true }
  );
});