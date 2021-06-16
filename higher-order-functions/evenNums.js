let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0) {
    evenNums.push(nums[i]);
  }
}

console.log(evenNums);
