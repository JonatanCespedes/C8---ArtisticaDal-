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



/* GET - Admin Signin */
router.get('/', signin);
/* GET - Admin Dashboard */
router.get('/index', dashboard);
/* GET - Admin products*/
router.get('/products', products);
/* Create Product*/
router.get('/products/create', productsCreate);
router.post('/products/create', productStore);
/* Edit Product*/
router.get('/products/edit/:id', productEdit);
router.put('/products/edit/:id', productUpdate);
/* Edit Product*/
router.delete('/products/delete/:id', productDestroy);


module.exports = router;
