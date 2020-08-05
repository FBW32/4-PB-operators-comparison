// These exercises are aimed at making you familiar with the comparison operators. Print all your checks to the console.

// 0. Declare two variables "apples" and "oranges". Assign a value of 20 to apples. Assign a value of 30 to oranges.

var apples = 20;
var oranges = 30;

// 1. Check whether apples and oranges are equal.

console.log(
  "The answer of whether apples and oranges are equal is " +
    [apples == oranges] +
    "."
);
// FALSE

// 2. Check whether apples and oranges are not equal.

console.log(
  "The answer of whether apples and oranges are not equal is " +
    [apples != oranges] +
    "."
);
// TRUE

// 3. Check whether apples is greater than oranges.

console.log(
  "The answer of whether apples is greater than oranges is " +
    [apples > oranges] +
    "."
);
// FALSE

// 4. Check whether apples is less than or equal to oranges.

console.log(
  "The answer of wether apples is less than or equal to oranges is " +
    [apples <= oranges] +
    "."
);
// TRUE

// 5. Check whether oranges is greater than apples.

console.log(
  "The answer of whether oranges is greater than apples is" +
    [oranges > apples] +
    "."
);
// TRUE

// 6. Declare another variable "mangoes" and give it a value of 5. Multiply mangoes and apples, and check whether this result is greater than mangoes added to oranges.

var mangoes = 5;
console.log("Mangoes multiplied by apples equals " + [mangoes * apples] + ".");
// 100
var resultOne = 100;

console.log(
  "Therefore, using this resultOne = 100, we can find out resultOne being greater than mangoes added to oranges is " +
    [resultOne > [mangoes + oranges]] +
    "."
);
// TRUE

// 7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes.

console.log(
  "Subtracting mangoes from apples gives us " + [apples - mangoes] + "."
);
// 15

var resultTwo = 15;
console.log(
  "Therefore, testing that resultTwo is less than oranges divided by mangoes is " +
    [resultTwo < [oranges / mangoes]] +
    "."
);
// FALSE

// 8. Check whether mangoes, apples and oranges are equal.

console.log(
  "Whether mangoes, apples, and oranges are equal is " +
    [(mangoes == apples) == oranges] +
    "."
);
// FALSE

// 9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal.

console.log(
  "Whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal is " +
    [[apples % mangoes] == [oranges % mangoes]] +
    "."
);
// FALSE

// 10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true.

// Part 1
console.log(
  "Whether mangoes added to apples is greater than oranges minus mangoes is" +
    [[mangoes + apples] > [oranges - mangoes]] +
    "."
);
// FALSE

// Part 2
console.log(
  "The operator <= gives a result of " +
    [[mangoes + apples] >= [oranges - mangoes]] +
    "."
);
// TRUE --> the operator >= greater than or equal to will give a result of TRUE.

// 11. BONUS CHALLENGE: Try increasing script readability by adding question headings to your output before each result.
