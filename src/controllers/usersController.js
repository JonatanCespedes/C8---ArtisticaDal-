const { categories, users, writeUsersJSON } = require('../data/dataBase')
const { validationResult } = require('express-validator')


module.exports = {
    /* Register form */
    register: (req, res) => {
        res.render('register', {
            categories
        })
    },
    /* Login form */
    login: (req, res) => {
        res.render('login', {
            categories
    })
    },
    /* User profile */
    profile: (req, res) =>{
        res.render('userProfile', {
            categories
        })
    },
    processLogin: (req, res) => {
      

    },
    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            
        } else {
            
        }
    },
    logout: (req, res) => {

    }
}