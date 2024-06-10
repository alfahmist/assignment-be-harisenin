const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = require("../models/auth.model");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // cari name
    result = await authModel.login(email);

    if (!result) {
      throw new Error("email tidak ditemukan");
    }

    const isPasswordValid = await bcrypt.compare(password, result.password);

    if (!isPasswordValid) {
      return res.status(401).send({
        message: "password salah",
      });
    } else {
      const token = jwt.sign({ email: result.email }, "secret");
      return res.status(200).send({
        message: "login sukses",
        token: token,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    result = await authModel.register(email, passwordHash);

    return res.status(200).send({
      message: "register sukses",
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { login, register };
