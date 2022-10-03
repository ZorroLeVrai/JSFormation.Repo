const additionner = function(a,b){ return a+b; }

const additionner2 = new Function('a', 'b', 'return a+b;');

console.log(additionner.constructor === Function);  //true
console.log(additionner.prototype.constructor === additionner);  //true
