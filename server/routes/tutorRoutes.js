const express = require("express");
const {
  createTutor,
  getTutors,
  postDetails,
} = require("../controllers/tutorJobControllers");

const router = express.Router();

router.post("/tutor", createTutor);
router.get("/tutor", getTutors);
router.get("/tutor/:id", postDetails);

module.exports = router;
