const express = require("express");

const router = express.Router();

const { getKelas,saveKelas } = require("../controllers/kelas.controller");

router.get("/", getKelas);
router.post("/save", saveKelas);

module.exports = router;
