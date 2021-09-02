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
        let errors = validationResult(req)

        if (errors.isEmpty()) {

        }else{
            res.render('login', {
                categories,
                errors: errors.mapped(),
            })
        }

    },
    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {

            let lastId = 0;

            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            }) 

            let {
                name, 
                last_name,
                email, 
                pass1
            } = req.body

            let newUser = {
                id : lastId + 1,
                name,
                last_name,
                email,
                pass : pass1,
                avatar : req.file ? req.file.filename : "default-image.png",
                rol: "ROL_USER",
                tel: "",
                address: "",
                pc: "",
                province: "",
                city:""
            }

            users.push(newUser)

            writeUsersJSON(users)

            res.redirect('/users/login')

        } else {
            res.render('register', {
                categories,
                errors: errors.mapped(),
                old : req.body
            })
        }
    },
    logout: (req, res) => {

    }
}