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
  .route('/:product_id')
  .get((req, res) => {

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

      // user adds a product to favorites
      productsQueries.addToFavorites(product)
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

