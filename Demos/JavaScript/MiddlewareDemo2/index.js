const express = require('express');
const app = express();

//middleware specifique
app.get("/", (req, res) => {
  res.send("OK programme lancé");
});


app.get("/test", (req, res) => {
  console.log('parametres', req.query);
  console.log('headers', req.headers);
  res.send("Test du programme");
});

const LISTENING_PORT = 3000;
app.listen(LISTENING_PORT, () => console.log(`Serveur en attente de requêtes ...`));
