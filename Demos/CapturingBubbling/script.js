const pElement = document.getElementById("p");
const divElement = document.getElementById("div");
const formElement = document.getElementById("form");

pElement.addEventListener('click', () => handleClick('p'));
divElement.addEventListener('click', () => handleClick('div'));
formElement.addEventListener('click', () => handleClick('form'));

function handleClick(name)
{
  console.log(`handleClick: Bubbling ${name}`);
}
