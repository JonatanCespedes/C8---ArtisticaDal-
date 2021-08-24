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
        let lastId = 1;

        products.forEach(product => {
            if(product.id > lastId){
                lastId = product.id
            }
        })

        let {
            name, 
            price, 
            discount, 
            category, 
            subcategory, 
            description
            } = req.body;

        let newProduct = {
            id: lastId + 1,
            name,
            price,
            description,
            discount,
            category,
            subcategory,
            image: req.file ? [req.file.filename] : "default-image.png"
        };

        products.push(newProduct);

        writeProductsJSON(products)

        res.redirect('/admin/products')
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
        
        let {
            name, 
            price, 
            discount, 
            category, 
            subcategory, 
            description
            } = req.body;
        
        products.forEach( product => {
            if(product.id === +req.params.id){
                product.id = product.id,
                product.name = name,
                product.price = price,
                product.description = description,
                product.discount = discount,
                product.category = category,
                product.subcategory = subcategory,
                product.image = req.file ? [req.file.filename] : product.image
            }
        })

        writeProductsJSON(products)

        res.redirect('/admin/products')
    },
    productDestroy: (req, res) => {
        products.forEach( product => {
            if(product.id === +req.params.id){
               let productToDestroy = products.indexOf(product);
               products.splice(productToDestroy, 1)
            }
        })
        
        writeProductsJSON(products)

        res.redirect('/admin/products')
    }
}