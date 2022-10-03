console.log((new Map()).toString());  //[object Map]
const obj = {};
console.log(obj.toString());  //[object Object]
Object.assign(obj, { get [Symbol.toStringTag]() { return "Special" } });
console.log(obj.toString());  //[object Special]

console.log(obj[Symbol.toStringTag]);  //Special
