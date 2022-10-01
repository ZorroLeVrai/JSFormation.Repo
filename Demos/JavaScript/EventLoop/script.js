const generate = document.querySelector('#generate');

let index = 0;

const log = (eventId, isTimeout) => console.log(`événement ${eventId}: `.concat(isTimeout ? "timeout traité" : "traité"));

generate.addEventListener('click', () => {
  const eventId = ++index;
  console.log(`Click #${index}`);
  setTimeout(function timer() {
    log(eventId, true);
  }, 2000);
  log(eventId, false);
});

setTimeout(function timeout() {
  log("initial", true);
}, 5000);

console.log("Bienvenue!");