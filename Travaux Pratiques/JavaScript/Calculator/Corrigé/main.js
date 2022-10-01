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
const keyList = touches.map(touche => touche.dataset.key);

let previousKey = null;

// Ecouteur évenement Keydown
document.addEventListener('keydown', (e) => {
    const key = e.key;
    handleKey(key)
})

// Ecouteur évenement click
document.addEventListener('click', (e) => {
    const key = e.target.dataset.key;
    handleKey(key);
    //enlever le focus du bouton cliqué
    e.target.blur();
})

const isDeleteKey = key => key === DELETE_KEY;
const isEnterKey = key => key === ENTER_KEY;
const isOpenParenthesisKey = key => key === OPEN_PARENTHESIS_KEY;
const isCloseParenthesisKey = key => key === CLOSE_PARENTHESIS_KEY;

function displayResult(result) {
    ecranBas.textContent = result;
}

function clearButtomScreen() {
    ecranBas.textContent = "";
}

function clearUpScreen() {
    ecranHaut.textContent = "";
}

function handlePreviousKey() {
    if (operandes.includes(previousKey))
        clearButtomScreen();
    else if (isEnterKey(previousKey))
        clearUpScreen();
}

function handleCurrentKey(currentKey) {
    if (operandes.includes(currentKey)) //touche opérande
        handleOperandKeys();        
    else if (isDeleteKey(currentKey)) // touche 'Supprimer'
        handleDeleteKey();
    else if (isEnterKey(currentKey)) // touche 'Entrer'
        handleEnterKey();
    else if (isOpenParenthesisKey(currentKey)) // touche '('
        handleOpenParenthesis();
    else if (isCloseParenthesisKey(currentKey)) // touche ')'
        handleCloseParenthesis();
    else
        handleDigits();

    function handleOperandKeys() {
        if (operandes.includes(previousKey))
            ecranHaut.textContent = ecranHaut.textContent.slice(0, -1) + currentKey;
        else
            ecranHaut.textContent += ecranBas.textContent + currentKey;
        
        clearButtomScreen();
    }

    function handleDeleteKey() {
        if (isDeleteKey(previousKey))
            clearUpScreen();
        clearButtomScreen();
    }

    function handleEnterKey() {
        const result = eval(ecranHaut.textContent + ecranBas.textContent);
        ecranHaut.textContent += ecranBas.textContent + "=";
        displayResult(result);
    }

    function handleOpenParenthesis() {
        ecranHaut.textContent += currentKey;
        clearButtomScreen();
    }

    function handleCloseParenthesis() {
        ecranHaut.textContent += ecranBas.textContent + currentKey;
        clearButtomScreen();
    }

    function handleDigits() {
        if (isEnterKey(previousKey)) {
            clearUpScreen();
            ecranBas.textContent = currentKey;    
        }
        else {
            ecranBas.textContent += currentKey;
        }
    }
}

// Fonction permettant d'effectuer les actions des touches
function handleKey(currentKey) {
    if (!keyList.includes(currentKey))
        return;

    handlePreviousKey();
    handleCurrentKey(currentKey);
    previousKey = currentKey;
}

window.addEventListener('error', (e) => {
    alert(`Une erreur est apparue : ${e.message}`);
})