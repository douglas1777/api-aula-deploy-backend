const express = require("express");
const knex = require("./conexao");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const carros = await knex("carros");
    return res.status(200).json(carros);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro do servidor" });
  }
  return res.json("Api deployada ");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
