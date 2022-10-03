const log = console.log;
const map1 = new Map();
log(map1.set('a', 1)); //Map(1) { 'a' => 1 }
log(map1.set('b', 2)); //Map(2) { 'a' => 1, 'b' => 2 }
log(map1.get('a')); //1
log(map1.set('a', 97)); //Map(2) { 'a' => 97, 'b' => 2 }
log(map1.get('a')); //97
log(map1.delete('b')); //true
log(map1.size); //1
log(map1); //Map(1) { 'a' => 97 }
