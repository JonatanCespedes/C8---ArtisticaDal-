const { categories, users, writeUsersJSON } = require('../data/dataBase')
const { validationResult } = require('express-validator')
let bcrypt = require('bcryptjs')


module.exports = {
    /* Register form */
    register: (req, res) => {
        res.render('register', {
            categories,
            session: req.session
        })
    },
    /* Login form */
    login: (req, res) => {
        res.render('login', {
            categories,
            session: req.session
    })
    },
    /* User profile */
    profile: (req, res) =>{
        let user = users.find(user => user.id === req.session.user.id)
        
        res.render('userProfile', {
            categories,
            user,
            session: req.session
        })
    },
    profileEdit: (req, res) => {
        let user = users.find(user => user.id === +req.params.id)

        res.render('userProfileEdit', {
            categories,
            user,
            session: req.session
        })

    },
    updateProfile: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let user = users.find(user => user.id === +req.params.id)

            let {
                name,
                last_name,
                tel,
                address,
                pc,
                province,
                city
            } = req.body

            user.name = name
            user.last_name = last_name
            user.tel = tel
            user.address = address
            user.pc = pc
            user.province = province
            user.city = city
            user.avatar = req.file ? req.file.filename : user.avatar

            writeUsersJSON(users)

            delete user.pass

            req.session.user = user

            res.redirect('/users/profile')

        }else{
            res.render('userProfileEdit', {
                categories,
                errors: errors.mapped(),
                old:req.body,
                session: req.session
            })
        }
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let user = users.find(user => user.email === req.body.email)

            req.session.user = {
                id: user.id,
                name: user.name,
                last_name : user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }  

            if(req.body.remember){
                res.cookie("userArtisticaDali", req.session.user, {expires: new Date(Date.now() + 900000), httpOnly : true})
            }
            
            res.locals.user = req.session.user

            res.redirect('/')
        }else{
            res.render('login', {
                categories,
                errors: errors.mapped(),
                session: req.session
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
                pass : bcrypt.hashSync(pass1, 12),
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
                old : req.body,
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        if(req.cookies.userArtisticaDali){
            res.cookie('userArtisticaDali', '', {maxAge: -1})
        }

        res.redirect('/')
    }
}