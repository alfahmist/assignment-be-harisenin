const db = require("../db");

const login = async (name) => {
  const query = await db("user")
    .where("name", name)
    .select("name", "password")
    .first()
  return query;
};

module.exports = { login };
