'use strict';

let index = 0;

function changeColors() {
    let colors = ["red", "blue", "orange", "yellow", "green", "purple"];

    document.getElementsByTagName("body")[0].
        style.background = colors[index++];

    if (index > colors.length - 1)
        index = 0;
}

function greet() {
    console.log('Hello');
}

const timerId = setInterval(greet, 1);

setTimeout(() => {
    clearInterval(timerId);
}, 5000);

const candies1 = ['KitKat', 'Mars', 'Lion', 'KitKat', 'Chocolate', 'Boomsquick']

function filter(box, operation) {
    const sortedBox = [];

    for (let candie of box) {
        if (operation(candie)) {
            sortedBox.push(candie);
        }
    }

    return sortedBox;
};

function createSize(size) {
    return (candie) => candie.length <= size;
};

const upToFour = createSize(4);
const upToSix = createSize(6);

console.log(
    filter(candies1, upToFour),
    filter(candies1, upToSix)
);

