// 0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.

let apples = 20;
let oranges = 30;
console.log(apples, oranges);

// 1. Check whether apples and oranges are equal.

console.log("is the value of apple and oranges equal?");
console.log(apples === oranges); // false


// .2 Check whether apples and oranges are not equal.

console.log("are apples and oranges not equal?");
console.log(apples !== oranges); // true

// .3 Check whether apples is greater than oranges.

console.log("is apples greater than oranges?");
console.log(apples > oranges); // false

// 4. Check whether apples is less than or equal to oranges.

console.log("is apples less or equal to oranges?");
console.log(apples <= oranges); // true

// 5. Check whether oranges is greater than apples.

console.log("is oranges greater than apples?");
console.log(oranges > apples); // true

// 6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.

let mangoes = 5;
console.log(mangoes * apples); // 100
let result = 100;
console.log(mangoes + oranges); // 35
let result2 = 35;
console.log("is mangoes multiplied per apples greater than mangoes added to oranges?")
console.log(result > result2); // true

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.

console.log(apples - mangoes); //15
let result3 = 15;
console.log(oranges / mangoes); // 6
let result4 = 6;
console.log("is apples subtracted by mangoes less than oranges divided by mangoes?")
console.log(result3 < result4); // false

// 8. Check whether mangoes, apples and oranges are equal.

console.log("are mangoes, apples and oranges equal?")
console.log(mangoes === apples === oranges); // false

// 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.

console.log(apples / mangoes); // 4
let remainder1 = 0;
console.log(oranges / mangoes); // 6
let remainder2 = 0;
console.log("is the remainder of apples divided by mangoes equal to the remainder of oranges divided by mangoes?")
console.log(remainder1 === remainder2); // true

// 10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.

console.log(mangoes + apples); // 25
let value1 = 25;
console.log(oranges - mangoes); // 25
let value2 = 25;
console.log("is it apples added to mangoes greater than oranges subtracted by mangoes?")
console.log(value1 > value2); // false
console.log("is it apples added to mangoes equal to oranges subtracted by mangoes?")
console.log(value1 === value2); // true

// 11.BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result ---> DONE 