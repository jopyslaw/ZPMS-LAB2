const _ = require('loadsh');

function menubar(numbers) {
    console.log(_.mean(numbers));
}

function maxNumber(numbers) {
    console.log(_.max(numbers));
}

function minNumber(numbers) {
    console.log(_.min(numbers));
}

numberTab = [1,2,3,4,5];

menubar(numberTab);

maxNumber(numberTab);

minNumber(numberTab);

