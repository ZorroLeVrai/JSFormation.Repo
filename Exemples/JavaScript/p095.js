const obj = {
  afficher: function(){ console.log(this) }
}
function myBind(f, obj) {
  const fBound = () => f.call(obj);
  return fBound;
}
const f1 = obj.afficher;
f1(); //undefined
const f2 = myBind(f1, obj);
f2(); //{ afficher: [Function: afficher] }

