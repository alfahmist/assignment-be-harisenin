const express = require("express");

const router = express.Router();

const { login, register } = require("../controllers/auth.controller");
const { validateLogin, validateRegister } = require("../middlewares/validator");

router.post("/login", validateLogin, login);
router.post("/register", validateRegister, register);

module.exports = router;
