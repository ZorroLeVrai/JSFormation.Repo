Eleve.description = "Ceci est un éléve";
Eleve.bonjour = function(){ console.log("Bonjour éléve")};

console.log(eleve1.description);  //undefined
console.log(Eleve.description);   //Ceci est un éléve

eleve1.bonjour();   //error
Eleve.bonjour();    //Bonjour éléve

