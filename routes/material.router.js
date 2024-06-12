const express = require("express");

const router = express.Router();

const { getMaterial } = require("../controllers/material.controller");

router.get("/", getMaterial);

module.exports = router;
