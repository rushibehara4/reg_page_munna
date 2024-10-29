const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    already: { type: Boolean, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    relocate: { type: Boolean, required: true },
    currentLocation: { type: String, required: true },
    experience: { type: Number, required: true },
    realExperience: { type: Number, required: true },
    realItExperience: { type: Number, required: true },
    itExperienceDescription: { type: String },
    skillsLearned: { type: [String], default: [] },
    currentCompany: { type: String, required: true },
    currentCompanySkills: { type: [String], default: [] },
    previousCompanyDomains1: { type: String },
    previousCompanySkills1: { type: [String], default: [] },
    previousCompanyDomains2: { type: String },
    previousCompanySkills2: { type: [String], default: [] },
    previousCompanyDomains3: { type: String },
    previousCompanySkills3: { type: [String], default: [] },
    previousCompanyDomains4: { type: String },
    previousCompanySkills4: { type: [String], default: [] },
    previousCompanyDomains5: { type: String },
    previousCompanySkills5: { type: [String], default: [] },
    cvLink: { type: String },
    linkedinUrls1: { type: String },
    linkedinUrls2: { type: String },
    resumeReviewed: { type: Boolean },
    resumeReviewedStewards: { type: String },
    mockClear: { type: Boolean },
    round2Clear: { type: Boolean },
    h1b: { type: Boolean },
    round1Comments: { type: String },
    round2Comments: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
