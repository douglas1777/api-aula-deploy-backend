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
    console.log(error);
    return res.status(500).json({ mensagem: "Erro do servidor" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
