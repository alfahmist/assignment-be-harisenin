const db = require("../db");

const getKelas = async () => {

  const query = await db("mode_pembelajaran as mp")
    .join("kelas as k", "mp.kelas_id", "k.id")
    .select("k.name as kelas","mp.name as mode")

  return query;
};

module.exports = { getKelas };
