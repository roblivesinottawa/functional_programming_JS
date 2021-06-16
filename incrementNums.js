let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const incrementNumbers = (list) => list.map((number) => number + 1);
const multiplyNumbers = (list) => list.map((number) => number * number);

console.log(incrementNumbers(list));
console.log(multiplyNumbers(list));
