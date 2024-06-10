const express = require("express");

const router = express.Router();

const { getKelas } = require("../controllers/kelas.controller");

router.get("/", getKelas);

module.exports = router;
