const babModel = require("../models/bab.model");

const getBab = async (req, res, next) => {
  try {
    const { id_mata_pelajaran } = req.query;
    console.log(id_mata_pelajaran);
    const result = await babModel.getBab(id_mata_pelajaran);
    if (!result) {
      throw new Error(`bab tidak ditemukan`);
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

module.exports = { getBab };
