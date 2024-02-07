const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema({

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }],
    employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employe"
    },
    profile: String,
    skills: String,
    internshiptype: {
        type: String,
        enum: ["In office", "Remote","Hybrid"]
    },
    workingtype: {
        type: String,
        enum: ["Full-time", "Part-time"]
    },
    openings: Number,
    from: String,
    to: String,
    duration: String,
    responsibility: String,
    preferences:String,
    stipend:{
       status:{
            type: String,
            enum: ["Fixed", "Negotiable", "Performance based", "Unpaid"]
       },
       amount: Number,
    },
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

const Internship = mongoose.model("internship", internshipModel);
module.exports = Internship;