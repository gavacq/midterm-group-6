// router for products- this path is not directly visible to users

const express = require('express');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
      res.render('index');
  });

router
  .route('/:product_id')
  .get((req, res) => {


  });

  module.exports = { router };
