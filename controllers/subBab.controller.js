const jwt = require("jsonwebtoken");
const subBabModel = require("../models/subBab.model");

const getSubBab = async (req, res, next) => {
  try {
    const { id_bab } = req.query;

    const token = req.headers["authorization"].split(" ")[1];
    token ? console.log(token) : "";

    const { userid } = jwt.verify(token, "secret");
    console.log(userid);

    const result = await subBabModel.getSubBab(id_bab, userid);
    if (!result) {
      throw new Error(`sub bab tidak ditemukan`);
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

module.exports = { getSubBab };
