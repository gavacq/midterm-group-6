// router for products: this path is not directly visible to users
// it is accessed via the home page. This is why the same index.ejs
// template is rendered here.

const express = require('express');
const router = express.Router();

const adminId = require('./constants');



// ---------------- Requests for root: /products -------------------- //

module.exports = productsQueries => {

router
  .route('/')
  .get((req, res) => {

    const options = {
      minimumPrice: req.query.minimumPrice,
      maximumPrice: req.query.maximumPrice
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
    if (req.session.userId === adminId) {

      const product = {
        productId: req.params.productId,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imagePath: req.body.imagePath
      }

      // admin adds a product for sale
      productsQueries.postNewProduct(product)
        .then(data => {
          res.json(data);
        })
        .catch(err => console.log(err));

    }

  });

  // NOTE: if admin cookies is set, the favorites filter should be deactivated.

 // ---------------- Requests for other routes in /products/ -------------------- //

 router
  .route('/:productId')
  .get((req, res) => {

    const product = {
      productId: req.params.productId
    }

    // user or admin views a product modal
    productsQueries.viewProduct(product)
      .then(data => {
        res.json(data);
      })
      .catch(err => console.log(err));

  })
  .post((req, res) => {

    // check that user is NOT admin
    if (req.session.userId !== adminId) {


      const product = {
        productId: req.params.productId,
        favorite: req.body.favorite
      }

      // user adds a product to favorites
      productsQueries.addToFavorites(product, req.session.userId)
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
     if (req.session.userId === adminId) {

        const product = {
          productId: req.params.productId
        }

        // admin deletes a product
        productsQueries.deleteProduct(product)
          .then(data => {
            res.json(data);
          })
          .catch(err => console.log(err));

      }

  });


router
  .route('/:product_id/sold')
  .post((req, res) => {

     // check that user is admin
     if (req.session.userId === adminId) {

      const product = {
        productId: req.params.productId
      }

      // admin marks a product as sold
      productsQueries.markAsSold(product)
        .then(data => {
          res.json(data);
        })
        .catch(err => console.log(err));
     }

  });


  return router;
}

