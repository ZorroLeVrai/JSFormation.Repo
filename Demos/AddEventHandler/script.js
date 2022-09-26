const buttonHandlerOnClick = document.getElementById("handlerSetByOnClick");
const buttonHandlerAddEventListener = document.getElementById("handlerSetByAddEventListener");

buttonHandlerOnClick.onclick = (event) => console.log(event.target.id);

buttonHandlerAddEventListener.addEventListener('click', (event) => console.log(event.target.id));
buttonHandlerAddEventListener.addEventListener('click', (event) => console.log(event.target.id));

function clickHandler(event)
{
  console.log(event.target.id);
}