const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema(
  {
    location: { type: String, required: true },
    title: { type: String, required: true },
    jobId: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    qualification: { type: String, required: true },
    areaCovered: { type: [String], required: true },
    expectedMinimumSalary: { type: String, required: true },
    currentStatusForTuition: { type: String, required: true },
    daysPerWeek: { type: [String], required: true },
    preferredTuitionStyle: { type: [String], required: true },
    tutoringExperience: { type: String, required: true },
    placeOfLearning: { type: String, required: true },
    extraFacilities: { type: [String] },
    preferredMediumOfInstruction: { type: [String], required: true },
    preferredClass: { type: [String], required: true },
    preferredSubjects: {
      type: Map,
      of: String,
      required: true,
    },
    preferredTime: { type: [String], required: true },
    preferredAreaToTeach: { type: [String], required: true },
  },
  { timestamps: true }
);

const Tutor = mongoose.model("TutorJob", tutorSchema);

module.exports = Tutor;
