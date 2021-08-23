const express = require('express');
const router = express.Router();

// requests for root: /messages
router
  .route('/')
  .get((req, res) => {
    // res.send('request to /messages/ was successful')
    res.render('messages');
  });


// requests for /favs/chatid
router
  .route('/:chatid')
  .get((req, res) => {
    res.send('request to /favs/:chatid was successful');
  }).post((req, res) => {
    res.send('user sends a message');
  });



  module.exports = { router };
