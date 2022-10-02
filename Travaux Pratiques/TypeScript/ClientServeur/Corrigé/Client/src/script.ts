const param1InputElement = document.getElementById("param1") as HTMLInputElement;
const param2InputElement = document.getElementById("param2") as HTMLInputElement;
const sendButtonElement = document.getElementById("send") as HTMLButtonElement;
const resultElement = document.getElementById("result") as HTMLParagraphElement;

const SERVER_URL = "http://localhost:3000/add";

function handleSend() {
  const param1 = param1InputElement.value;
  const param2 = param2InputElement.value;
  const request = JSON.stringify({ a: param1, b: param2 });
  fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: request
  })
  .then(response => response.json())
  .then(response =>  {
    resultElement.textContent = response.result;
  })
  .catch(error => resultElement.textContent = error.message );
}