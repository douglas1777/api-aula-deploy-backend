const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("Te amo Lucimary S2");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
