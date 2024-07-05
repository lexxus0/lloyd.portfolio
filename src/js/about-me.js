// import Swiper from 'swiper';
// import 'swiper/css';

import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

const accordionsList = document.querySelectorAll('.about-accordion-item');
accordionsList.forEach(function (item) {
  const title = item.querySelector('.about-accordion-title');
  const btnDown = item.querySelector('.ac-trigger');
  btnDown.addEventListener('mouseenter', function () {
    title.classList.add('hovered');
  });

  btnDown.addEventListener('mouseleave', function () {
    title.classList.remove('hovered');
  });
});


