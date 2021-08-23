const express = require('express');
const router = express.Router();


// ---------------- Requests for root: /chats -------------------- //

router
  .route('/')
  .get((req, res) => {
    res.send('GET /chats was successful');

    // render EJS template for chats
    res.render('chats');
  });


// requests for /favs/chatid
router
  .route('/:chatid')
  .get((req, res) => {
    res.send('request to /favs/:chatid was successful');
  }).post((req, res) => {
    res.send('user sends a message');
  });


// NOTE: DO NOT export router as an object { router } -> this causes an error
module.exports = router;
