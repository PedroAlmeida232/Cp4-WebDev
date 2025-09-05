import carrosEmDestaque from './data.js';

// Modulos das dependências 
const express = require("express");
const cors = require("cors");
// Instancia do express
const app = express();
// Porta do servidor
const port = 5001;
app.use(express.json());
//habilita o cors
app.use(cors());


//Rotas

app.get("/carros", (req, res) => {
  res.send("Rota Carros funcionando!")
  res.json(carrosEmDestaque);
});

app.get("/loja", (req, res) => {

  res.send("Rota Lojas funcionando!")

});

app.get("/sobre", (req, res) => {

  res.send("Rota Sobre funcionando!")

});

app.get("/contato", (req, res) => {

  res.send("Rota Contato funcionando!")

});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});