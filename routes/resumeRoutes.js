const express = require("express");
const router = express.Router();
const { resume, addeducation, editeducation, deleteeducation,
    addjob, editjob, deletejob,
    addinternship, editinternship, deleteinternship, 
    addresponsibility, editresponsibility, deleteresponsibility,
    addcourse, editcourse, deletecourse,
    addproject, editproject, deleteproject,
    addskill, editskill, deleteskill,
    addacc, editacc, deleteacc,
} = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");

//GET /
router.get("/", isAuthenticated, resume)

// EDUCATION

//POST /add-edu
router.post("/add-edu", isAuthenticated, addeducation)

//POST /edit-edu
router.post("/edit-edu/:eduid", isAuthenticated, editeducation)

//POST /delete-edu
router.post("/delete-edu/:eduid", isAuthenticated, deleteeducation)

// JOBS

//POST /add-j
router.post("/add-job", isAuthenticated, addjob)

//POST /edit-j
router.post("/edit-job/:jobid", isAuthenticated, editjob)

//POST /delete-j
router.post("/delete-job/:jobid", isAuthenticated, deletejob)

// INTERNSHIPS

//POST /add-intern
router.post("/add-intern", isAuthenticated, addinternship)

//POST /edit-intern
router.post("/edit-intern/:internid", isAuthenticated, editinternship)

//POST /delete-intern
router.post("/delete-intern/:internid", isAuthenticated, deleteinternship)

// RESPONSIBILITIES

//POST /add-respo
router.post("/add-respo", isAuthenticated, addresponsibility)

//POST /edit-respo
router.post("/edit-respo/:respoid", isAuthenticated, editresponsibility)

//POST /delete-respo
router.post("/delete-respo/:respoid", isAuthenticated, deleteresponsibility)

// COURSES

//POST /add-course
router.post("/add-course", isAuthenticated, addcourse)

//POST /edit-course
router.post("/edit-course/:courseid", isAuthenticated, editcourse)

//POST /delete-course
router.post("/delete-course/:courseid", isAuthenticated, deletecourse)

// PROJECTS

//POST /add-project
router.post("/add-project", isAuthenticated, addproject)

//POST /edit-project
router.post("/edit-project/:projectid", isAuthenticated, editproject)

//POST /delete-project
router.post("/delete-project/:projectid", isAuthenticated, deleteproject)


// SKILLS

//POST /add-skill
router.post("/add-skill", isAuthenticated, addskill)

//POST /edit-skill
router.post("/edit-skill/:skillid", isAuthenticated, editskill)

//POST /delete-skill
router.post("/delete-skill/:skillid", isAuthenticated, deleteskill)


// ACCOMPLISHMENTS

//POST /add-acc
router.post("/add-acc", isAuthenticated, addacc)

//POST /edit-acc
router.post("/edit-acc/:accid", isAuthenticated, editacc)

//POST /delete-acc
router.post("/delete-acc/:accid", isAuthenticated, deleteacc)

module.exports = router;
