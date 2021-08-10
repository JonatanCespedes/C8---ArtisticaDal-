let { products } = require('../data/dataBase'); 

module.exports = {
    index: (req, res) => {
        let productsSlider = products.filter(product => product.discount >= 15)

        res.render('home', {
            titleSlider : "Ofertas especiales",
            productsSlider
        })
    }
}