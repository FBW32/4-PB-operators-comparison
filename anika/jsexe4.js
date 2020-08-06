//**********Exercise 4

// 0. Declare two variables "apples" and "oranges".
// Assign a value of 20 to apples. Assign a value of 30 to oranges.

let apples = 20;
let oranges = 30;

console.log(`0. Of apples I have ${apples}`); // Of apples I have 20
console.log(`Of oranges I have ${oranges}`); // Of oranges I have 30

// 1. Check whether apples and oranges are equal.

console.log(`1. Apples and oranges are equal: ${apples === oranges}`);
// Apples and oranges are equal: false

// 2. Check whether apples and oranges are *not* equal.

console.log(`2. Apples and oranges are not equal: ${apples !== oranges}`);
// Apples and oranges are not equal: true

// 3. Check whether apples is greater than oranges.

console.log(`3. Is apples greater than oranges? ${apples > oranges}`);
// Is apples greater than oranges? false

// 4. Check whether apples is less than or equal to oranges.

console.log(
  `4. Apples is greater than or less than oranges? ${apples <= oranges}`
);
// Apples is greater than or less than oranges? true

// 5. Check whether oranges is greater than apples.

console.log(`5. That oranges is greater than apples is ${apples < oranges}`);
// That oranges is greater than apples is true

// 6. Declare another variable "mangoes" and give it a value of 5.
// Multiply mangoes and apples,
// and check whether this result is greater than mangoes added to oranges.

let mangoes = 5;
console.log(`6. Apples multiplied with oranges is ${apples * mangoes}.`);
// Apples multiplied with oranges is 100.
console.log(
  `It is ${
    apples * mangoes > mangoes + oranges
  } that this is greater than mangoes and oranges added together.`
); //It is true that this is greater than mangoes and oranges added together.

// 7. Subtract mangoes from apples and
// check whether this result is less than oranges divided by mangoes.

console.log(
  `7. It is ${
    apples - mangoes < oranges / mangoes
  } that apples - mangoes is smaller than oranges divided by mangoes.`
);
// It is false that apples - mangoes is smaller than oranges divided by mangoes.

// 8. Check whether mangoes, apples and oranges are equal.

console.log(
  `8. It is ${
    mangoes === apples && apples === oranges && oranges === mangoes
  } that mangoes, apples and oranges are equal.`
);
// It is false that mangoes, apples and oranges are equal.

// 9. Check whether the remainder of apples divided by
// mangoes and the remainder of oranges divided by mangoes are equal.

console.log(`9. It is ${
  apples % mangoes === oranges % mangoes
} that the remainder of apples divided by
mangoes and the remainder of oranges divided by mangoes are equal.`);
// It is true that the remainder of apples divided by
// mangoes and the remainder of oranges divided by mangoes are equal.

// 10. Check whether mangoes added to apples is greater than
// oranges minus mangoes. If it is not, find an operator which
// will give a result of true.

console.log(
  `10. It is ${
    mangoes + apples > oranges - mangoes
  } that mangoes added to apples is greater than oranges minus mangoes,`
); // false
console.log(
  `but it is ${
    mangoes + apples === oranges - mangoes
  } that mangoes added to apples is equal to oranges minus mangoes.`
); //true

// 11. BONUS CHALLENGE: Try increasing script
// readability by adding question headings to your output before each result.
