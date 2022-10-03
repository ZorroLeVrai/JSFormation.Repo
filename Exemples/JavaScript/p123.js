const log = console.log;
const map1 = new Map();
//!Attention ajoute la propriété 'a' à l’objet map1 pas au dictionnaire!
map1['a'] = 1;
log(map1.get('a')); //undefined
log(map1.a); //1
log(map1.set('z', 26)); //Map(1) { 'z' => 26, a: 1 }
//!Attention retourne la propriété 'z' de l'objet map1
log(map1['z']); //undefined
