const generate = document.querySelector('#generate');

let index = 0;

function log(eventId, timeout, isTimeout) {
  console.log(`événement ${eventId}: `.concat(isTimeout ? `timeout ${timeout}ms traité` : `setTimout ${timeout}ms`));
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

generate.addEventListener('click', () => {
  for (i=0; i<10; ++i)
  {
    const eventId = i;
    const timeout = getRandomIntInclusive(2000, 10000);
    setTimeout(() => log(eventId, timeout, true), timeout);
    log(eventId, timeout, false);
  }
});

console.log("Bienvenue!");