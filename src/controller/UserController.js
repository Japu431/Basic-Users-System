const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const { loginValidate, registerValidate } = require("./validate");

const userController = {
  register: async function (req, res) {
    const { name, email, password } = req.body;

    const { error } = registerValidate(req.body);
    if (error) {
      return res.status(400).send(error);
    }
    const selectedUser = await User.findOne({ email: email });

    if (selectedUser) {
      return res.status(400).json("Email já existente");
    }

    const user = {
      name: name,
      email: req.body.email,
      password: bcrypt.hashSync(password),
    };

    try {
      const savedUser = await User.create(user);
      res.status(200).json(savedUser);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  login: async (req, res) => {
    const { error } = loginValidate(req.body);

    if (error) {
      return res.status(400).send(error);
    }
    const selectedUser = await User.findOne({ email: req.body.email });

    if (!selectedUser) {
      return res.status(400).send("Email ou Senha Incorretas");
    }
    const passwordAndUserMatch = bcrypt.compareSync(req.body.password);

    if (!passwordAndUserMatch) {
      return res.status(400).send("Email ou Senha Incorretas");
    }

    const token = jwt.sign(
      { _id: selectedUser._id, admin: selected_user._id },
      process.env.TOKEN_SECRET
    );

    res.header("authoriztion-token", token);
    res.send("Usuario logado");
  },
};

module.exports = userController;
