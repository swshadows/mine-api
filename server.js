const express = require("express");
const app = express();
const pug = require("pug");
const mongoose = require("mongoose");
const db = "mongodb://localhost/mine-api";

mongoose
  .connect(db)
  .then(() => console.log(`Conectado com sucesso a ${db}`))
  .catch(`Erro ao conectar ao banco ${db}`);

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));
app.use("/api/mobs", express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const index = require("./routes/index");
const mobs = require("./routes/mobs");
const notfount = require("./routes/404");

app.use("/", index);
app.use("/api/mobs", mobs);
app.use("*", notfount);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`Servidor inicializado na porta ${port}`);
});
