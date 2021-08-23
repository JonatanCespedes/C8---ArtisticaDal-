const express = require('express');
const app = express();
let path = require('path');

/* ENRUTADORES */
let indexRouter = require('./routes/index');
let productsRouter = require('./routes/products');
let adminRouter = require('./routes/admin');
let usersRouter = require('./routes/users');

/* Middleware */
app.use(express.static('./public'));

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Rutas */
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);


app.listen(3000, () => console.log("Servidor corriendo"))