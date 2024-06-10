const express = require("express");

const router = express.Router();

const { getMataPelajaran } = require("../controllers/mataPelajaran.controller");

router.get("/", getMataPelajaran);

module.exports = router;
