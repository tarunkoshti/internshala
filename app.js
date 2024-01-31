require("dotenv").config({path: "./.env"})
const express = require("express")
const app = express()
const cors = require('cors');

// Use CORS middleware

const crosOptions = {
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
}

app.use(cors(crosOptions))


// database connectivity
require("./models/db").connectDatabase();

//logger
const logger = require("morgan")
app.use(logger("tiny"))

// body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// session and cookie
const session = require("express-session")
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET
}))

const cookieparser = require("cookie-parser")
app.use(cookieparser())

// fileuploader
const fileupload = require("express-fileupload")
app.use(fileupload());

// routes
app.use("/user", require("./routes/indexRoutes"))
app.use("/resume", require("./routes/resumeRoutes"))
app.use("/employe", require("./routes/employeRoutes"))

// error handling
const ErrorHandler = require("./utils/ErrorHandler")
const { generatedError } = require("./middlewares/error")
app.all("*", function(req, res, next){
    next(new ErrorHandler(`Requested URL not found ${req.url}`, 404));
})

app.use(generatedError)

app.listen(process.env.PORT,console.log(`Server running on port ${process.env.PORT}`))