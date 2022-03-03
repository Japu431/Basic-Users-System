const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = res.headers.get("Authorization-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const userVerified = jwt.verify(token, "abcd");
    req.user = userVerified;
    next();
  } catch (error) {
    res.status(401).send("Access Denied", error);
  }
};
