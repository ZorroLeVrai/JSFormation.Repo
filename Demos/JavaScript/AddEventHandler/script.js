const outputElement = document.getElementById("output");
const buttonHandlerOnClick = document.getElementById("handlerSetByOnClick");
const buttonHandlerAddEventListener = document.getElementById("handlerSetByAddEventListener");

buttonHandlerOnClick.onclick = (event) => clickHandler(event);
buttonHandlerOnClick.onclick = (event) => clickHandler(event);

buttonHandlerAddEventListener.addEventListener('click', (event) => clickHandler(event));
//on peut ajouter un autre gestionnaire d'évenement (event handler)
//buttonHandlerAddEventListener.addEventListener('click', (event) => clickHandler(event));

function clickHandler(event)
{
  outputElement.textContent = event.target.id;
  //console.log(event.target.id);
}