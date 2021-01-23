// req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const autoprefixer = require('autoprefixer');
const sassMiddleware = require('node-sass-middleware');
const postcssMiddleware = require('postcss-middleware');
app.use(bodyParser.urlencoded({ extended: true }));
// TEST SASS
app.use(
  sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, '../public/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css' // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
  })
);

app.use(
  postcssMiddleware({
    plugins: [
      /* Plugins */
      autoprefixer({
        /* Options */
      })
    ],
    src: function (req) {
      return path.join(__dirname + '../public', req.url);
    }
  })
);

//FIN TEST SASS

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.use(require('./routes/index.route'));

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(3000, () => {
  console.log('Servidor a la espera de conexiones');
});
