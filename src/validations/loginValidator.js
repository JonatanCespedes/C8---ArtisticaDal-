const { check } = require('express-validator')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
]