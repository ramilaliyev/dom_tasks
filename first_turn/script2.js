const openBtn = document.querySelector('.content__btn');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click', function() {
    overlay.style.visibility = "visible";
});

const modalCloseBtn = document.querySelector('.modal__close-btn');

modalCloseBtn.addEventListener('click', function() {
    overlay.style.visibility = "hidden";
});
