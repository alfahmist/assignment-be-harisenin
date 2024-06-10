const db = require("../db");

const getBab = async (id_mata_pelajaran) => {

  const query = await db("bab")
  .select("*")
  .andWhere("mata_pelajaran_id", id_mata_pelajaran)

  return query;
};

module.exports = { getBab };
