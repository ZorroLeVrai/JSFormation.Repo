const express = require('express');
const app = express();

app.use(express.static('public'));

const LISTENING_PORT = 3000;
app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));