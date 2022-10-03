const [a, b] = [2,3,5,7,11];
console.log(a); //2
console.log(b); //3

const { one, four, three : trois } = { one: 1, two: 2, three: 3, four: 4 };
console.log(one);   //1
console.log(trois); //3
console.log(four); //4
