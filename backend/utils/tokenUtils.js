const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  return token;
};

const getPayload = (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  return payload;
};

module.exports = {
  generateToken,
  getPayload,
};
