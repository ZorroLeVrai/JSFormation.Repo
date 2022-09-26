const URL_TO_REQUEST = "http://localhost:3000/";

const xhr = new XMLHttpRequest();
xhr.onload = handleResponse;

const contentElement = document.getElementById("content");

function handleXHR()
{
  contentElement.textContent = xhr.response;

  xhr.open("GET", URL_TO_REQUEST);
  xhr.send();
}

function handleResponse()
{
  if (xhr.readyState === 4)
  {
    contentElement.textContent = xhr.response;
  }
}

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