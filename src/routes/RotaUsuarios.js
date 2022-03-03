const routes = require("express").Router();
const userController = require("../controller/UserController");

routes.post("/register", userController.register);
routes.get("/users", userController.users);

routes.post("/login", userController.login);

module.exports = routes;
