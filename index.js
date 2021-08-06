const express = require('express');
const app = express();
let path = require('path');

/* Middleware */
app.use(express.static('public'));

/* Rutas */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
/* Rutas */
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})



app.listen(3000, () => console.log("Servidor corriendo"))