function Personne(nom, age){ this.nom = nom; this.age = age; }
function Eleve(nom, age, note){
  this.note = note;
  Personne.call(this, nom, age); //initialisation du constructeur parent
}
//définition de l'héritage
Eleve.prototype = Object.create(Personne.prototype);
Eleve.prototype.constructor = Eleve;
//définition d'une fonction au niveau du prototype de Personne
Personne.prototype.afficher = function() { console.log(this); }
//création des instances
const eleve1 = new Eleve("Zorro", 35, 18);
const eleve2 = new Eleve("Batman", 26, 15);

eleve1.afficher();  //Eleve { note: 18, nom: 'Zorro', age: 35 }
eleve2.afficher();  //Eleve { note: 15, nom: 'Batman', age: 26 }
