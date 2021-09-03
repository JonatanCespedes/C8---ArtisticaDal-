const { products, carousel, categories } = require('../data/dataBase')

module.exports = {
    index: (req, res) => {
        let sliderProducts = products.filter(product => product.discount >= 15)
        
        res.render('index', {
            sliderTitle : "Ofertas especiales",
            sliderProducts,
            carousel,
            categories,
            session: req.session
        })
    }
}