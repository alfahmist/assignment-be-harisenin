const validateLogin = (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).send({
      message: "name dan password wajib diisi",
    });
  }

  next();
};

const validateRegister = (req, res, next) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).send({
      message: "name dan password wajib diisi",
    });
  }

  next();
};

module.exports = { validateLogin,validateRegister };
