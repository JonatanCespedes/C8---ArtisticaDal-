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

/* GET - Register form */
router.get('/register', register);
router.post('/register', uploadUserAvatar.single('avatar'), registerValidator, processRegister);

/* GET - Login form */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);
router.get('/logout', logout);

/* GET - User profile */
router.get('/profile', profile)

router.get('/profile/edit/:id', profileEdit)
router.put('/profile/edit/:id', uploadUserAvatar.single('avatar'),updateProfile)

module.exports = router
