const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }],
    employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employe"
    },
    title: String,
    skills: String,
    jobtype: {
        type: String,
        enum: ["In office", "Remote"]
    },
      workingtype: {
        type: String,
        enum: ["Full-time", "Part-time"]
    },
    openings: Number,
    responsbility: String,
    preferences: String,
    salary: Number,
    perks: String,
    assements: String,
    company: String,
    location: String,
    contact: {
        type: String,
        // required: [true, "Contact is required"],
        maxLength: [10, "Contact must not exceed 10 character"],
        minLength: [10, "Contact should be atleast 4 character long"],
    },

},
    { timestamps: true }
);

const Job = mongoose.model("job", jobModel);
module.exports = Job;