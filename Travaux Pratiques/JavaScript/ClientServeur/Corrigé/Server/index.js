const express = require('express');
const cors = require('cors');

const app = express();
const LISTENING_PORT = 3000;

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

//middleware pour traiter les messages json
app.use(express.json());

app.post('/add', (req, res) => {
  const result = handleRequest(req.body);
  res.send({ result });
});

function handleRequest(request) {
  return Number(request.a) + Number(request.b);
}

app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));