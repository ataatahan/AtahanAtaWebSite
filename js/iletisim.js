(() => {
  try {
    const _0 = {
      p: 'VGxLVzhMdktJT1d5OUJZbkw=',
      s: 'c2VydmljZV9xejE3YmVp',
      t: 'dGVtcGxhdGVfemhrZG9rag==',
      e: 'YXRhLmhhbi5hdGFAb3V0bG9vay5jb20='
    };
    const d = s => decodeURIComponent(escape(atob(s)));
    const P = d(_0.p), S = d(_0.s), T = d(_0.t), E = d(_0.e);
    if (typeof emailjs !== 'undefined') try { emailjs.init(P); } catch (e) { console.warn('init_err', e); }
    else console.warn('EmailJS yüklenemedi');
    document.addEventListener('DOMContentLoaded', () => {
      const f = document.getElementById('contactForm');
      const st = document.getElementById('status');
      const c = document.getElementById('clearBtn');
      if (!f) return;
      f.addEventListener('submit', e => {
        e.preventDefault();
        if (st) { st.textContent = 'Gönderiliyor...'; st.className = 'status'; }
        const p = {
          from_name: (document.getElementById('from_name')||{}).value?.trim()||'',
          reply_to: (document.getElementById('reply_to')||{}).value?.trim()||'',
          subject: (document.getElementById('subject')||{}).value?.trim()||'',
          message: (document.getElementById('message')||{}).value?.trim()||'',
          to_email: E
        };
        if (typeof emailjs !== 'undefined' && emailjs.send) {
          emailjs.send(S, T, p).then(res => {
            if (st) { st.textContent = 'Mesaj gönderildi — teşekkürler!'; st.classList.add('success'); }
            try { f.reset(); } catch (_) {}
          }, err => {
            console.error('ejs_err', err);
            if (st) { st.textContent = 'Gönderilemedi. Konsolu kontrol et veya EmailJS ayarlarını gözden geçir.'; st.classList.add('error'); }
          });
        } else {
          console.error('emailjs_not_ready');
          if (st) { st.textContent = 'E-posta servisi hazır değil.'; st.classList.add('error'); }
        }
      });
      if (c) c.addEventListener('click', () => { try { f.reset(); } catch (_) {} if (st) st.textContent = ''; });
    });
  } catch (err) { console.error('fatal', err); }
})();
