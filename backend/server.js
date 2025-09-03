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
app.get("/carros", (req, res) => res.json({ msg: "Rota carros funcionando!" }));
app.get("/lojas", (req, res) => res.json({ msg: "Rota lojas funcionando!" }));
app.get("/sobre", (req, res) => res.json({ msg: "Rota sobre funcionando!" }));
app.get("/contato", (req, res) => res.json({ msg: "Rota contato funcionando!" }));


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});