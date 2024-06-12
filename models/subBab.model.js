const db = require("../db");

const getSubBab = async (id_bab, userid) => {
  const query = await db("progress_sub_bab as psb")
    .select("*")
    .join("sub_bab as sb", "sb.id", "psb.sub_bab_id")
    .andWhere("bab_id", id_bab)
    .andWhere("user_id", userid);

  return query;
};

module.exports = { getSubBab };
