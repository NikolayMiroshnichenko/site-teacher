const openModalBtn = document.querySelector('.js-open-modal-btn');
const openMenuModalBtn = document.querySelector('.js-menu-open-modal-btn');
const modal = document.querySelector('.modal-wrapper');
const closeModalbtn = document.querySelector('.close-modal-btn');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
openMenuModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeModalbtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

