const obj = {
  afficher: () => console.log(this)
}
obj.afficher();  //affiche l’objet global ou un objet vide (pour Node)
