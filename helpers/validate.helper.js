const Validator =require("validatorjs")

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;


const validator = (body, rules, customMessages, callback) => {
    const validatiion = new Validator(body, rules, customMessages)
    validatiion.passes(()=>callback(null, true))
    validatiion.fails(()=>callback(validatiion.errors, false))
}

Validator.register('strict', value => passwordRegex.test(value),
                    'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et une lettre')

module.exports = validator