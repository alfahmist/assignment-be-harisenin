const mataPelajaranModel = require("../models/mataPelajaran.model");

const getMataPelajaran = async (req, res, next) => {
  try {
    const { id_kelas, id_mode_pembelajaran } = req.query;

    const result = await mataPelajaranModel.getMataPelajaran(
      id_kelas,
      id_mode_pembelajaran
    );
    if (!result) {
      throw new Error(`mata pelajaran tidak ditemukan`);
    }
    return res.status(200).send({
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { getMataPelajaran };
