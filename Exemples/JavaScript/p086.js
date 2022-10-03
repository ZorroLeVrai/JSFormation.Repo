function Text() {
  console.log(this);
  this.texte = "Bonjour";
}
const t = new Text;  //Text {}
