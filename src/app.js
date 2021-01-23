// req = request -> petición del cliente
// res = response -> respuesta del servidor
// cliente = navegador

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
// const routes =  require('./routes/index.routes')
// app.use(routes)
app.use(require('./routes/index.route'));

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(3000, () => {
  console.log('Servidor a la espera de conexiones');
});
