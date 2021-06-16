const sum = (x, y) => x + y;
const subtraction = (x, y) => x - y;

const doubleOperator = (x, y, z) => x(y, z) * 2;

console.log(doubleOperator(sum, 10, 20));
console.log(doubleOperator(subtraction, 10, 5));
