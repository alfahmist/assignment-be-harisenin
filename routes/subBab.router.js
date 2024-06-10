const express = require("express");

const router = express.Router();

const { getSubBab } = require("../controllers/subBab.controller");

router.get("/", getSubBab);

module.exports = router;
