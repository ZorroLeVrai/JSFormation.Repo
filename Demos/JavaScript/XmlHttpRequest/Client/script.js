const URL_TO_REQUEST = "http://localhost:3000/";
const contentElement = document.getElementById("content");

/**** UTILISATION DE XHR ****/

const xhr = new XMLHttpRequest();
xhr.onload = handleXhrResponse;

function handleXhr()
{
  contentElement.textContent = xhr.response;

  xhr.open("GET", URL_TO_REQUEST);
  xhr.send();
}

function handleXhrResponse()
{
  if (xhr.readyState === 4)
  {
    contentElement.textContent = xhr.response;
  }
}

/**** UTILISATION DE FETCH ****/

function handleFetch()
{
  fetch(URL_TO_REQUEST, { method: 'GET'})
    .then(response => response.text())
    .then(response => contentElement.textContent = response)
    .catch(err => console.error(`Could not send message to the server ${err.message}`));
}

async function handleFetch2()
{
  try
  {
    const response = await fetch(URL_TO_REQUEST, { method: 'GET'});
    contentElement.textContent = await response.text();
  }
  catch (err)
  {
    console.error(`Could not send message to the server ${err.message}`);
  }
}

function handleEmpty()
{
  contentElement.textContent = ""; 
}