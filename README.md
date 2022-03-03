# Desafio

# >> Basic Users System <<

Another application that you can do for training is a Basic User System. It’s a basic project, but it will help you to practice very useful skills because the user is a part of almost every application.

In this example, you will learn:

- how to set up the database and do migrations,
- how to create a new user by the registration,
- how to build login endpoint,
- how to authenticate user,
- how to get the user’s data.

In the case of registration and login, you should generate a JWT token for the user that will be returned from the API.

Besides that, remember to hash the password before you save it in the database.

const { error } = loginValidate(req.body);
const { email, password } = req.body;

    if (error) {
      return res.status(400).json(error);
    }


    const selectedUser = await User.findOne({ email: email });

    if (!selectedUser) {
      return res.status(400).send("Email ou Senha Incorretas");
    }
    const salt = bcrypt.genSaltSync();
    const passwordAndUserMatch = bcrypt.compareSync(password, salt);

    if (!passwordAndUserMatch) {
      return res.status(400).send("Email ou Senha Incorretas");
    }

    const token = jwt.sign(
      { _id: selectedUser._id, admin: selectedUser._id },
      process.env.TOKEN_SECRET
    );

    res.header("authoriztion-token", token);
    res.send("Usuario logado");
