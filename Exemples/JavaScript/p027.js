console.log(5 instanceof Object);  //false
console.log({} instanceof Object);  //true
console.log(function(){} instanceof Object);  //true
console.log([] instanceof Object);  //true
console.log(true instanceof Object);  //false
console.log(new String(5) instanceof Object);  //true
console.log(null instanceof Object);  //false
