function Text() {
  console.log(this);
}
Text();   //undefined

const obj = {
  afficher: function(){ console.log(this) }
}
obj.afficher();  //{ afficher: [Function: afficher] }
const f = obj.afficher;
f();  //undefined