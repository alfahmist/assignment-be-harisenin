const jwt = require("jsonwebtoken");

const authModel = require("../models/auth");

const login = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    if (!name || !password) {
      throw new Error("name atau password wajib diisi");
    }

    // cari name
    result = await authModel.login(name);

    if (!result) {
      throw new Error("name tidak ditemukan");
    }

    // auth password
    if (result.password !== password) {
      throw new Error("password salah");
    }

    const token = jwt.sign({ name: result.name }, "secret");
    console.log(result);
    return res.status(200).send({
      message: "login sukses",
      token: token,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { login };
