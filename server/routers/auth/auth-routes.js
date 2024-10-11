const express = require("express");
const {
  registerUser,
} = require("../../controllers/authcontroller.js");
const router = express.Router();
router.post("/register", registerUser);
module.exports = router;