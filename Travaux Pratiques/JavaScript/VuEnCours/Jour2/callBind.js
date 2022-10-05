class Test {
  constructor(nom) {
    this.nom = nom;
    //3
    this.afficherNom2 = this.afficherNom.bind(this);
  }

  afficherNom() {
    console.log(this.nom);
  }
}

let test = new Test("zebre");
console.log("Récupération du nom");

//setTimeout(() => console.log("Hello"), 2000);
//setTimeout(test.afficherNom, 2000);

//1
setTimeout(() => test.afficherNom.call(test), 2000);

//2
const afficherNomBound = test.afficherNom.bind(test);
setTimeout(afficherNomBound, 2000);

//3
setTimeout(test.afficherNom2, 2000);
