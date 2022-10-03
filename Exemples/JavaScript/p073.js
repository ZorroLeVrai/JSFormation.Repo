function f(){}
console.log(f.prototype !== Object.getPrototypeOf(f));    //true
console.log(f.prototype === Object.getPrototypeOf(new f));//true

