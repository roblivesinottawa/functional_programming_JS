let people = [
  { name: "Steve", age: 19 },
  { name: "Tony", age: 22 },
  { name: "Bruce", age: 28 },
];

const olderThan21 = (person) => person.age > 21;
const overAge = (people) => people.filter(olderThan21);

console.log(overAge(people));
