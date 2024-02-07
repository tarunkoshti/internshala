const express = require("express");
const router = express.Router();
const { homepage, studentsignup, studentsignin, studentsignout, currnetUser, studentsendmail, studentforgetlink, studentresetpassword, studentupdate, studentavatar, applyinternship, applyjob } = require("../controllers/indexController");
const { isAuthenticated } = require("../middlewares/auth");

//GET /
router.get("/",homepage)

//POST /student
router.get("/student", isAuthenticated, currnetUser)

//POST /student/signup
router.post("/student/signup", studentsignup)

//POST /student/signin
router.post("/student/signin", studentsignin)

//GET /student/signin
router.get("/student/signout", isAuthenticated, studentsignout)

//POST /student/send-mail
router.post("/student/send-mail", studentsendmail)

// /student/forget-link/659ecf41d48275518f826873

//GET /student/forget-link/:studentid
router.post("/student/forget-link/:id", studentforgetlink)

//POST /student/reset-password/:studentid
router.post("/student/reset-password/:id", isAuthenticated, studentresetpassword)

//POST /student/update/:studentid
router.post("/student/update/:id", isAuthenticated, studentupdate)

//POST /student/avatar/:studentid
router.post("/student/avatar/:id", isAuthenticated, studentavatar)

// ---- Apply Internship ----

//POST /student/apply/internship/:internshipid
router.post("/student/apply/internship/:internshipid", isAuthenticated, applyinternship)


// ---- Apply Job ----

//POST /student/apply/job/:jobtid
router.post("/student/apply/job/:jobid", isAuthenticated, applyjob)

module.exports = router;
