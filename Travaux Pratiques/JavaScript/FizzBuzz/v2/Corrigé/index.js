const fizzBuzz = require('./fizzBuzz2');

const rules = [
  { predicate: (n) => n % 3 === 0, tag: "Fizz" },
  { predicate: (n) => n % 5 === 0, tag: "Buzz" }
];

fizzBuzz(rules, 1,30);