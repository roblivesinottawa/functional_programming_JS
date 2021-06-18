let country = [
  { country_name: "United States", population: 328.2 },
  { country_name: "Brazil", population: 211 },
  { country_name: "United Kingdom", population: 66.65 },
  { country_name: "Canada", population: 37.59 },
  { country_name: "Australia", population: 25.36 },
];

const greaterThan100Million = (country) => country.population > 100;
const over100Million = (country) => country.filter(greaterThan100Million);

console.log(over100Million(country));
