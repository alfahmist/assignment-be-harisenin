const db = require("../db");

const getMataPelajaran = async (id_kelas, id_mode_pembelajaran) => {

  const query = await db("mata_pelajaran as mpl")
  .select("mpl.id", "mpl.name","mpl.mode_pembelajaran_id","mpb.kelas_id")
  .join("mode_pembelajaran as mpb","mpl.mode_pembelajaran_id","mpb.id")
  .andWhere("mpl.mode_pembelajaran_id", id_mode_pembelajaran)
  .andWhere("mpb.kelas_id", id_kelas)

  return query;
};

module.exports = { getMataPelajaran };
