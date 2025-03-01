const express = require("express");
const { createUser, loginUser } = require("../controllers/userControllers");
const router = express.Router();



router.post("/user/register", createUser);
router.post("/user/login" , loginUser);

module.exports = router;
