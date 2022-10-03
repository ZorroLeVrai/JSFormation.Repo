const obj = { "one": 1, "two": 2 };

obj.three = 3;
console.log(obj); //{ one: 1, two: 2, three: 3 }

obj.afficher = function(){console.log(this);}
obj.afficher();  //{ one: 1, two: 2, three: 3, afficher: [Function (anonymous)] }

delete obj.afficher;
console.log(obj);   //{ one: 1, two: 2, three: 3 }
