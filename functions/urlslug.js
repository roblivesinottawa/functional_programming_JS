// function chaining: the result of a function will be used as input for the next function

const str = ` I will be a url slug `;
const slugify = (str) => str.toLowerCase().trim().split(" ").join("-");

console.log(slugify(str));
