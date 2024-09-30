export function err(err,req,res,next){
    if(res.headersSent) return next(err)
    res.status(500).json({
        error: "true",
        message: "err server",
        stack : err.stack
    })
}