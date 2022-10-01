function incrementeNombre(nombre)
{
  nombre = nombre + 1;
}

function incrementeNombreDansUnObjet(obj)
{
  obj.nombre = obj.nombre + 1;
}

const n = 0;
console.log('Avant incrementeNombre', {n});
incrementeNombre(n);
console.log('Après incrementeNombre', {n});

const obj = { nombre: 0 };
console.log('Avant incrementeNombreDansUnObjet', obj);
incrementeNombreDansUnObjet(obj);
console.log('Après incrementeNombreDansUnObjet', obj);