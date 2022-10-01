/************** Récupération des elements du DOM **************/

//récupère tous les boutons quie sont dans le 'div' dont la classe est 'touches' 
const touches = [...document.querySelectorAll('div.touches button')];
const ecranHaut = document.querySelector('.ecranHaut');
const ecranBas = document.querySelector('.ecranBas');

/*************** Déclaration des constantes ******************/
const ENTER_KEY = "Enter";
const DELETE_KEY = "Delete";
const OPEN_PARENTHESIS_KEY = "(";
const CLOSE_PARENTHESIS_KEY = ")";
const operandes = ['+', '-', '*', '/'];

