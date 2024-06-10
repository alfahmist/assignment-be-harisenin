const db = require("../db");

const login = async (name) => {
  const query = await db("user")
    .where("name", name)
    .select("name", "password")
    .first()
  return query;
};

const register = async (name, password) => {
  const query = await db("user")
    .insert({ name: name, password: password })
    .then((result) => result)
    .catch((error) => {throw new Error("name sudah terdaftar")});
  return query;
};

module.exports = { login, register };
