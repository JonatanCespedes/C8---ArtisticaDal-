let express = require('express');
let router = express.Router();
const { register, 
    login, 
    profile, 
    processLogin,
    processRegister,
    logout,
    profileEdit,
    updateProfile } = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')
const uploadUserAvatar = require('../middlewares/uploadUserAvatar')
const userSessionCheck = require('../middlewares/userSessionCheck')
const userLog = require('../middlewares/userLog')

/* GET - Register form */
router.get('/register', userLog,register);
router.post('/register', uploadUserAvatar.single('avatar'), registerValidator, processRegister);

/* GET - Login form */
router.get('/login', userLog, login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', userSessionCheck, logout);

/* GET - User profile */
router.get('/profile', userSessionCheck,profile)

router.get('/profile/edit/:id', userSessionCheck,profileEdit)
router.put('/profile/edit/:id', uploadUserAvatar.single('avatar'),updateProfile)

module.exports = router
