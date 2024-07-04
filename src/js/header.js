(() => {
  // Elements
  const mobMenu = document.querySelector('.header-overlay');
  const openMobMenuButton = document.querySelector('.burger-menu-btn');
  const closeMobMenuButton = document.querySelector(
    '.header-mobile-menu-close-btn'
  );

  // Toggle menu function
  const toggleMenu = () => {
    const anchors = mobMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMobMenuButton.getAttribute('aria-expanded') === 'true' || false;
    openMobMenuButton.setAttribute('aria-expanded', !isMenuOpen);
    mobMenu.classList.toggle('is-open');

    // Toggle body scroll
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

    // Handle anchor click events
    if (anchors.length > 0) {
      anchors.forEach(anchor => {
        if (!isMenuOpen) {
          anchor.addEventListener('click', toggleMenu);
        } else {
          anchor.removeEventListener('click', toggleMenu);
        }
      });
    }
  };

  // Event listeners
  openMobMenuButton.addEventListener('click', toggleMenu);
  closeMobMenuButton.addEventListener('click', toggleMenu);

  // Handle viewport change
  const handleViewportChange = e => {
    if (e.matches) {
      mobMenu.classList.remove('is-open');
      openMobMenuButton.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    }
  };

  // Media query
  const mediaQuery = window.matchMedia('(min-width: 767px)');
  mediaQuery.addEventListener('change', handleViewportChange);
})();
