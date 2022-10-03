const obj = {
  afficher: function(p1,p2){ console.log(this, p1, p2) }
}
const f = obj.afficher
f.call(obj,'p1','p2');    //{ afficher: [Function: afficher] } p1 p2
f.apply(obj,['p1','p2']); //{ afficher: [Function: afficher] } p1 p2
const fBound = obj.afficher.bind(obj);
fBound('p1','p2');  //{ afficher: [Function: afficher] } p1 p2

