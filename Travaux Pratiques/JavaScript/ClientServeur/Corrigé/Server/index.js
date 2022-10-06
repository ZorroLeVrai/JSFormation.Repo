const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:5501',
  methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

//middleware pour traiter les messages json
//middleware global
app.use(express.json());

app.get("/add", (req, res) => {
  const { param1, param2 } = req.query;
  const param1Num = Number(param1);
  const param2Num = Number(param2);
  
  res.send(String(param1Num + param2Num));
});

app.post("/test", traiterCommandePost);

function traiterCommandePost(req, res) {
  const { one, two } = req.body;
  const calcul = String(Number(one) + Number(two));
  res.send({reponse: calcul});
}


const PORT_NUMBER = 3000;
app.listen(PORT_NUMBER, () => console.log(`App lancée, port: ${PORT_NUMBER}`));























// const express = require('express');
// const cors = require('cors');

// const app = express();
// const LISTENING_PORT = 3000;

// const corsOptions = {
//   origin: '*',
//   methods: ['GET', 'POST']
// };

// app.use(cors(corsOptions));

// //middleware pour traiter les messages json
// app.use(express.json());

// app.post('/test', (req, res) => {
//   const result = handleRequest(req.body);
//   res.send({ result });
// });

// function handleRequest(request) {
//   return Number(request.one) + Number(request.two);
// }

// app.listen(LISTENING_PORT, () => console.log(`Listening on port ${LISTENING_PORT}...`));