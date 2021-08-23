const express = require('express');
const app = express();
const favs  = require('./favs');
const messages  = require('./messages');
const products  = require('./products');



// use messages.js file to handle endpoints starting with /messages
app.use('/messages', messages);

// use products.js file to handle endpoints starting with /products
app.use('/products', products);



// GET: handle root path (home page)
app.get('/', (req, res) => {

  res.send('GET / successful');
  //res.render('../views/index');
});
