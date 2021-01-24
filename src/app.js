// req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

const autoprefixer = require('express-autoprefixer');
const sassMiddleware = require('node-sass-middleware');
const postcssMiddleware = require('postcss-middleware');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(
  sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, '../public/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css'
  })
);

app.use(
  '/css',
  postcssMiddleware({
    src: req => req.url,
    plugins: [autoprefixer({ browsers: ['last 2 versions'] })]
  })
);

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

// ROUTES
app.use(require('./routes/index.routes'));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(3000, () => {
  console.log('Servidor a la espera de conexiones');
});
