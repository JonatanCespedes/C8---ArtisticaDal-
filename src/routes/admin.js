let express = require('express');
let router = express.Router();
let { 
    signin,
    dashboard, 
    products, 
    productsCreate, 
    productStore,
    productEdit, 
    productDestroy,
    productUpdate} = require('../controllers/adminController');
let uploadProductFile = require('../middlewares/uploadProductsFiles')
let productValidator = require('../validations/productCreateValidator')
let userAdminCheck = require('../middlewares/userAdminCheck')


/* GET - Admin Signin */
router.get('/', signin);
/* GET - Admin Dashboard */
router.get('/index', userAdminCheck,dashboard);
/* GET - Admin products*/
router.get('/products', userAdminCheck,products);
/* Create Product*/
router.get('/products/create', userAdminCheck,productsCreate);
router.post('/products/create', uploadProductFile.array("images"), productValidator,productStore);
/* Edit Product*/
router.get('/products/edit/:id', userAdminCheck,productEdit);
router.put('/products/edit/:id', uploadProductFile.array("images"), productValidator,productUpdate);
/* Edit Product*/
router.delete('/products/delete/:id', productDestroy);


module.exports = router;
