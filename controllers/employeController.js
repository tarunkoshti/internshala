const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
// const student = require("../models/studentModel");
const Employe = require("../models/employeModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { sendtoken } = require("../utils/SendToken");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const imagekit = require("../utils/imagekit").initImageKit();
const Internship = require("../models/internshipModel");
const Job = require("../models/jobModel");

exports.homepage = catchAsyncErrors(async function (req, res, next) {

    res.json({
        message: "secure employe homepage"
    })
});

exports.currnetEmploye = catchAsyncErrors(async function (req, res, next) {

    const employe = await Employe.findById(req.id).exec();
    res.json({ employe })
});

exports.employesignup = catchAsyncErrors(async function (req, res, next) {

    const employe = await new Employe(req.body).save();
    // res.status(201).json(employe)
    sendtoken(employe, 201, res);
});

exports.employesignin = catchAsyncErrors(async function (req, res, next) {

    const employe = await Employe.findOne({ email: req.body.email }).select("+password").exec();

    if (!employe) return next(new ErrorHandler("User not found with this email address", 404));

    const isMatch = employe.comparepassword(req.body.password);
    if (!isMatch) return next(new ErrorHandler("Wrong Credientials", 500));

    // res.json(employe);
    sendtoken(employe, 200, res);
});

exports.employesignout = catchAsyncErrors(async function (req, res, next) {

    res.clearCookie("token");
    res.json({ message: "successfully signout!" })
});

exports.employesendmail = catchAsyncErrors(async function (req, res, next) {

    const employe = await Employe.findOne({ email: req.body.email }).exec();

    if (!employe) return next(new ErrorHandler("User not found with this email address", 404));

    const url = `${req.protocol}://${req.get("host")}/employe/forget-link/${employe._id}`

    sendmail(req, res, next, url);
    employe.resetPasswordToken = "1";
    await employe.save();

    res.json({ employe, url })
});

exports.employeforgetlink = catchAsyncErrors(async function (req, res, next) {

    const employe = await Employe.findById(req.params.id).exec();

    if (!employe) return next(new ErrorHandler("User not found with this email address", 404));

    if (employe.resetPasswordToken == "1") {
        employe.resetPasswordToken = "0"
        employe.password = req.body.password
        await employe.save()
    } else {
        return next(new ErrorHandler("Invalid Reset Password Link! Please try again", 500));
    }
    res.status(200).json({
        message: "password has been successfully changed"
    })
});

exports.employeresetpassword = catchAsyncErrors(async function (req, res, next) {

    const employe = await Employe.findById(req.id).exec();
    employe.password = req.body.password;
    await employe.save();
    sendtoken(employe, 201, res);
});

exports.employeupdate = catchAsyncErrors(async function (req, res, next) {

    await Employe.findByIdAndUpdate(req.params.id, req.body).exec();
    res.status(200).json({
        success: true,
        message: "Employe updated successfully!",
    })
});

exports.employeavatar = catchAsyncErrors(async function (req, res, next) {

    const employe = await Employe.findById(req.params.id).exec();
    const file = req.files.organizationlogo;
    const modifiedFileName = `resumebuilder-${Date.now()}${path.extname(file.name)}`

    if (employe.organizationlogo.fileId !== "") {
        await imagekit.deleteFile(employe.organizationlogo.fileId);
    }

    const { fileId, url } = await imagekit.upload({
        file: file.data,
        fileName: modifiedFileName,
    })

    employe.organizationlogo = { fileId, url };
    await employe.save();

    res.status(200).json({
        success: true,
        message: "Profile Updated!"
    })
});

// ---- INTERNSHIP -----

exports.createinternship = catchAsyncErrors(async function (req, res, next) {
    const employe = await Employe.findById(req.id).exec();
    const internship = await new Internship(req.body);
    internship.employe = employe._id;
    employe.internships.push(internship._id);
    await internship.save();
    await employe.save();
    res.status(201).json({
        success: true,
        internship
    })
});

exports.readinternship = catchAsyncErrors(async function (req, res, next) {
    const {internships} = await Employe.findById(req.id).populate("internships").exec();
    res.status(200).json({
        success: true,
        internships
    })
});

exports.readallinternship = catchAsyncErrors(async function (req, res, next) {
    const  internships  = await Internship.find().exec();
    res.status(200).json({
        success: true,
        internships
    })
});

exports.readsingleinternship = catchAsyncErrors(async function (req, res, next) {
    const internship = await Internship.findById(req.params.id).exec();
    res.status(200).json({
        success: true,
        internship
    })
});

// ---- JOBS -----

exports.createjob = catchAsyncErrors(async function (req, res, next) {
    const employe = await Employe.findById(req.id).exec();
    const job = await new Job(req.body);
    job.employe = employe._id;
    employe.jobs.push(job._id);
    await job.save();
    await employe.save();
    res.status(201).json({
        success: true,
        job
    })
});

exports.readjob = catchAsyncErrors(async function (req, res, next) {
    const { jobs } = await Employe.findById(req.id).populate("jobs").exec();
    res.status(200).json({
        success: true,
        jobs
    })
});

exports.readalljob = catchAsyncErrors(async function (req, res, next) {
    const jobs = await Job.find().exec();
    res.status(200).json({
        success: true,
        jobs
    })
});

exports.readsinglejob = catchAsyncErrors(async function (req, res, next) {
    const job = await Job.findById(req.params.id).exec();
    res.status(200).json({
        success: true,
        job
    })
});

