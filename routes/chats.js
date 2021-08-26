const express = require("express");
const router = express.Router();

const {adminId} = require("../constants");

// ---------------- Requests for root: /chats -------------------- //

module.exports = (chatsQueries) => {
  router
    .route("/")
    //get request to /chats
    .get((req, res) => {
      // res.send("GET /chats was successful");
      chatsQueries
        .getChats()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => console.log(err));
      // render EJS template for chats
      // res.render("chats");
    })
    //post request to /chats, user creates chat
    .post((req, res) => {
      // check that user is NOT admin
      if (Number(req.session.userId) !== adminId) {
        const product = {productId: req.body.productId, };
        chatsQueries
          .createChat(product, Number(req.session.userId), req.body.content)
          .then((data) => {
            res.json(data);
            // res.send("POST to /chats was successful. User adds a chat. \n");
          })
          .catch((err) => console.log(err));
      }
    });

  router
    .route("/:chatId")
    // user or admin views a chat
    .get((req, res) => {
      const chat = { chatId: req.params.chatId };

      chatsQueries
        .viewChat(chat)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => console.log(err));
    })
    .post((req, res) => {
      // check that user is NOT admin
      
      const chat = {
        chatId: req.params.chatId,
        from_admin: Boolean(Number(req.session.userId) === adminId),
        content: req.body.content
      };

      chatsQueries.sendMessage(chat)
        .then(data => {
          console.log('data', data);
          res.json(data);
        })
        .catch(err => console.log(err));
      // res.send("POST to /:chatId: admin/user sends a message. \n");
    });

  return router;
};
