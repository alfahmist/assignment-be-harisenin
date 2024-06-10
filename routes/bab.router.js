const express = require("express");

const router = express.Router();

const { getBab } = require("../controllers/bab.controller");

router.get("/", getBab);

module.exports = router;
