function smaller(number) {
  return number < this;
}

filterArray = (x, listnums) => listnums.filter(smaller, x);

let nums = [10, 9, 8, 2, 7, 5, 1, 3, 0];

console.log(filterArray(3, nums));
