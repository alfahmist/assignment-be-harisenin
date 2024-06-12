const db = require("../db");

const login = async (email) => {
  const query = await db("user")
    .where("email", email)
    .select("id","email", "password")
    .first()
  return query;
};

const register = async (name, password) => {
  const query = await db("user")
    .insert({ email: name, password: password })
    .then((result) => result)
    .catch((error) => {throw new Error("email sudah terdaftar")});
  return query;
};

module.exports = { login, register };
