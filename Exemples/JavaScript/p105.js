class Forme {
  constructor(type) {
    this.type = type;
  }
}
class Cercle extends Forme {
  constructor(rayon) {
    super("Cercle");
    this.rayon = rayon;
  }
}

