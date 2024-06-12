const db = require("../db");

const getKelas = async () => {
  const query = await db("mode_pembelajaran as mp")
    .join("kelas as k", "mp.kelas_id", "k.id")
    .select("k.name as kelas", "mp.name as mode");

  return query;
};

const saveKelas = async (id_mode_pembelajaran, userid) => {
  const mataPelajaran = await db("mata_pelajaran as mp")
    .select("mp.id as mata_pelajaran")
    .join("mode_pembelajaran as mpb ", "mp.mode_pembelajaran_id", "mpb.id")
    .andWhere("mode_pembelajaran_id", id_mode_pembelajaran)
    .then((results) => results.map((result) => result.mata_pelajaran));
  // .join("bab as b ", "mp.id", "b.mata_pelajaran_id")
  // .join("sub_bab as sb ", "b.id", "sb.bab_id")
  // .join("material as mt ", "sb.id", "mt.sub_bab_id")

  const bab = await db("bab as b")
    .select("b.id as bab")
    .join("mata_pelajaran as mp ", "mp.id", "b.id")
    .whereIn("mata_pelajaran_id", mataPelajaran)
    .then((results) => results.map((result) => result.bab));

  const sub_bab = await db("sub_bab as sb")
    .select("sb.id as sub_bab")
    .join("bab as b ", "b.id", "sb.id")
    .whereIn("bab_id", bab)
    .then((results) => results.map((result) => result.sub_bab));

  const material = await db("material as m")
    .select("m.id as material")
    .join("sub_bab as sb ", "sb.id", "m.id")
    .whereIn("sub_bab_id", sub_bab)
    .then((results) => results.map((result) => result.material));

  const forBab = bab.map((x) => ({ user_id: userid, bab_id: x, progress: 0 }));
  const forSubBab = sub_bab.map((x) => ({
    user_id: userid,
    sub_bab_id: x,
    progress: 0,
  }));
  const forMaterial = material.map((x) => ({
    user_id: userid,
    material_id: x,
    isSelesai: false,
  }));

  const trx = await db.transaction();

  await trx("progress_bab").insert(forBab);
  await trx("progress_sub_bab").insert(forSubBab);
  await trx("progress_material").insert(forMaterial);
  
  await trx.commit();

  return "save success";
};

module.exports = { getKelas, saveKelas };
