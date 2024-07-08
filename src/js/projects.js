import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

const section = document.querySelector('.projects-section');
const prevButton = document.querySelector('.projects-btn-prev')
const nextButton = document.querySelector('.projects-btn-next')

const projectsSwiper = new Swiper(section.querySelector('.projects-swiper'), {
  modules: [Navigation, Autoplay],

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
    },

    1440: {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: false,
    },
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  navigation: {
    nextEl: '.projects-btn-next',
    prevEl: '.projects-btn-prev',
  },
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    projectsSwiper.slideNext();
  } else if (e.key === 'ArrowLeft') {
    projectsSwiper.slidePrev();
   } else if (e.key === 'Tab') {
    const focusedElement = document.activeElement;
    if (focusedElement === prevButton) {
      e.preventDefault();
      nextButton.focus();
    } else if (focusedElement === nextButton) {
      e.preventDefault();
      prevButton.focus();
    }
  }
});
