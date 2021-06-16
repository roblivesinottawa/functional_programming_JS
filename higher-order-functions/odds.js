const odd = (n) => n & (2 != 0);
const listnums = [23, 56, 87, 90, 45, 2, 8, 32, 87];

filteredNums = listnums.filter(odd);
console.log(filteredNums);
console.log(filteredNums.length);
