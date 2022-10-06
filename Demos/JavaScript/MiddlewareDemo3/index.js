const express = require('express');
const app = express();

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
