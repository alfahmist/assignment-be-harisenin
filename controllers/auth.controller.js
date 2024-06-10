const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = require("../models/auth");

const login = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    // cari name
    result = await authModel.login(name);

    if (!result) {
      throw new Error("name tidak ditemukan");
    }

    const isPasswordValid = await bcrypt.compare(password, result.password);

    if (!isPasswordValid) {
      return res.status(401).send({
        message: "password salah",
      });
    } else {
      const token = jwt.sign({ name: result.name }, "secret");
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
  const { name, password } = req.body;
  try {

    const passwordHash = await bcrypt.hash(password, 10);

    result = await authModel.register(name, passwordHash);

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
