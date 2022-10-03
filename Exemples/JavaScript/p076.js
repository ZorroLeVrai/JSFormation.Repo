console.log(personne1.texte);  //Héro
console.log(personne2.texte);  //Héro
(Object.getPrototypeOf(personne1)).texte = "Super Héro";
console.log(personne2.texte);  //Super Héro
console.log(personne2.toString());  //[object Object]

