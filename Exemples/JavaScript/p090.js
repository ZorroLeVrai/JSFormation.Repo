const obj = {
  afficher: function(){ console.log(this) }
}
const f = obj.afficher;
f();  //undefined
f.call(obj);    //{ afficher: [Function: afficher] }
