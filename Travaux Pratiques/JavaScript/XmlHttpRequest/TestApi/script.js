const URL_TO_REQUEST = "https://jsonplaceholder.typicode.com/posts/1";
const contentElement = document.getElementById("content");
const sendElement = document.getElementById("send");
const emptyElement = document.getElementById("empty");

sendElement.addEventListener("click", handleFetch);
emptyElement.addEventListener("click", handleEmpty);

let jsonFormat;
let textFormat;

function handleFetch()
{
  // fetch(URL_TO_REQUEST, { method: 'GET'})
  //   .then(response => response.text())
  //   .then(response => contentElement.textContent = response)
  //   .catch(err => console.error(`Could not send message to the server ${err.message}`));

    fetch(URL_TO_REQUEST, { method: 'GET'})
    .then(response => response.json())
    .then(response => {
      const obj = response;
      contentElement.textContent = JSON.stringify(obj);
      textFormat = JSON.stringify(obj);
      jsonFormat = obj;
    })
    .catch(err => console.error(`Could not send message to the server ${err.message}`));
}

function handleEmpty()
{
  contentElement.textContent = ""; 
}


// async function handleFetch2()
// {
//   try
//   {
//     const response = await fetch(URL_TO_REQUEST, { method: 'GET'});
//     contentElement.textContent = await response.text();
//   }
//   catch (err)
//   {
//     console.error(`Could not send message to the server ${err.message}`);
//   }
// }
