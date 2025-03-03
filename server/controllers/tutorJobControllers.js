const Tutor = require("../models/tutorJobModels");

const createTutor = async (req, res) => {
  try {
    
    const tutor = await Tutor.create(req.body);
    // await tutor.save();

    res.status(201).json({
      success: true,
      message: "Tutor registered successfully",
      data: tutor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating tutor",
      error: error.message,
    });
  }
};

const getTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find();
    res.status(200).json({
      success: true,
      message: "Tutors fetched successfully",
      data: tutors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching tutors",
      error: error.message,
    });
  }
};

const postDetails = async (req, res) => {
  try {
    const details = await Tutor.findOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: "Tutors fetched successfully",
      data: details,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching tutors",
      error: error.message,
    });
  }
}
module.exports = { createTutor, getTutors , postDetails};
