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
      const submitBtn = f.querySelector('button[type="submit"]');
      
      f.addEventListener('submit', e => {
        e.preventDefault();
        
        // Form validation
        if (!f.checkValidity()) {
          f.reportValidity();
          return;
        }
        
        // Disable submit button
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Gönderiliyor...';
        }
        
        if (st) { 
          st.textContent = 'Gönderiliyor...'; 
          st.className = 'status';
          st.setAttribute('role', 'status');
          st.setAttribute('aria-live', 'polite');
        }
        
        const p = {
          from_name: (document.getElementById('from_name')||{}).value?.trim()||'',
          reply_to: (document.getElementById('reply_to')||{}).value?.trim()||'',
          subject: (document.getElementById('subject')||{}).value?.trim()||'',
          message: (document.getElementById('message')||{}).value?.trim()||'',
          to_email: E
        };
        
        if (typeof emailjs !== 'undefined' && emailjs.send) {
          emailjs.send(S, T, p).then(res => {
            if (st) { 
              st.textContent = '✓ Mesaj başarıyla gönderildi! Teşekkürler.'; 
              st.classList.add('success');
              st.setAttribute('role', 'alert');
            }
            try { 
              f.reset(); 
              // Re-enable submit button
              if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Gönder';
              }
            } catch (_) {}
            
            // Clear success message after 5 seconds
            setTimeout(() => {
              if (st) {
                st.textContent = '';
                st.className = 'status';
                st.removeAttribute('role');
              }
            }, 5000);
          }, err => {
            console.error('ejs_err', err);
            if (st) { 
              st.textContent = '✗ Gönderilemedi. Lütfen tekrar deneyin veya doğrudan e-posta gönderin.'; 
              st.classList.add('error');
              st.setAttribute('role', 'alert');
            }
            // Re-enable submit button on error
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = 'Gönder';
            }
          });
        } else {
          console.error('emailjs_not_ready');
          if (st) { 
            st.textContent = '✗ E-posta servisi hazır değil. Lütfen daha sonra tekrar deneyin.'; 
            st.classList.add('error');
            st.setAttribute('role', 'alert');
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Gönder';
          }
        }
      });
      if (c) c.addEventListener('click', () => { 
        try { 
          f.reset(); 
          if (st) {
            st.textContent = '';
            st.className = 'status';
            st.removeAttribute('role');
          }
        } catch (_) {} 
      });
      
      // Form alanlarına focus olduğunda status mesajını temizle
      const formInputs = f.querySelectorAll('input, textarea');
      formInputs.forEach(input => {
        input.addEventListener('focus', () => {
          if (st && st.textContent && st.classList.contains('error')) {
            st.textContent = '';
            st.className = 'status';
          }
        });
      });
    });
  } catch (err) { console.error('fatal', err); }
})();
