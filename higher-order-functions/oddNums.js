let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odds = [];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    odds.push(numbers[i]);
  }
}

console.log(odds);
