let apples = 20;
let oranges = 30;
console.log(apples === oranges); // false
console.log(apples !== oranges); // true
console.log(apples > oranges); // false
console.log(apples <= oranges); // true;
console.log(oranges > apples); // true

let mangoes = 5;
let result = mangoes * apples;
console.log("mangoes * apples is " + result); // 100
let result1 = mangoes + oranges;
console.log("mangoes + oranges is " + result1); // 35
console.log(result > result1); // true
let result2 = mangoes - apples;
console.log("mangoes - apples is " + result2); // -15
let result3 = oranges / mangoes;
console.log("oranges / mangoes is " + result3); // 6
console.log(result2 < result3); // true
console.log(mangoes === apples === oranges); // false
let result4 = apples % mangoes;
console.log("The remainder of apples divided by mangoes is " + result4); // 0
let result5 = oranges % mangoes;
console.log("The remainder of oranges divided by mangoes is " + result5); // 0
console.log(result4 === result5);// true
