const jwt = require("jsonwebtoken");
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

const saveKelas = async (req, res, next) => {
  try {
  
    const {id_mode_pembelajaran} = req.query;

    const token = req.headers['authorization'].split(' ')[1];
    token ? console.log(token) : ''

    const {userid} = jwt.verify(token, "secret");  
    console.log(id_mode_pembelajaran);

    result = await kelasModel.saveKelas(id_mode_pembelajaran,userid);

    return res.status(200).send({
      data: `save succcess`,
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { getKelas,saveKelas };
