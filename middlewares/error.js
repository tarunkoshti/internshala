exports.generatedError = (err, req, res, next) => {

    if(err.name === "MongoServerError" && err.message.includes("E11000 duplicate key"))
    {
        err.message = "User with this email address is already exists"
    }

    const statuscode = err.statuscode || 500 ;
    res.status(statuscode).json({
        message: err.message,
        errName: err.name,
        // stack: err.stack
    })
}