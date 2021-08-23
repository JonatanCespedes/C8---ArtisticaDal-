let express = require('express');
let router = express.Router();
const { register, 
    login, 
    profile, 
    processLogin,
    processRegister,
    logout } = require('../controllers/usersController');

/* GET - Register form */
router.get('/register', register);
router.post('/register', processRegister);

/* GET - Login form */
router.get('/login', login);
router.post('/login', processLogin);
router.get('/logout', logout);

/* GET - User profile */
router.get('/profile', profile)

module.exports = router
