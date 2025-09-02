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
app.get("/carros", (req, res) => res.json(carros));
app.get("/lojas", (req, res) => res.json(lojas));
app.get("/sobre", (req, res) => res.json(sobre));
app.get("/contato", (req, res) => res.json(contato));
