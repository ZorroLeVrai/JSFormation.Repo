const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

app.use(express.static('public'));

const LISTENING_PORT = 3000;
app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));