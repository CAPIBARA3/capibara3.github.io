/* CAPIBARA Collaboration — Main Script */

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initSmoothScroll();
  injectComponents();
});

/* ── Inject shared nav + footer ── */
async function injectComponents() {
  const root = getAssetsRoot();

  const navEl = document.getElementById('site-nav');
  const footEl = document.getElementById('site-footer');

  if (navEl) {
    try {
      const res = await fetch(root + 'nav.html');
      if (res.ok) {
        navEl.innerHTML = await res.text();
        initNav(); // re-init after injection
      }
    } catch(e) { console.warn('Nav load failed', e); }
  }

  if (footEl) {
    try {
      const res = await fetch(root + 'footer.html');
      if (res.ok) {
        footEl.innerHTML = await res.text();
        const yr = footEl.querySelector('#current-year');
        if (yr) yr.textContent = new Date().getFullYear();
      }
    } catch(e) { console.warn('Footer load failed', e); }
  }
}

function getAssetsRoot() {
  return '/assets/';
}

/* ── Mobile nav ── */
function initNav() {
  const toggle = document.querySelector('.navbar__toggle');
  const links  = document.querySelector('.navbar__links');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.innerHTML = open
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  dropdowns.forEach(dd => {
    const link = dd.querySelector('.nav-link');
    if (!link) return;
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        const isButtonToggle = link.tagName === 'BUTTON';
        if (!isButtonToggle) e.preventDefault();
        const open = dd.classList.toggle('open');
        if (isButtonToggle) link.setAttribute('aria-expanded', open);
      }
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.navbar')) {
      links.classList.remove('open');
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
      toggle.setAttribute('aria-expanded', false);
      dropdowns.forEach(d => {
        d.classList.remove('open');
        const ddToggle = d.querySelector('.nav-link[aria-expanded]');
        if (ddToggle) ddToggle.setAttribute('aria-expanded', false);
      });
    }
  });

  // Fix hover state lingering
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('mouseleave', () => l.blur());
  });
}

/* ── Back to top ── */
function initBackToTop() {
  let btn = document.querySelector('.back-to-top');
  if (!btn) {
    btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Smooth scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href.length <= 1) return;
      const target = document.getElementById(href.slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
