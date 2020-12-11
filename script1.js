const left = document.querySelector('#left');
const right = document.querySelector('#right');
const itemsList = document.querySelector('#items');
let computed = getComputedStyle(itemsList);
const items = document.querySelectorAll('.item');

// Фиксированные значения

/* right.addEventListener('click', e => {
    e.preventDefault();

    let rightVal = parseInt(computed.right);

    if (rightVal < 500) {
        rightVal += 100;
        items.style.right = `${rightVal}px`;
    }
});

left.addEventListener('click', e => {
    e.preventDefault();

    let rightVal = parseInt(computed.right);

    if (rightVal > 0) {
        rightVal -= 100;
        items.style.right = `${rightVal}px`;
    }
}); */

// "Гибкие" значения


const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const maxRight = step * (items.length - preShownItems);
let currentRight = 0;

right.addEventListener('click', (e) => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    }
});

left.addEventListener('click', (e) => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    }
});


// DOM манипуляции

/*
const loop = (direction, e) => {
    e.preventDefault();

    if (direction === 'right') {
        itemsList.appendChild(itemsList.firstElementChild);
    } else if (direction === 'left') {
        itemsList.insertBefore(itemsList.lastElementChild, itemsList.firstElementChild);
    }
};


right.addEventListener('click', (e) => {
    loop('right', e);
});


left.addEventListener("click", (e) => {
    loop("left", e);
});
*/