const mySet1 = new Set();
console.log(mySet1.add(1)); //Set(1) { 1 }
console.log(mySet1.add(5)); //Set(2) { 1, 5 }
console.log(mySet1.has(1)); //true
console.log(mySet1.has(3)); //false
console.log(mySet1.delete(5)); //true
console.log(mySet1.size); //1
console.log(mySet1);  //Set(1) { 1 }
