let { products, carousel } = require('../data/dataBase')
 
module.exports = {
    detail: (req, res) => {
        let productID = +req.params.id;

        let product = products.find(product => product.id === productID)
        let productsSlider = products.filter(item => item.category === product.category)

        res.render('productDetail', {
            titleSlider: "Productos relacionados",
            productsSlider,
            product,
            bannerSlides: carousel
        })
    }
}