class Rectangle {
  constructor(hauteur, largeur) { this.hauteur = hauteur; this.largeur = largeur; }
  afficherType(){ console.log(typeof Rectangle); }
}
Rectangle.prototype.afficherNomFonction = () => console.log(Rectangle.name);

Object.getOwnPropertyNames(Rectangle.prototype).forEach(item => console.log(item));
// constructor
// afficherType
// afficherNomFonction

for(let key in Rectangle.prototype)
  console.log(key);
// afficherNomFonction

console.log(Object.assign({}, Rectangle.prototype));
console.log({...Rectangle.prototype});
