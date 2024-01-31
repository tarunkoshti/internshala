const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const student = require("../models/studentModel");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { v4: uuidv4 } = require('uuid');

exports.resume = catchAsyncErrors(async function (req, res, next) {

    const { resume } = await Student.findById(req.id).exec();

    res.json({
        message: "secure resume page", resume
    })
});

// EDUCATION

exports.addeducation = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body, id: uuidv4() });
    await student.save()
    res.json({message: "Education added!"})
});

exports.editeducation = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const eduIndex = student.resume.education.findIndex(i => i.id === req.params.eduid)
    student.resume.education[eduIndex] = { ...student.resume.education[eduIndex], ...req.body,}
    await student.save()
    res.json({ message: "Education updated!" })
});

exports.deleteeducation = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const filterededu = student.resume.education.filter((i) => i.id !== req.params.eduid)
    student.resume.education = filterededu;
    await student.save()
    res.json({ message: "Education deleted!" })
});

// JOBS

exports.addjob = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.resume.jobs.push({ ...req.body, id: uuidv4() });
    await student.save()
    res.json({ message: "Job added!" })
});

exports.editjob = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const jobIndex = student.resume.jobs.findIndex(i => i.id === req.params.jobid)
    student.resume.jobs[jobIndex] = { ...student.resume.jobs[jobIndex], ...req.body, }
    await student.save()
    res.json({ message: "Job updated!" })
});

exports.deletejob = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const filteredjob = student.resume.jobs.filter((i) => i.id !== req.params.jobid)
    student.resume.jobs = filteredjob;
    await student.save()
    res.json({ message: "Job deleted!" })
});

// INTERNSHIPS

exports.addinternship = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.resume.internships.push({ ...req.body, id: uuidv4() });
    await student.save()
    res.json({ message: "Internship added!" })
});

exports.editinternship = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const internIndex = student.resume.internships.findIndex(i => i.id === req.params.internid)
    student.resume.internships[internIndex] = { ...student.resume.internships[internIndex], ...req.body, }
    await student.save()
    res.json({ message: "Internship updated!" })
});

exports.deleteinternship = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const filteredintern = student.resume.internships.filter((i) => i.id !== req.params.internid)
    student.resume.internships = filteredintern;
    await student.save()
    res.json({ message: "Internship deleted!" })
});

// RESPONSIBILITIES

exports.addresponsibility = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.resume.responsibilities.push({ ...req.body, id: uuidv4() });
    await student.save()
    res.json({ message: "Responsibility added!" })
});

exports.editresponsibility = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const respoIndex = student.resume.responsibilities.findIndex(i => i.id === req.params.respoid)
    student.resume.responsibilities[respoIndex] = { ...student.resume.responsibilities[respoIndex], ...req.body, }
    await student.save()
    res.json({ message: "Responsibility updated!" })
});

exports.deleteresponsibility = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const filteredrespo = student.resume.responsibilities.filter((i) => i.id !== req.params.respoid)
    student.resume.responsibilities = filteredrespo;
    await student.save()
    res.json({ message: "Responsibility deleted!" })
});

// COURSES

exports.addcourse  = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.resume.courses.push({ ...req.body, id: uuidv4() });
    await student.save()
    res.json({ message: "Course added!" })
});

exports.editcourse = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const courseIndex = student.resume.courses.findIndex(i => i.id === req.params.courseid)
    student.resume.courses[courseIndex] = { ...student.resume.courses[courseIndex], ...req.body, }
    await student.save()
    res.json({ message: "Course updated!" })
});

exports.deletecourse = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const filteredcourse = student.resume.courses.filter((i) => i.id !== req.params.courseid)
    student.resume.courses = filteredcourse;
    await student.save()
    res.json({ message: "Course deleted!" })
});

// PROJECTS

exports.addproject = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.resume.projects.push({ ...req.body, id: uuidv4() });
    await student.save()
    res.json({ message: "Project added!" })
});

exports.editproject = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const projectIndex = student.resume.projects.findIndex(i => i.id === req.params.projectid)
    student.resume.projects[projectIndex] = { ...student.resume.projects[projectIndex], ...req.body, }
    await student.save()
    res.json({ message: "Project updated!" })
});

exports.deleteproject = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const filteredproject = student.resume.projects.filter((i) => i.id !== req.params.projectid)
    student.resume.projects = filteredproject;
    await student.save()
    res.json({ message: "Project deleted!" })
});

// SKILLS

exports.addskill = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.resume.skills.push({ ...req.body, id: uuidv4() });
    await student.save()
    res.json({ message: "Skill added!" })
});

exports.editskill = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const skillIndex = student.resume.skills.findIndex(i => i.id === req.params.skillid)
    student.resume.skills[skillIndex] = { ...student.resume.skills[skillIndex], ...req.body, }
    await student.save()
    res.json({ message: "Skill updated!" })
});

exports.deleteskill = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const filteredskill = student.resume.skills.filter((i) => i.id !== req.params.skillid)
    student.resume.skills = filteredskill;
    await student.save()
    res.json({ message: "Skill deleted!" })
});

// ACCOMPLISHMENTS

exports.addacc = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.resume.accomplishments.push({ ...req.body, id: uuidv4() });
    await student.save()
    res.json({ message: "Accomplishment added!" })
});

exports.editacc = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const accIndex = student.resume.accomplishments.findIndex(i => i.id === req.params.accid)
    student.resume.accomplishments[accIndex] = { ...student.resume.accomplishments[accIndex], ...req.body, }
    await student.save()
    res.json({ message: "Accomplishment updated!" })
});

exports.deleteacc = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const filteredacc = student.resume.accomplishments.filter((i) => i.id !== req.params.accid)
    student.resume.accomplishments = filteredacc;
    await student.save()
    res.json({ message: "Accomplishment deleted!" })
});