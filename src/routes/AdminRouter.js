const express = require("express");
const routes = express.Router();
const auth = require("../controller/authController");

routes.get("/", auth, (req, res) => {
  if (req.body.admin) {
    res.send("Só os admins podem ver esses dados!");
  } else {
    res.status(401).json({ message: "not admin : access denied" });
  }
});

routes.get("/free", auth, (req, res) => {
  res.send("Esse dado só deve ser visto por quem está logado");
});

module.exports = routes;
