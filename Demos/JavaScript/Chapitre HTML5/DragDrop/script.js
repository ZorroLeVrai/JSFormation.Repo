function handleDragStart(event)
{
  event.dataTransfer.setData('text/plain', event.target.id)
}

function handleDrop(event)
{
  event.preventDefault();
  const imageElementId = event.dataTransfer.getData('text/plain');
  const imageElement = document.getElementById(imageElementId);
  event.target.appendChild(imageElement);
}

function handleDragOver(event)
{
  event.preventDefault();
}