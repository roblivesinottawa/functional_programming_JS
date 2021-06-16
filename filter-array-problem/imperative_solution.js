// problem: filter a given array of integers and output only those values that are less than a specified value

let filterArray = (x, coll) => {
  let result = [];

  for (let i = 0; i < coll.length; i++) {
    if (coll[i] < x) {
      result.push(coll[i]);
    }
  }
  return result;
};

console.log(filterArray(50, [10, 43, 78, 7, 90]));
