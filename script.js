(() => {
  const body = document.body;

  // ===== Set header stack heights (top bar + header) =====
  const topBar = document.getElementById('topBar');
  const header = document.getElementById('siteHeader');

  function setStackHeights() {
    const topBarH = topBar ? Math.round(topBar.getBoundingClientRect().height) : 0;
    const headerH = header ? Math.round(header.getBoundingClientRect().height) : 0;
    const stackH = topBarH + headerH;

    document.documentElement.style.setProperty('--topbar-h', `${topBarH}px`);
    document.documentElement.style.setProperty('--header-h', `${headerH}px`);
    document.documentElement.style.setProperty('--stack-h', `${stackH}px`);
  }

  window.addEventListener('load', setStackHeights);
  window.addEventListener('resize', setStackHeights);

  // ===== Footer year =====
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ===== Mobile menu behavior (matches Advisory CSS toggles) =====
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('menuCloseBtn');
  const overlay = document.getElementById('menuOverlay');
  const drawer = document.getElementById('mobileDrawer');

  function openMenu() {
    body.classList.add('is-open');
    body.classList.add('menu-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    if (overlay) overlay.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    body.classList.remove('is-open');
    body.classList.remove('menu-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    if (overlay) overlay.setAttribute('aria-hidden', 'true');
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close menu when clicking any drawer link
  if (drawer) {
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('is-open')) closeMenu();
  });
})();