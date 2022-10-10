function Chien(nom, poids) {
  this.nom = nom;
  this.poids = poids;
}

function Animal() {
}

inherit(Chien, Animal);
Chien.prototype.aboyer = function(){ console.log(this.nom + " aboie") };
Animal.prototype.manger = function(){ console.log(this.nom + " mange") }

function inherit(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

const chien1 = new Chien("Rex", 18);
const chien2 = new Chien("Laika", 5);
chien2.aboyer();
chien2.manger();

const v = chien2.aboyer;
v();

//aboyer(chien2, )