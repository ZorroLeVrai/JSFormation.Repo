import express from 'express';
import cors from 'cors';
const LISTENING_PORT = 3000;

const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST']
};

//middleware cors pour accepter les requêtes venant d'une autre origine
app.use(cors(corsOptions));

//middleware pour traiter les messages json
app.use(express.json());

app.post('/add', (req, res) => {
  const result = handleBody(req.body);
  res.send({result});
});

function handleBody(request: {a: string, b: string}) {
  return Number(request.a) + Number(request.b);
}

app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));
