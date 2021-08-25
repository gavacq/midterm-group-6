const express = require("express");
const router = express.Router();

// ---------------- Requests for root: /chats -------------------- //

router
  .route("/")
  //get request to /chats
  .get((req, res) => {
    res.send("GET /chats was successful");
    // render EJS template for chats
    res.render('chats');
  })
  //post request to /chats, user creates chat
  .post((req, res) => {
    res.send("POST to /chats was successful. User adds a chat. \n");
  });

router
  .route('/:chatId')
  .get((req, res) => {
    res.send('GET request to /:chatId was successful');
  // post request to /chats/:chat_id, admin/user sends a message
  }).post((req, res) => {
    res.send("POST to /:chatId: admin/user sends a message. \n");
  });

// NOTE: DO NOT export router as an object { router } -> this causes an error
module.exports = router;
