const express = require("express");
const router = express.Router();

// ---------------- Requests for root: /chats -------------------- //

router
  .route("/")
  //get request to /chats
  .get((req, res) => {
    res.send("GET /chats was successful");
    // render EJS template for chats
    // res.render("chats");
  })
  //post request to /chats, user creates chat
  .post((req, res) => {
    res.send("POST to /chats was successful. User adds a chat. \n");
  });

// post request to /chats/:chat_id, admin/user sends a message
router.route("/:chat_id").post((req, res) => {
  res.send("admin/user sends a message. \n");
});

// NOTE: DO NOT export router as an object { router } -> this causes an error
module.exports = router;
