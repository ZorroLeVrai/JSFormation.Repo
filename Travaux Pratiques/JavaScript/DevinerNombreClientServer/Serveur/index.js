const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:*',
  methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

app.get("/", (_, res) => {
  res.send("Bonjour");
});

app.get("/uuid", (_, res) => {
  res.send(uuidv4());
});

app.get("/deviner", (_, res) => {
  res.send("Je devine");
});

const LISTENING_PORT = 3000;
app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));