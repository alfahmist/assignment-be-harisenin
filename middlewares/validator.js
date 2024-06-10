const { isEmail } = require("validator");

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "email dan password wajib diisi",
    });
  }

  if (!isEmail(email)) {
    return res.status(400).send({
      message: "Invalid email",
    });
  }

  next();
};

const validateRegister = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "email dan password wajib diisi",
    });
  }

  if (!isEmail(email)) {
    return res.status(400).send({
      message: "Invalid email",
    });
  }

  next();
};

module.exports = { validateLogin, validateRegister };
