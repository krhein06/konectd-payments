(() => {
  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile drawer controls
  const body = document.body;
  const menuBtn = document.getElementById('menuBtn');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const overlay = document.getElementById('menuOverlay');
  const drawer = document.getElementById('mobileDrawer');

  const openDrawer = () => {
    body.classList.add('drawer-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    if (overlay) overlay.setAttribute('aria-hidden', 'false');
    setTimeout(() => menuCloseBtn && menuCloseBtn.focus(), 0);
  };

  const closeDrawer = () => {
    body.classList.remove('drawer-open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    if (overlay) overlay.setAttribute('aria-hidden', 'true');
    setTimeout(() => menuBtn && menuBtn.focus(), 0);
  };

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close drawer when clicking a drawer link
  if (drawer) {
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('drawer-open')) closeDrawer();
  });
})();