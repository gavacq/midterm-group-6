// router for products: this path is not directly visible to users
// it is accessed via the home page. This is why the same index.ejs
// template is rendered here.

const express = require('express');
const router = express.Router();


// ---------------- Requests for root: /products -------------------- //

router
  .route('/')
  .post((req, res) => {
    res.send('POST to /products was successful. Admin adds product.');
  });


 // ---------------- Requests for other routes in /products/ -------------------- //

 router
  .route('/:product_id')
  .get((req, res) => {
    res.send('GET to /products/:product_id was successful. User or admin views product modal.');
  })
  .post((req, res) => {
    res.send('POST to /products/:product_id was successful. User favorites product.');
  });


router
  .route('/:product_id/delete')
  .post((req, res) => {
    res.send('admin has deleted the product');
  });


router
  .route('/:product_id/sold')
  .post((req, res) => {
    res.send('POST to /:product_id/sold was successful. Admin marks product as sold.');
  });


router
  .route('/products/[query_params]')
  .get((req, res) => {
    res.send('GET /products/[query_params] was successful. Filter by price or favorites.');
  });
  // NOTE: if admin cookies is set, the favorites filter should be deactivated.




  // NOTE: DO NOT export router as an object { router } -> this causes an error
  module.exports = router;
