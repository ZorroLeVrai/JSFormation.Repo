const contentElement = document.getElementById("content");
const outputMouseMoveElement = document.getElementById("output-mousemove");
const outputMouseClickElement = document.getElementById("output-mouseclick");
const outputMouseDownElement = document.getElementById("output-mousedown");


contentElement.addEventListener('mousemove', event => updateElement(outputMouseMoveElement, `x: ${event.clientX}; y:${event.clientY}`));
contentElement.addEventListener('mouseleave', () => updateElement(outputMouseMoveElement, "Souris hors document"));

contentElement.addEventListener('click', event => updateElement(outputMouseClickElement, `x: ${event.clientX}; y:${event.clientY}`));

contentElement.addEventListener('mousedown', event => updateElement(outputMouseDownElement, event.button));
contentElement.addEventListener('mouseup', () => updateElement(outputMouseDownElement, ""));

function updateElement(element, key) {
  element.value = key;
}
