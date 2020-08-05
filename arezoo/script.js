"use strict";
let apples = 20;
let oranges = 30;
let mangoes = 5;
console.log(apples == oranges);
console.log(apples != oranges);
console.log(oranges > apples);
console.log(mangoes * apples > mangoes + oranges);
console.log(apples - mangoes < oranges / mangoes);
console.log(apples % mangoes == oranges % mangoes);
console.log(mangoes + apples > oranges - mangoes);

// if i have 2 kilogram apples and buy 1 another kilogram.
let kilogram = 2;
console.log(++kilogram);
console.log("we have a " + kilogram + " kilogram of apples");

// if i have 2 kilogram mangoes and buy 4 another kilogram.
let mangoKilogram = 2;
mangoKilogram += 4;
console.log("i have " + mangoKilogram + " kilogram of mangoes");
