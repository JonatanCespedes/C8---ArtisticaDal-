const fs = require('fs');
const path = require('path');

module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, '/productsDataBase.json'), "utf-8")),
    carousel: JSON.parse(fs.readFileSync(path.join(__dirname, '/banner.json'), "utf-8"))
}