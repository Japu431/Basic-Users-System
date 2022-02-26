require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userSignIn = require("./routes/RotaUsuarioLogin");
const userSignUp = require("./routes/RotaUsuarioCadastrar");

app.use(bodyParser.json());

app.use("/login", express.json(), userSignIn);
app.use("/", express.json(), userSignUp);

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
try {
  app.listen(3000);
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ijnyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Banco de Dados Conectado!");
    });
} catch (error) {
  console.error(error);
}
