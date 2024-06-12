const jwt = require("jsonwebtoken");
const babModel = require("../models/bab.model");

const getBab = async (req, res, next) => {
  try {
    const { id_mata_pelajaran } = req.query;
  
    const token = req.headers['authorization'].split(' ')[1];
    token ? console.log(token) : ''

    const {userid} = jwt.verify(token, "secret");  
    console.log(userid);

    const result = await babModel.getBab(id_mata_pelajaran,userid);
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
