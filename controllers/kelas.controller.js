const kelasModel = require("../models/kelas.model");
const { arrayManipulation } = require("../utlis/arrayManipulation");

const getKelas = async (req, res, next) => {
  try {
    result = await kelasModel.getKelas();

    const newResult = arrayManipulation(result);

    return res.status(200).send({
      data: newResult,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { getKelas };
