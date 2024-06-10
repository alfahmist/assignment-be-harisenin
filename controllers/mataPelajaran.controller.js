// const kelasModel = require("../models/kelas.model");

const getMataPelajaran = async (req, res, next) => {
  try {

    console.log(req.query);
    return res.status(200).send({
      data: req.query,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { getMataPelajaran };
