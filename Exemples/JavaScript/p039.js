const sentence = "The quick brown fox jumps over the lazy dog.";
//vérifie si la chaîne contient la sous-chaîne
console.log(sentence.includes('fox')); //true
//retourne le premier index de 'q'
console.log(sentence.indexOf('q')); //4
//retourne le dernier index de 'd'
console.log(sentence.lastIndexOf('d')); //40
//retourne le 3ème caractère
console.log(sentence[2]);  //e
//retourne une sous-chaîne de caractères
console.log(sentence.substring(4,9));  //quick
//retourne la taille de la chaîne de caractère
console.log(sentence.length);   //44

