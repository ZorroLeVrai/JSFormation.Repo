function executer(num1, num2, operation, afficher)
{
  const resultat = operation(num1, num2);
  afficher(resultat);
}

executer(3, 7, (a,b) => a+b, console.log);  //10
