class Rectangle {
  constructor(hauteur, largeur) {
    this.hauteur = hauteur;
    this.largeur = largeur;
    this.afficherType = () => console.log(typeof Rectangle);
  }
  afficherNomFonction = () => console.log(Rectangle.name);
}
const rect = new Rectangle(50, 100);
rect.afficherType();   //function
rect.afficherNomFonction();  //Retangle
console.log(rect);
//Rectangle {afficherNomFonction: ..., hauteur: 50, largeur: 100, afficherType: ...}

