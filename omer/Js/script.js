
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const hayirBtn = document.getElementById("hayir");
  const evetBtn = document.getElementById("evet");

  evetBtn.addEventListener("click", function () {
    alert("İyi ki varsın! 💕");
  });

  function kac() {
  const isMobile = window.innerWidth < 600; // basit mobil kontrol

  const rangeX = isMobile ? 100 : 200; // mobilde daha az
  const rangeY = isMobile ? 300 : 500;

  const x = Math.floor(Math.random() * rangeX) - rangeX / 2;
  const y = Math.floor(Math.random() * rangeY) - rangeY / 2;

  hayirBtn.style.position = "relative";
  hayirBtn.style.left = x + "px";
  hayirBtn.style.top = y + "px";

  hayirBtn.style.transition = "left 180ms ease, top 180ms ease, transform 120ms";
  hayirBtn.style.transform = "scale(1.02)";
  setTimeout(() => (hayirBtn.style.transform = "scale(1)"), 160);
}


  hayirBtn.addEventListener("mouseenter", kac); // PC için
hayirBtn.addEventListener("touchstart", kac, { passive: true }); // mobil için



  function setInitialPosition() {
  hayirBtn.style.position = "relative"; // flex içinde hizalı başlasın
  hayirBtn.style.left = "auto";
  hayirBtn.style.top = "auto";
  hayirBtn.style.right = "auto";
  hayirBtn.style.bottom = "auto";
}

  setInitialPosition();


  window.addEventListener("resize", function () {
    const cRect = container.getBoundingClientRect();
    const bRect = hayirBtn.getBoundingClientRect();


    if (bRect.right > cRect.right || bRect.bottom > cRect.bottom || bRect.left < cRect.left || bRect.top < cRect.top) {
      const left = Math.max(10, (cRect.width - bRect.width) / 2);
      const top = Math.max(10, (cRect.height - bRect.height) / 2);
      hayirBtn.style.left = left + "px";
      hayirBtn.style.top = top + "px";
      hayirBtn.style.right = "auto";
      hayirBtn.style.bottom = "auto";
    }
  }, { passive: true });
});
