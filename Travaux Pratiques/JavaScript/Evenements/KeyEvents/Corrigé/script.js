const contentElement = document.getElementById("content");
const outputKeypressElement = document.getElementById("output-keypress");
const outputKeydownElement = document.getElementById("output-keydown");

contentElement.addEventListener('keypress', event => updateElement(outputKeypressElement, event.key));
contentElement.addEventListener('keydown', event => updateElement(outputKeydownElement, event.key));
contentElement.addEventListener('keyup', event => updateElement(outputKeydownElement, ""));

function updateElement(element, key) {
  element.value = key;
}
