const routes = require("express").Router();
const userController = require("../controller/UserController");

routes.post("/register", userController.register);
routes.post("/login", userController.login);
routes.get("/users", userController.users);

module.exports = routes;
