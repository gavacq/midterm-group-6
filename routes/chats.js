const express = require("express");
const router = express.Router();

// ---------------- Requests for root: /chats -------------------- //

module.exports = chatsQueries => {
  router
    .route("/")
    //get request to /chats
    .get((req, res) => {
      res.send("GET /chats was successful");
      // chatsQueries.getChats()
      // render EJS template for chats
      res.render('chats');
    })
    //post request to /chats, user creates chat
    .post((req, res) => {
      // chatsQueries.createChat()
      res.send("POST to /chats was successful. User adds a chat. \n");
    });

  router
    .route('/:chatId')
    .get((req, res) => {
      res.send('GET request to /:chatId was successful');
    // post request to /chats/:chat_id, admin/user sends a message
    // chatsQueries.viewChat() 
    }).post((req, res) => {
      //chatsQueries.sendMessage()
      res.send("POST to /:chatId: admin/user sends a message. \n");
    });

  return router;
};
