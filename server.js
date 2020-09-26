const express = require("express");
const app = express();
const data = require("./mulheres.json");

app.use(express.json());

app.get("/mulheres", function (req, res) {
  res.json(data);
});

app.get("/mulheres/:id", function (req, res) {
    const { id } = req.params
    const womanIt = data.find(woman => woman.id == id);

    if(!womanIt) return res.status(204).json();

    res.json(womanIt);
});

app.post("/mulheres", function (req, res) {
    const {nome, descricao} = req.body;

    //salvar

    res.json({nome, descricao});
});

app.put("/mulheres/:id", function (req, res) {
    const { id } = req.params
    const womanIt = data.find(woman => woman.id == id);

    if(!womanIt) return res.status(204).json();

    const { nome } = req.body;

    womanIt.nome = nome;

    res.json(womanIt);

});

app.delete("/mulheres/:id", function (req, res) {
    const { id } = req.params;
    const womenFiltered = data.filter(woman => woman.id != id);

    res.json(womenFiltered);
});

app.listen(3000, function () {
  console.log("servidor rodando");
});
