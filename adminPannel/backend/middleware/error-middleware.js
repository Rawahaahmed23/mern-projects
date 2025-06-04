const errromildeWare = (err,req,res,next)=>{
    const status = err.status || 500
    const massage = err.massage || 'backend Errror'
    const extraDetails = err.extraDetails || 'Error form backend'


    return res.status(status).json({
        massage,extraDetails
    })
}

module.exports =errromildeWare