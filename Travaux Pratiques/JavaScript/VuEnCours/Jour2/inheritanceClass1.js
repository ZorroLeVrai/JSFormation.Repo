class Animal {
  constructor() {}
  manger() {}
}

class Chien extends Animal{
  constructor(nom, poids) {
    super();
    this.nom = nom;
    this.poids = poids;
  }

  aboyer() {}
}


class Animal2 {
  constructor(nom, poids) {
    this.nom = nom;
    this.poids = poids;
  }
  manger() {}
}

class Chien2 extends Animal{
  constructor(nom, poids) {
    super(nom, poids);
  }

  aboyer() {}
}


const chien1 = new Chien("Rex", 18);
const chien2 = new Chien("Laika", 5);

