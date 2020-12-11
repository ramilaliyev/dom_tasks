var left = document.querySelector('.btn__left');
var right = document.querySelector('.btn__right');
var slider = document.querySelector('.slider');
var list = document.querySelector('.slider__list');

var s = 0;

right.addEventListener('click', function(e) {
    e.preventDefault();

    if (s != 500) {
        s += 100;
        list.style.right = s + "px";
    }
});


left.addEventListener('click', function(e) {
    e.preventDefault();

    if (s != 0) {
        s -= 100;
        list.style.right = s + "px";
    }
});
