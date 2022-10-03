const creerDessinateur = () => (
  { dessiner: (obj) => console.log(`Dessiner ${obj}`) }
);
const creerSculpteur = () => (
  { sculpter: (obj) => console.log(`Sculpter ${obj}`) }
);
const creerDessinateurSculpteur = () => Object.assign(creerDessinateur(), creerSculpteur());
const zebre = creerDessinateurSculpteur();
zebre.dessiner("cercle"); //Dessiner cercle
zebre.sculpter("carré");  //Sculpter carré
