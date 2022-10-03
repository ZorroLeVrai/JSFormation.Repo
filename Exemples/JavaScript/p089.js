function Vide() {
  this.afficher = () => console.log(this);
}
Vide.prototype.afficherPrototype = () => console.log(this);
const obj = new Vide();
obj.afficherPrototype();  //affiche globalThis ou un objet vide (pour Node)
obj.afficher();  //Vide { afficher: [Function (anonymous)] }
const f = obj.afficher;
f();  //Vide { afficher: [Function (anonymous)] }
