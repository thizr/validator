const Validator =require("validatorjs")

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;


const validator = (body, rules, customMessages, callback) => {
    const validatiion = new Validator(body, rules, customMessages)
    validatiion.passes(()=>callback(null, true))
    validatiion.fails(()=>callback(validatiion.errors, false))
}

Validator.register('strict', value => passwordRegex.test(value),
                    'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et une lettre')

Validator.register('phone', ()=>{
    return value.match(/^\d{2}\d{7}$/)
}, "Le numero de téléphone n'a pas le bon format. Ex : 771234567")

module.exports = validator