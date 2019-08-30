const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  if (!config.get("requiresAuth")) return next(); // to next middleware function

  const token = req.header("x-auth-token");
  // if no token, send the default msg
  if (!token) return res.status(401).send("Access denied. No token provided.");

  // otherwise we do have a token, so it must be validated
  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
