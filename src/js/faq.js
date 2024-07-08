import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const button = item.querySelector('.btn-arrow');

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      const text = item.querySelector('.faq-text');
      if (!isActive) {
        item.classList.add('active');
        text.style.maxHeight = text.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        text.style.maxHeight = 0;
      }
    });
  });
});

// document.addEventListener('DOMContentLoaded', function () {
//   const items = document.querySelectorAll('.faq-item');

//   items.forEach(item => {
//     const button = item.querySelector('.btn-arrow');

//     button.addEventListener('click', () => {
//       const isActive = item.classList.contains('active');

//       items.forEach(i => {
//         i.classList.remove('active');
//         i.querySelector('.faq-text').style.maxHeight = 0;
//       });

//       if (!isActive) {
//         item.classList.add('active');
//         const text = item.querySelector('.faq-text');
//         text.style.maxHeight = text.scrollHeight + "px";
//       }
//     });
//   });
// });
