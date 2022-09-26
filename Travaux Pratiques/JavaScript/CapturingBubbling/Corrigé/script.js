const bubblingCheckBox = document.getElementById("bubbling");
const capturingCheckBox = document.getElementById("capturing");
//map element to { bubbleHandler, captureHandler} object
//keep reference on the event handler to be able to remove it
const handlerMap = new Map();

let bubbling = true;
let capturing = false;

bubblingCheckBox.addEventListener('change', e => handleChange(e));
capturingCheckBox.addEventListener('change', e => handleChange(e));

init();

function init()
{
  bubblingCheckBox.checked = bubbling;
  capturingCheckBox.checked = capturing;

  if (bubbling)
    addAllClickListeners(true, false);
    
  if (capturing)
    addAllClickListeners(true, true);
}

function addAllClickListeners(addListener, useCapture)
{
  addClickListenerToElement('form', addListener, useCapture);
  addClickListenerToElement('div', addListener, useCapture);
  addClickListenerToElement('p', addListener, useCapture);
}

function addClickListenerToElement(name, addListener, useCapture)
{
  const element = document.getElementById(name);
  const handlerName = useCapture ? "captureHandler" : "bubbleHandler";

  let handlerObj = handlerMap.get(element);
  if (!handlerObj)
    handlerObj = {};

  if (addListener)
  {
    const clickHandler = () => handleClick(name, useCapture);
    element.addEventListener('click', clickHandler, useCapture);
    //used to keep a reference on the eventhandler
    handlerObj[handlerName] = clickHandler;
    handlerMap.set(element, handlerObj);
  }
  else
  {
    element.removeEventListener('click', handlerObj[handlerName], useCapture);
  }
}

function handleClick(name, useCapture)
{
  const phase = useCapture ? "Capturing" : "Bubbling";
  console.log(`handleClick: ${phase} ${name}`);
}

function handleChange(event)
{
  const target = event.target;
  if (target.id === "capturing")
  {
    capturing = target.checked;
    addAllClickListeners(capturing, true);
  }
  else
  {
    bubbling = target.checked;
    addAllClickListeners(bubbling, false);
  }
}
