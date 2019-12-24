'use strict';

let userInput = 0;
const numbers = [];
let total = 0;

do {
    userInput = Number(prompt('Bведите число', ''));
    numbers.push(userInput);
} while (userInput !== 0);

for (let number of numbers) {
    total += number;
}

alert(`Общая сумма чисел равна ${total}`);

console.log('Bведенный массив: ', numbers);
console.log(`Общая сумма чисел равна: ${total}`);