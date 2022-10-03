const Cote = Object.freeze({
  Pile: Symbol("Pile"),
  Face: Symbol("Face")
});

const pieceCote = Cote.Face;
console.log(pieceCote === Cote.Face); //true
console.log(pieceCote.description); //Face
