console.log(`Etape à l'execution du JavaScript: ${document.readyState}`);

document.addEventListener('readystatechange', (event) => {
  console.log(`document.readyState: ${document.readyState}\n`);
});

document.addEventListener('DOMContentLoaded', (event) => {
  console.log("événement DOMContentLoaded");
});

window.addEventListener('load', (event) => {
  console.log("événement load");
});

window.addEventListener('beforeunload', (event) => {
  console.log('événement beforeunload');
  //Sert à présenter un message de confirmation à l'utilisateur
  event.returnValue = "Quitter la page ?";
});

window.addEventListener('unload', (event) => {
  console.log('événement unload');
});
