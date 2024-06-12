const db = require("../db");

const getMaterial = async (id_sub_bab, userid) => {
  const query = await db("progress_material as pm")
    .select("*")
    .join("material as m", "m.id", "pm.material_id")
    .andWhere("sub_bab_id", id_sub_bab)
    .andWhere("user_id", userid);

  return query;
};

module.exports = { getMaterial };
