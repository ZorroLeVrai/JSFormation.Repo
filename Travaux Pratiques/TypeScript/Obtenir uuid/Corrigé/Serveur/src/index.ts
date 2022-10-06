import express, { Request, Response } from "express";
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

//middleware pour traiter les messages json
app.use(express.json());

app.get("/", (_: Request, res: Response) => {
  res.send("Bonjour");
});

app.get("/uuid", (_: Request, res: Response) => {
  res.send(uuidv4());
});

type RespUuid = { uuids: string[] };

app.post("/uuidv2", (req: Request, res: Response) => {
  const { nbuuid } = req.body;
  if (nbuuid > 5)
  {
    res.send("Max 5 éléments");
    return;
  }

  const tab: string[] = [];
  for (let i=0; i<nbuuid; ++i)
    tab[i] = uuidv4();

  res.send({uuids: tab });
});

const LISTENING_PORT = 3000;
app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));