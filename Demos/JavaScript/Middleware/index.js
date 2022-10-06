const express = require('express');
const app = express();

const { log } = console;

const displayQuery = req => log(req);

//middleware 1
app.use((req, res, next) => {
  log("Début middleware 1");
  //displayQuery(req);
  next();
  log("Fin middleware 1");
});


app.use((req, res) => {
  log("Début traitement requête");
  res.send("Votre requete a été examinée");
  log("Fin traitement requête");
});


// app.use((req, res, next) => {
//   log("Début middleware 2");
//   next();
//   log("Fin middleware 2");
// });

const LISTENING_PORT = 3000;
app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));