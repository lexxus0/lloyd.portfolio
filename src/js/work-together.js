import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

const refs = {
  commentsElem: document.getElementById('comments'),
  emailElem: document.getElementById('email'),
  successMessage: document.getElementById('successMessage'),
  errorMessage: document.getElementById('errorMessage'),
  formElem: document.querySelector('.footer-form'),
  footerElem: document.getElementById('work-together'),
};

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

refs.commentsElem.addEventListener('blur', function () {
  const maxLength = 35;
  const textComment = refs.commentsElem.value;
  if (textComment.length > maxLength) {
    refs.commentsElem.value = textComment.substring(0, maxLength) + '...';
  }
});

refs.emailElem.addEventListener('input', function () {
  const email = refs.emailElem.value.trim();
  if (emailPattern.test(email)) {
    refs.emailElem.classList.add('success');
    refs.emailElem.classList.remove('error');
    refs.successMessage.style.display = 'block';
    refs.errorMessage.style.display = 'none';
  } else {
    refs.emailElem.classList.add('error');
    refs.emailElem.classList.remove('success');
    refs.successMessage.style.display = 'none';
    refs.errorMessage.style.display = 'block';
  }
});

refs.commentsElem.addEventListener('input', function () {
  localStorage.setItem('comments', refs.commentsElem.value);
});

refs.emailElem.addEventListener('input', function () {
  localStorage.setItem('email', refs.emailElem.value);
});

document.addEventListener('DOMContentLoaded', function () {
  const savedComments = localStorage.getItem('comments');
  const savedEmail = localStorage.getItem('email');
  if (savedComments) {
    refs.commentsElem.value = savedComments;
  }
  if (savedEmail) {
    refs.emailElem.value = savedEmail;
  }
});

function openModal({ title, message }) {
  closeModal();
  const markup = `<div class="backdrop is-open"><div class="modal is-visible"><button class="modal-close-btn" type="button"><svg
        class="modal-close-btn-icon"
        aria-label="close icon"
        width="14" height="14"><use href="/img/icons.svg#icon-close-x"></use></svg></button>
    <h2 class="modal-title">${title}</h2><p class="modal-description">${message}</p></div></div>`;
  refs.footerElem.insertAdjacentHTML('afterend', markup);
  document.body.classList.add('no-scroll');
  addModalEventListeners();
  refs.formElem.reset();
}
function addModalEventListeners() {
  const backdropElem = document.querySelector('.backdrop');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  if (backdropElem) {
    modalCloseBtn.addEventListener('click', closeModal);

    backdropElem.addEventListener('click', function (event) {
      if (event.target === backdropElem) {
        closeModal();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  }
}
function closeModal() {
  const backdropElem = document.querySelector('.backdrop.is-open');
  if (backdropElem) {
    backdropElem.classList.add('fade-out');
    backdropElem.addEventListener(
      'animationend',
      function () {
        backdropElem.remove();
        document.body.classList.remove('no-scroll');
      },
      { once: true }
    );
  }
}

refs.formElem.addEventListener('submit', async function (event) {
  event.preventDefault();
  const emailValue = refs.emailElem.value.trim();
  const textComment = refs.commentsElem.value;
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests/',
      {
        email: emailValue,
        comment: textComment,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    refs.emailElem.classList.remove('success');
    refs.successMessage.style.display = 'none';
    openModal(response.data);
    localStorage.removeItem('email');
    localStorage.removeItem('comments');
  } catch (error) {
    console.log(error);
    iziToast.error({
      position: 'topRight',
      theme: 'dark',
      messageColor: 'white',
      backgroundColor: '#ef4040',
      message:
        'Error:' + (error.response?.data?.message || 'Something went wrong'),
    });
  }
});
