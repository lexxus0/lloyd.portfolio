document.addEventListener('DOMContentLoaded', function () {
  const placeForBtn = document.querySelector('.header-place-for-btn');

  if (window.innerWidth >= 768) {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.classList.add('header-order-project-btn');
    btn.textContent = 'Order the project';

    const link = document.createElement('a');
    link.setAttribute('href', '#work-together');
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';

    btn.addEventListener('click', () => {
      window.location.href = link.getAttribute('href');
    });

    btn.prepend(link);
    placeForBtn.appendChild(btn);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuText = document.querySelector('.header-menu-text');
  let headerNavList;

  const createList = () => {
    headerNavList = document.createElement('ul');
    headerNavList.classList.add('header-nav-list');

    const items = ['About me', 'Benefits', 'Projects', 'FAQ'];
    const links = ['about-me', 'benefits', 'projects', 'faq'];

    items.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('header-nav-list-item');
      const link = document.createElement('a');
      link.href = `#${links[index]}`; //fix after sect
      link.textContent = item;
      link.classList.add('header-nav-list-item-link');

      listItem.appendChild(link);
      headerNavList.appendChild(listItem);
    });

    menuText.insertAdjacentElement('afterend', headerNavList);
  };

  menuText.addEventListener('click', function () {
    if (!headerNavList) {
      createList();
    }
    headerNavList.classList.toggle('is-visible');
  });
});

(() => {
  const mobMenu = document.querySelector('.header-overlay');
  const openMobMenuButton = document.querySelector('.burger-menu-btn');
  const closeMobMenuButton = document.querySelector(
    '.header-mobile-menu-close-btn'
  );

  const toggleMenu = () => {
    const anchors = mobMenu.querySelectorAll('a[href*="#"]');
    const isMenuOpen =
      openMobMenuButton.getAttribute('aria-expanded') === 'true' || false;
    openMobMenuButton.setAttribute('aria-expanded', !isMenuOpen);
    mobMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);

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

  openMobMenuButton.addEventListener('click', toggleMenu);
  closeMobMenuButton.addEventListener('click', toggleMenu);

  const handleViewportChange = e => {
    if (e.matches) {
      mobMenu.classList.remove('is-open');
    }
  };

  const mediaQuery = window.matchMedia('(min-width: 767px)');
  mediaQuery.addEventListener('change', handleViewportChange);
})();
