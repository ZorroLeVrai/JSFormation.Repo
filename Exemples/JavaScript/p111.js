const nombres = [1, 2, 3];
const nombres2 = [...nombres, 4];
console.log(nombres2);  //[1, 2, 3, 4]

const obj = { one: 1, two: 2};
const obj2 = { ...obj, three: 3 };
console.log(obj2);  //{ one: 1, two: 2, three: 3 }
