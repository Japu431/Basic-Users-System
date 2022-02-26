const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  if (req.body.admin) {
    res.send("Só os admins podem ver esses dados!");
  } else {
    res.status(401).json({ message: "not admin : access denied" });
  }
});


module.exports = routes;  