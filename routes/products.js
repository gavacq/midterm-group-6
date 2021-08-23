// router for products: this path is not directly visible to users
// it is accessed via the home page. This is why the same index.ejs
// template is rendered here.

const express = require('express');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {

    res.send('GET /products was successful.');

    // render EJS template for home page -> not needed??
    res.render('index');
  });

router
  .route('/:product_id')
  .get((req, res) => {

  });


  // NOTE: DO NOT export router as an object { router } -> this causes an error
  module.exports = router;
