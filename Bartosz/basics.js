// 0.
let apples = 20;
let oranges = 30;
console.log("apples = " + apples, "oranges = " + oranges); // apples = 20 oranges = 30

// 1.
console.log(apples == oranges); // false

// 2.
console.log(apples != oranges); // true

// 3.
console.log(apples > oranges); // false

// 4.
console.log(apples <= oranges); // true

// 5.
console.log(apples < oranges); // true

// 6.
let mangoes = 5;
console.log((mangoes * apples) > (mangoes + oranges)); // true

// 7.
console.log((apples - mangoes) < (oranges / mangoes)); // false

// 8.
console.log(mangoes == apples == oranges); // false

// 9.
console.log((apples % mangoes) == (oranges % mangoes)); // true

// 10.
console.log((mangoes + apples) > (oranges - mangoes)); // false
console.log((mangoes++ + apples) > (oranges - mangoes)); // true

