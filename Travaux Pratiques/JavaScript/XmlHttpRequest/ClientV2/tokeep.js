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

