let vals = [10, 20, 30, 40, 50, 60];
let sumvals = 0;

for (i = 0; i < vals.length; i++) {
  sumvals += vals[i];
}

console.log(sumvals);

// using recursion to handle mutability in iteration:
let list = [10, 20, 30, 40, 50, 60];
let accumulator = 0;

sum = (list, accumulator) =>
  list.length == 0 ? accumulator : sum(list.slice(1), accumulator + list[0]);

console.log(sum(list, accumulator));
