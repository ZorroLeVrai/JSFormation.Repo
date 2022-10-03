const obj = {
  one: 1
};
Object.setPrototypeOf(obj, {two: 2});

console.log('one' in obj);  //true
console.log('two' in obj);  //true
console.log('three' in obj);//false
console.log('toString' in obj);//true

