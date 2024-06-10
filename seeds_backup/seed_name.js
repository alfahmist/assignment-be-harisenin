/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("kelas").del();
  await knex("kelas").insert([
    { id: 1, name: "kelas1" },
    { id: 2, name: "kelas2" },
    { id: 3, name: "kelas3" },
    { id: 4, name: "kelas4" },
    { id: 5, name: "kelas5" },
    { id: 6, name: "kelas6" },
    { id: 7, name: "kelas7" },
    { id: 8, name: "kelas8" },
    { id: 9, name: "kelas9" },
    { id: 10, name: "kelas10" },
    { id: 11, name: "kelas11" },
    { id: 12, name: "kelas12" },
    { id: 13, name: "kelas13" },
    { id: 14, name: "kelas14" },
    { id: 15, name: "kelas15" },
  ]);

  await knex("mode_pembelajaran").del();
  await knex("mode_pembelajaran").insert([
    { id: 1, name: "mode pembelajaran 1", kelas_id: 1 },
    { id: 2, name: "mode pembelajaran 2", kelas_id: 1 },
    { id: 3, name: "mode pembelajaran 3", kelas_id: 1 },
    { id: 4, name: "mode pembelajaran 4", kelas_id: 2 },
    { id: 5, name: "mode pembelajaran 5", kelas_id: 2 },
    { id: 6, name: "mode pembelajaran 6", kelas_id: 2 },
    { id: 7, name: "mode pembelajaran 7", kelas_id: 3 },
    { id: 8, name: "mode pembelajaran 8", kelas_id: 3 },
    { id: 9, name: "mode pembelajaran 9", kelas_id: 3 },
    { id: 10, name: "mode pembelajaran 10", kelas_id: 4 },
    { id: 11, name: "mode pembelajaran 11", kelas_id: 4 },
    { id: 12, name: "mode pembelajaran 12", kelas_id: 4 },
    { id: 13, name: "mode pembelajaran 13", kelas_id: 5 },
    { id: 14, name: "mode pembelajaran 14", kelas_id: 5 },
    { id: 15, name: "mode pembelajaran 15", kelas_id: 5 },
  ]);

  await knex("mata_pelajaran").del();
  await knex("mata_pelajaran").insert([
    { id: 1, name: "mata pelajaran 1", mode_pembelajaran_id: 1 },
    { id: 2, name: "mata pelajaran 2", mode_pembelajaran_id: 1 },
    { id: 3, name: "mata pelajaran 3", mode_pembelajaran_id: 1 },
    { id: 4, name: "mata pelajaran 4", mode_pembelajaran_id: 2 },
    { id: 5, name: "mata pelajaran 5", mode_pembelajaran_id: 2 },
    { id: 6, name: "mata pelajaran 6", mode_pembelajaran_id: 2 },
    { id: 7, name: "mata pelajaran 7", mode_pembelajaran_id: 3 },
    { id: 8, name: "mata pelajaran 8", mode_pembelajaran_id: 3 },
    { id: 9, name: "mata pelajaran 9", mode_pembelajaran_id: 3 },
    { id: 10, name: "mata pelajaran 10", mode_pembelajaran_id: 4 },
    { id: 11, name: "mata pelajaran 11", mode_pembelajaran_id: 4 },
    { id: 12, name: "mata pelajaran 12", mode_pembelajaran_id: 4 },
    { id: 13, name: "mata pelajaran 13", mode_pembelajaran_id: 5 },
    { id: 14, name: "mata pelajaran 14", mode_pembelajaran_id: 5 },
    { id: 15, name: "mata pelajaran 15", mode_pembelajaran_id: 5 },
  ]);

  await knex("bab").del();
  await knex("bab").insert([
    { id: 1, name: "bab 1", mata_pelajaran_id: 1 },
    { id: 2, name: "bab 2", mata_pelajaran_id: 1 },
    { id: 3, name: "bab 3", mata_pelajaran_id: 1 },
    { id: 4, name: "bab 1", mata_pelajaran_id: 2 },
    { id: 5, name: "bab 2", mata_pelajaran_id: 2 },
    { id: 6, name: "bab 3", mata_pelajaran_id: 2 },
    { id: 7, name: "bab 1", mata_pelajaran_id: 3 },
    { id: 8, name: "bab 2", mata_pelajaran_id: 3 },
    { id: 9, name: "bab 3", mata_pelajaran_id: 3 },
    { id: 10, name: "bab 1", mata_pelajaran_id: 4 },
    { id: 11, name: "bab 2", mata_pelajaran_id: 4 },
    { id: 12, name: "bab 3", mata_pelajaran_id: 4 },
    { id: 13, name: "bab 1", mata_pelajaran_id: 5 },
    { id: 14, name: "bab 2", mata_pelajaran_id: 5 },
    { id: 15, name: "bab 3", mata_pelajaran_id: 5 },
  ]);

  await knex("sub_bab").del();
  await knex("sub_bab").insert([
    { id: 1, name: "sub_bab 1", bab_id: 1, gratis: true },
    { id: 2, name: "sub_bab 2", bab_id: 1, gratis: false },
    { id: 3, name: "sub_bab 3", bab_id: 1, gratis: false },
    { id: 4, name: "sub_bab 1", bab_id: 2, gratis: true },
    { id: 5, name: "sub_bab 2", bab_id: 2, gratis: false },
    { id: 6, name: "sub_bab 3", bab_id: 2, gratis: false },
    { id: 7, name: "sub_bab 1", bab_id: 3, gratis: true },
    { id: 8, name: "sub_bab 2", bab_id: 3, gratis: false },
    { id: 9, name: "sub_bab 3", bab_id: 3, gratis: false },
    { id: 10, name: "sub_bab 1", bab_id: 4, gratis: true },
    { id: 11, name: "sub_bab 2", bab_id: 4, gratis: false },
    { id: 12, name: "sub_bab 3", bab_id: 4, gratis: false },
    { id: 13, name: "sub_bab 1", bab_id: 5, gratis: true },
    { id: 14, name: "sub_bab 2", bab_id: 5, gratis: false },
    { id: 15, name: "sub_bab 3", bab_id: 5, gratis: false },
  ]);

  await knex("jenis_material").del();
  await knex("jenis_material").insert([
    { id: 1, name: "quiz", exp: 1, gold: 1 },
    { id: 2, name: "video", exp: 1, gold: 2 },
    { id: 3, name: "material 3", exp: 1, gold: 3 },
    { id: 4, name: "material 1", exp: 2, gold: 1 },
   
  ]);

  await knex("material").del();
  await knex("material").insert([
    { id: 1, name: "material 1", sub_bab_id: 1, jenis_material_id: 1 },
    { id: 2, name: "material 2", sub_bab_id: 1, jenis_material_id: 2 },
    { id: 3, name: "material 3", sub_bab_id: 1, jenis_material_id: 3 },
    { id: 4, name: "material 1", sub_bab_id: 2, jenis_material_id: 1 },
    { id: 5, name: "material 2", sub_bab_id: 2, jenis_material_id: 2 },
    { id: 6, name: "material 3", sub_bab_id: 2, jenis_material_id: 3 },
    { id: 7, name: "material 1", sub_bab_id: 3, jenis_material_id: 1 },
    { id: 8, name: "material 2", sub_bab_id: 3, jenis_material_id: 2 },
    { id: 9, name: "material 3", sub_bab_id: 3, jenis_material_id: 3 },
    { id: 10, name: "material 1", sub_bab_id: 4, jenis_material_id: 1 },
    { id: 11, name: "material 2", sub_bab_id: 4, jenis_material_id: 2 },
    { id: 12, name: "material 3", sub_bab_id: 4, jenis_material_id: 3 },
    { id: 13, name: "material 1", sub_bab_id: 5, jenis_material_id: 1 },
    { id: 14, name: "material 2", sub_bab_id: 5, jenis_material_id: 2 },
    { id: 15, name: "material 3", sub_bab_id: 5, jenis_material_id: 3 },
  ]);
};
