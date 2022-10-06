app.get("/add", (req, res) => {
  const { param1, param2 } = req.query;
  const calcul = Number(param1) + Number(param2);
  res.send(String(calcul));
  //res.status(400).send(String(calcul));
});

