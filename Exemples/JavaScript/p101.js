class ClassWithStaticMethod {
  static staticProperty = 'valeur de staticProperty';
  static staticMethod() { return 'method statique'; }
  static {
    console.log('Initialisation de la classe statique');
  }
}
//Initialisation de la classe statique
console.log(ClassWithStaticMethod.staticProperty);  //valeur de staticProperty
console.log(ClassWithStaticMethod.staticMethod());  //method statique
