const express = require('express');
const app = express();
let path = require('path');
let cookieParser = require('cookie-parser')
let methodOverride = require('method-override');
let session = require('express-session');

/* ENRUTADORES */
let indexRouter = require('./routes/index');
let productsRouter = require('./routes/products');
let adminRouter = require('./routes/admin');
let usersRouter = require('./routes/users');

/* Middleware */
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(methodOverride('_method'))
app.use(cookieParser())
app.use(session({
    secret: "artisticaDali",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

/* VIEWS */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Rutas */
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);


app.listen(3000, () => console.log("Servidor corriendo"))