const headerNavBtn = document.querySelector('.header__nav-btn');
const headerNavigation = document.querySelector('.header__navigation');

headerNavBtn.addEventListener('click', () => {
  headerNavigation.classList.toggle('header__navigation_open');
});

const heroBtn = document.querySelector('.hero__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

heroBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_open');
  modal.classList.add('modal_open');
});

overlay.addEventListener('click', (e) => {
  const target = e.target;

  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay_open');
    modal.classList.remove('modal_open');
  }
});

const form = document.querySelector('.modal__form');
const modalTitle = document.querySelector('.modal__title');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {};

  for (const [name, value] of new FormData(form)) {
    data[name] = value;
  }

  fetch('https://api-form-order.herokuapp.com/api/order', {
    method: 'post',
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((person) => {
      modalTitle.textContent =
        person.name + ', ваша заявка успешно отправлена!';
      form.remove();
      setTimeout(() => {
        overlay.classList.remove('overlay_open');
        modal.classList.remove('modal_open');
      }, 3000);
    });
});
