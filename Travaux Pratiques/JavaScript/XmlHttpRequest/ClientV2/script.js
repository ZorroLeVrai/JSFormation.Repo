const URL_TO_REQUEST = "http://localhost:3000/";
const contentElement = document.getElementById("content");

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