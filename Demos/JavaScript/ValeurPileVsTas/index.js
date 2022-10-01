function modifierValeurDansLaPile() {
  let valeur1 = 0;
  let valeur2 = valeur1;
  console.log({valeur1, valeur2});
  valeur1 = 8;
  console.log({valeur1, valeur2});
}

function modifierValeurDansLeTas() {
  let obj1 = { valeur: 0 };
  let obj2 = obj1;
  console.log({obj1, obj2});
  obj1.valeur = 8;
  console.log({obj1, obj2});
}

function modifierValeurDansLeTas2() {
  let obj1 = { valeur: 0 };
  let obj2 = obj1;
  console.log({obj1, obj2});
  obj1 = { valeur: 8 };
  console.log({obj1, obj2});
}

modifierValeurDansLaPile();
modifierValeurDansLeTas2();
