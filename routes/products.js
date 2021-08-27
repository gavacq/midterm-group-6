// router for products: this path is not directly visible to users
// it is accessed via the home page. This is why the same index.ejs
// template is rendered here.

const express = require('express');
const router = express.Router();

const {adminId} = require('../constants');

// ---------------- Requests for root: /products -------------------- //

module.exports = productsQueries => {
  router
    .route('/')
    .get((req, res) => {
      const options = {
        minimumPrice: req.query["minimum-price"],
        maximumPrice: req.query["maximum-price"],
        favorite: req.query.favorite,
        userId: Number(req.session.userId)
      };

      // user or admin views all products in home page
      productsQueries.getProducts(options)
        .then(data => {
          res.json(data);
        })
        .catch(err => console.log(err));
    //res.send(`GET /products was successful. ${JSON.stringify(req.query)}`);
    })
    .post((req, res) => {
      // check that user is admin
      if (Number(req.session.userId) === adminId) {
        const product = {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          imagePath: req.body.image_path
        };

        console.log('new product: ', product);

        // admin adds a product for sale
        productsQueries.postNewProduct(product)
          .then(data => {
            return res.json(data);
          })
          .catch(err => console.log(err));
      }
    });

  // NOTE: if admin cookies is set, the favorites filter should be deactivated.

  // ---------------- Requests for other routes in /products/ -------------------- //

  router
    .route('/:productId')
    .get((req, res) => {
      const product = {productId: req.params.productId};
      console.log('product', product);
      // user or admin views a product modal
      productsQueries.viewProduct(product)
        .then(data => {
          const userId = Number(req.session.userId);
          if (adminId === userId) {
            data[0].isAdmin = true;
          }

          console.log('data', data);
          
          res.json(data);
        })
        .catch(err => console.log(err));
    })
    .post((req, res) => {
      // check that user is NOT admin
      if (Number(req.session.userId) !== adminId) {
        const product = {
          productId: req.params.productId,
          favorite: req.body.favorite
        };

        // user adds a product to favorites
        productsQueries.addToFavorites(product, Number(req.session.userId))
          .then(data => {
            res.json(data);
          })
          .catch(err => console.log(err));
      }
    });

  router
    .route('/:productId/fav')
    .post((req, res) => {
      // check that user is NOT admin
     
      if (req.session.userId !== adminId) {
        const product = {productId: req.params.productId, };
        console.log(product);
        // user adds a product to favorites
        productsQueries.deleteFavourites(product, req.session.userId)
          .then(data => {
            res.json(data);
          })
          .catch(err => console.log(err));
      }
    });

  router
    .route('/:product_id/delete')
    .post((req, res) => {
      // check that user is admin
      if (Number(req.session.userId) === adminId) {
        const product = {productId: req.params.product_id};
       
        // admin deletes a product
        productsQueries.deleteProduct(product)
          .then(data => {
            console.log('deleted a product.');
            res.json(data);
          })
          .catch(err => console.log(err));
      }
    });

  router
    .route('/:product_id/sold')
    .post((req, res) => {
      // check that user is admin
      if (Number(req.session.userId) === adminId) {
        const product = {productId: req.params.product_id};

        // admin marks a product as sold
        productsQueries.markAsSold(product)
          .then(data => {
            res.json(data);
          })
          .catch(err => console.log(err));
      }
    });

  return router;
};
