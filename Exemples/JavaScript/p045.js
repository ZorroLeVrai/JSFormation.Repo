function lireArguments()
{
  console.log(`le nombre d'arguments est ${arguments.length}`);
  //retourne un objet contenant les paramètres de la fonction
  console.log(arguments);
  if (arguments.length > 0)
    //retourne la valeur du premier argument
    console.log(`Le premier argument est ${arguments[0]}`);
}
