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

