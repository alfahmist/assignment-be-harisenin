const db = require("../db");

const getBab = async (id_mata_pelajaran,userid) => {

  const query = await db("progress_bab as pb")
  .select("*")
  .join("bab as b","b.id","pb.bab_id")
  .andWhere("mata_pelajaran_id", id_mata_pelajaran)
  .andWhere("user_id",userid)

  return query;
};

module.exports = { getBab };
