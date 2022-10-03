function Capture(text){
  this.text = text;
  //capture de la valeur du this lors de la déclaration
  this.afficherThis = () => console.log(this);
}
const obj = new Capture("Capture du this");
const afficher = obj.afficherThis;
afficher();   //Capture { text: 'Capture du this', afficherThis: ...}
