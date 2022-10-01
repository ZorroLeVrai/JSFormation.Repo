const inputElement = document.getElementById("input");
const outputResultElement = document.getElementById("output-result");
const outputReasonElement = document.getElementById("output-reason");

const NOT_EQUAL = String.fromCharCode(0x2260);
inputElement.addEventListener('input', (event) => handleInput(event));



function handleInput(event) {
  const inputText = event.target.value;
}
