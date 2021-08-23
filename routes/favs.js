const express = require('express');
const router = express.Router();

// requests for root: /favs
router
  .route('/')
  .get((req, res) => {
    res.send('request to /favs/ was successful')
  })
  .post((req, res) => {
    res.send('user removes an item from favorites')
  });


// requests for /favs/etc

// this will not render new page, SPA (ajax) and XHR
// use ajax to get data from database
router
  .route('/:favid')
  .get((req, res) => {
    res.send('request to /favs/:favid was successful')
  });

