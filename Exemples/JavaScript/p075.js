function Personne(nom, age) { this.nom = nom; this.age = age; }
Personne.prototype.texte = "Héro";
const personne1 = new Personne("Zorro", 35);
const personne2 = new Personne("Batman", 26);

