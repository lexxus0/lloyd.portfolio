const coversSection = document.querySelector('.covers');
const marqueeLine = document.querySelectorAll('.marquee__line');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      marqueeLine.forEach(line => {
        line.classList.add('animation');
      });
    } else {
      marqueeLine.forEach(line => {
        line.classList.remove('animation');
      });
    }
  });
}, options);

observer.observe(coversSection);
