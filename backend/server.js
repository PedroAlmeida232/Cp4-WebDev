import carrosEmDestaque from './data.js';

// Modulos das dependências 
const express = require("express");
const cors = require("cors");
// Instancia do express
const app = express();
// Porta do servidor
const port =5001;
app.use(express.json());
//habilita o cor 
app.use(cors());


//Rotas 
app.get("/login", (req, res) => {
  res.json(carrosEmDestaque);
});

app.get("/carros", (req, res) => {

  res.send("Rota carros funcionando!")

});

app.get("/menu", (req, res) => {

  res.send("Menu de Opções")

});

app.get("/sistema", (req, res) => {

  res.send("O sistema está ativo")

});

app.get("/contato", (req, res) => {

  res.send("entre em contato conosco")

});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});