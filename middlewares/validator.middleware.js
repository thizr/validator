const validator = require('../helpers/validate.helper')


const input = (req, res, next) =>{

    const validatiionRules = {
        "email" : "email",
        "phone" : "string",
        "password" : "string|min:6|strict",
    }

    validator(req.body, validatiionRules, {}, (error, status)=>{
        if (!status) {
            return res.status(412).json({
                success : false,
                message : 'Validation failed',
                data : error
            })
        }
        next()
    })

}

module.exports = {
    input,
}
