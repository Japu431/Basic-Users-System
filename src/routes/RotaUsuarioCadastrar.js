const routes = require("express").Router();
const userController = require("../controller/UserController");

routes.post("/register", userController.register);
routes.post("/login", userController.login);

module.exports = routes;
