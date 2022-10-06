const param1InputElement = document.getElementById("param1");
const param2InputElement = document.getElementById("param2");
const sendElement = document.getElementById("send");
const resultElement = document.getElementById("result");

const SERVER_URL = "http://localhost:3000/test";

sendElement.addEventListener("click", handleSend);

function handleSend() {
  const param1 = param1InputElement.value;
  const param2 = param2InputElement.value;
  
  sendRequest({one: param1, two: param2})
    .then(response => response.json())
    .then(response => resultElement.textContent = response.reponse )
    .catch(error => resultElement.textContent = error.message );
}

function sendRequest(req) {
  const request = JSON.stringify(req);
  const requestInfo = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: request
  };
  return fetch(SERVER_URL, requestInfo);
}

























