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


/* GET - Admin Signin */
router.get('/', signin);
/* GET - Admin Dashboard */
router.get('/index', dashboard);
/* GET - Admin products*/
router.get('/products', products);
/* Create Product*/
router.get('/products/create', productsCreate);
router.post('/products/create', uploadProductFile.single("image"),productStore);
/* Edit Product*/
router.get('/products/edit/:id', productEdit);
router.put('/products/edit/:id', uploadProductFile.single("image"), productUpdate);
/* Edit Product*/
router.delete('/products/delete/:id', productDestroy);


module.exports = router;
