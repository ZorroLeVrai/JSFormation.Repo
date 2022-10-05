const result =
  Array.from(Array(32).keys())
    .map(num => num.toString(2).concat("0"))
    //.map(str => str + "0")
    .filter(str => str.length <= 4)
    .map(str => parseInt(str, 2));

const result2 =
  Array.from(Array(32).keys())
    .map(num => num * 2)
    .filter(num => num < 2**4);

console.log(result);
console.log(result2);