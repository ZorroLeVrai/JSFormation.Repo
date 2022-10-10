const longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`;

const result =
  longString.split(' ')
    .map(word => word[0])
    .reduce((accumulator, current) => accumulator.concat(current));

console.log(result);