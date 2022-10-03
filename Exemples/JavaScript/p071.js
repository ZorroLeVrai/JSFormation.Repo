const personne = new Persone("Tom", 35);

const personne2 = {};
Object.setPrototypeOf(personne2, Personne.prototype);
//personne2.constructor("Tom", 35);
Personne.call(personne2, "Tom", 35);

console.log(Object.getPrototypeOf(personne) === Personne.prototype);  //true
