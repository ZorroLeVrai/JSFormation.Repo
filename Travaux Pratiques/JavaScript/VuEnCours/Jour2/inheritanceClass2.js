class Eleve {
  #age;
  constructor(nom, age) {
    this.nom = nom;
    this.#age = age;
  }

  parler() {
    console.log("Bonjour");
  }

  get age() {
    return this.#age;
  }

  static titre = "Eleve";
}

const eleve = new Eleve("toto", 16);
