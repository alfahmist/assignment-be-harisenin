const db = require("../db");

const getSubBab = async (id_bab) => {

  const query = await db("sub_bab")
  .select("*")
  .andWhere("bab_id", id_bab)

  return query;
};

module.exports = { getSubBab };
