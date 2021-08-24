// router for products: this path is not directly visible to users
// it is accessed via the home page. This is why the same index.ejs
// template is rendered here.

const express = require('express');
const router = express.Router();



// ---------------- Requests for root: /products -------------------- //

module.exports = productsQueries => {

router
  .route('/')
  .get((req, res) => {

    productsQueries.getProducts(options)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));
    //res.send(`GET /products was successful. ${JSON.stringify(req.query)}`);
  })
  .post((req, res) => {

    productsQueries.postNewProduct(product)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));

    //res.send('POST to /products was successful. Admin adds product.');
  });

  // NOTE: if admin cookies is set, the favorites filter should be deactivated.

 // ---------------- Requests for other routes in /products/ -------------------- //

 router
  .route('/:product_id')
  .get((req, res) => {

    productsQueries.viewProduct(product)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));

    //res.send('GET to /products/:product_id was successful. User or admin views product modal.');
  })
  .post((req, res) => {

    productsQueries.addToFavorites(product)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));

    // res.send('POST to /products/:product_id was successful. User favorites product.');
  });


router
  .route('/:product_id/delete')
  .post((req, res) => {

    productsQueries.deleteProduct(product)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));

    //res.send('admin has deleted the product');
  });


router
  .route('/:product_id/sold')
  .post((req, res) => {

    productsQueries.markAsSold(product)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err));

    //res.send('POST to /:product_id/sold was successful. Admin marks product as sold.');
  });



  return router;
}

