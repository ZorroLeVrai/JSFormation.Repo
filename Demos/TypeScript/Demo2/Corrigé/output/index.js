"use strict";
const animaux = [
    {
        id: "075329",
        nom: "zebre",
        poids: 550
    },
    {
        id: "075416",
        nom: "éléphant",
        poids: 1200
    },
    {
        id: "075447",
        nom: "chien",
        poids: 26
    },
    {
        id: "075529",
        nom: "chat",
        poids: 4.5
    }
];
//transformer le tableau d'animaux en un dictionnaire (Map) dont la clé est id et dont la valeur est l'objet animal sans son `id`
function toMap(animaux) {
    const dico = new Map();
    animaux.forEach(animal => {
        const { id, nom, poids } = animal;
        dico.set(id, { nom, poids });
    });
    return dico;
}
console.log('dictionnaire', toMap(animaux));
//# sourceMappingURL=index.js.map