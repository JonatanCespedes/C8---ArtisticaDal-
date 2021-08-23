const { products, categories, writeProductsJSON } = require('../data/dataBase');

let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
});

module.exports = {
    signin: (req, res) => {
        res.render('adminLogin')
    },
    dashboard: (req, res) => {
        res.render('adminIndex')
    }, 
    products: (req, res) => {
        res.render('adminProducts', {
            products
        })
    }, 
    productsCreate: (req, res) => {
        res.render('adminProductCreateForm', {
            categories, 
            subcategories
        })
    }, 
    productStore: (req, res) => {
            
    }, 
    productEdit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id)
        res.render('adminProductEditForm', {
            categories, 
            subcategories,
            product
        })
    },
    productUpdate: (req, res) => {
       
    },
    productDestroy: (req, res) => {
	
    }
}