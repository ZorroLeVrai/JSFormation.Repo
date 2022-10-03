function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
}
const personne = new Personne("Tom", 35);
console.log(personne);  //Personne { nom: 'Tom', age: 35 }

const personne2 = Personne("Tom", 35);
console.log(personne2);  //undefined

