let express = require('express');
let router = express.Router();
const { register, 
    login, 
    profile, 
    processLogin,
    processRegister,
    logout } = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')

/* GET - Register form */
router.get('/register', register);
router.post('/register', registerValidator, processRegister);

/* GET - Login form */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);

/* GET - User profile */
router.get('/profile', profile)

module.exports = router
