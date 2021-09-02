const { check, body } = require('express-validator')
const { users } = require('../data/dataBase')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    body('email')
    .custom(value => {
        let user = users.find(user => user.email === value)

        if(user !== undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("Email no registrado"),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
]