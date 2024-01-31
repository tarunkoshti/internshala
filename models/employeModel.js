const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const employeModel = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, "First name is required"],
        minLength: [4, "First name should be atleast 4 character long"],
    },
    lastname: {
        type: String,
        required: [true, "Last name is required"],
        minLength: [4, "Last name should be atleast 4 character long"],
    },
    contact: {
        type: String,
        required: [true, "Contact is required"],
        maxLength: [10, "Contact must not exceed 10 character"],
        minLength: [10, "Contact should be atleast 4 character long"],
    },
    // city: {
    //     type: String,
    //     required: [true, "City name is required"],
    //     minLength: [3, "City should be atleast 3 character long"],
    // },
    // gender: {
    //     type: String,
    //     enum: ["Male", "Female", "Others"]
    // },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        select: false,
        maxLength: [15, "Password should not exceed more then 15 character"],
        minLength: [6, "Password should have atleast 6 character"],
        // match: []
    },
    resetPasswordToken: {
        type: String,
        default: "0"
    },
    organizationname: {
        type: String,
        required: [true, "Organization name is required"],
        minLength: [4, "Organization name should be atleast 4 character long"],
    },
    organizationlogo: {
        type: Object,
        default: {
            fileId: "",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_rwCidzBp_A6HkH0f0Tt_Oytm19rVHbRcWDWSmGLNw&s",
        }
    },

    // resume: {
    //     education: [],
    //     jobs: [],
    //     internships: [],
    //     responsibilities: [],
    //     courses: [],
    //     projects: [],
    //     skills: [],
    //     accomplishments: [],
    // }

    internships: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "internship"
        }
    ],
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "job"
        }
    ]

},
    { timestamps: true }
);

employeModel.pre("save", function () {

    if (!this.isModified("password")) {
        return;
    }

    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
});

employeModel.methods.comparepassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

employeModel.methods.getjwttoken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE
        })
}

const Employe = mongoose.model("employe", employeModel);
module.exports = Employe;