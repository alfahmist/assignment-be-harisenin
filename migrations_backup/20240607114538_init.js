/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("kelas", function (table) {
      table.increments("id").primary().notNullable();
      table.string("name");
    })
    .createTable("mode_pembelajaran", function (table) {
      table.increments("id").primary().notNullable();
      table.string("name");
      table.integer("kelas_id");

      table.foreign("kelas_id").references("id").inTable("kelas");
    })
    .createTable("mata_pelajaran", function (table) {
      table.increments("id").primary().notNullable();
      table.string("name");
      table.integer("mode_pembelajaran_id");

      table
        .foreign("mode_pembelajaran_id")
        .references("id")
        .inTable("mode_pembelajaran");
    })
    .createTable("bab", function (table) {
      table.increments("id").primary().notNullable();
      table.string("name");
      table.integer("mata_pelajaran_id");

      table
        .foreign("mata_pelajaran_id")
        .references("id")
        .inTable("mata_pelajaran");
    })
    .createTable("sub_bab", function (table) {
      table.increments("id").primary().notNullable();
      table.string("name");
      table.boolean("isGratis");
      table.integer("bab_id");

      table.foreign("bab_id").references("id").inTable("bab");
    })
    .createTable("jenis_material", function (table) {
      table.increments("id").primary().notNullable();
      table.string("name");
      table.integer("exp");
      table.integer("gold");
    })
    .createTable("material", function (table) {
      table.increments("id").primary().notNullable();
      table.string("name");
      table.integer("sub_bab_id");
      table.integer("jenis_material_id");

      table.foreign("sub_bab_id").references("id").inTable("sub_bab");
      table
        .foreign("jenis_material_id")
        .references("id")
        .inTable("jenis_material");
    })
    .createTable("user", function (table) {
      table.increments("id").primary().notNullable();
      table.string("email").unique();
      table.string("name");
      table.string("password");
      table.integer("exp");
      table.integer("gold");
    })
    .createTable("progress_bab", function (table) {
      table.increments("id").primary().notNullable();
      table.integer("user_id");
      table.integer("bab_id");
      table.float("progress", 4, 2);

      table.foreign("user_id").references("id").inTable("user");
      table.foreign("bab_id").references("id").inTable("bab");
    })
    .createTable("progress_sub_bab", function (table) {
      table.increments("id").primary().notNullable();
      table.integer("user_id");
      table.integer("sub_bab_id");
      table.float("progress", 4, 2);

      table.foreign("user_id").references("id").inTable("user");
      table.foreign("sub_bab_id").references("id").inTable("sub_bab");
    })
    .createTable("progress_material", function (table) {
      table.increments("id").primary().notNullable();
      table.integer("user_id");
      table.integer("material_id");
      table.boolean("isSelesai");

      table.foreign("user_id").references("id").inTable("user");
      table.foreign("material_id").references("id").inTable("material");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
