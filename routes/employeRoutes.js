const express = require("express");
const router = express.Router();
const { homepage, employesignup, employesignin, employesignout, currnetEmploye, employesendmail, employeforgetlink, employeresetpassword, employeupdate, employeavatar, createinternship, readinternship, readsingleinternship, createjob, readjob, readsinglejob, readallinternship, readalljob
} = require("../controllers/employeController");
const { isAuthenticated } = require("../middlewares/auth");

//GET /
router.get("/", homepage)

//POST /current
router.post("/current", isAuthenticated, currnetEmploye)

//POST /signup
router.post("/signup", employesignup)

//POST /signin
router.post("/signin", employesignin)

//GET /signout
router.get("/signout", isAuthenticated, employesignout)

//POST /send-mail
router.post("/send-mail", employesendmail)

// // /forget-link/659ecf41d48275518f826873

//GET /forget-link/:employeid
router.post("/forget-link/:id", employeforgetlink)

//POST /reset-password/:employeid
router.post("/reset-password/:id", isAuthenticated, employeresetpassword)

//POST /update/:employeid
router.post("/update/:id", isAuthenticated, employeupdate)

//POST /avatar/:employeid
router.post("/avatar/:id", isAuthenticated, employeavatar)


// ---- INTERNSHIP -----

//POST /internship/create
router.post("/internship/create", isAuthenticated, createinternship)

//POST /internship/read/
router.get("/internship/read", isAuthenticated, readinternship)

//POST /internship/read/all
router.get("/internship/read/all", readallinternship)


//POST /internship/read/:id
router.get("/internship/read/:id", isAuthenticated, readsingleinternship)


// ---- JOBS -----

//POST /job/create
router.post("/job/create", isAuthenticated, createjob)

//POST /job/read/
router.get("/job/read/", isAuthenticated, readjob)

//POST /job/read/all
router.get("/job/read/all", readalljob)

//POST /job/read/:id
router.post("/job/read/:id", isAuthenticated, readsinglejob)

module.exports = router;
