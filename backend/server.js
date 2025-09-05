const carrosEmDestaque = require('./data.js');

// Módulos das dependências
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5001;

// Define a pasta do frontend para servir arquivos estáticos
const frontendPath = path.join(__dirname, '..', 'frontend');

app.use(express.json());
app.use(cors());

// Serve os arquivos estáticos do frontend
app.use(express.static(frontendPath));

// Rotas da API
app.get("/api/carros", (req, res) => {
  res.json(carrosEmDestaque);
});

// A rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// rotas da API
app.get("/loja", (req, res) => {
  res.send("Rota Lojas funcionando!");
});

app.get("/sobre", (req, res) => {
  res.send("Rota Sobre funcionando!");
});

app.get("/contato", (req, res) => {
  res.send("Rota Contato funcionando!");
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});