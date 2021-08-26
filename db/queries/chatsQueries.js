const {adminId} = require("../../constants");

module.exports = (db) => {
  return {
    getChats(userId) {
      let queryString = `SELECT * FROM messages
      JOIN chats ON chats.id=chat_id
      JOIN products ON products.id = chats.product_id`;
      const queryParams = [];

      if (userId !== adminId) {
        queryString += ` WHERE user_id = $1`;
        queryParams.push(userId);
      }

      queryString += ` ORDER BY datetime DESC`;

      return db
        .query(queryString, queryParams)
        .then((result) => result.rows)
        .catch((error) => error.message);
    },

    createChat(product, userId, content) {
      const queryString = `INSERT INTO chats (product_id, user_id)
      VALUES ($1, $2) RETURNING *`;

      const queryParams = [product.productId, userId];

      return db
        .query(queryString, queryParams)
        .then((result) => {
          const id = result.rows[0].id;
          const time = new Date();
          const queryString = `INSERT INTO messages (chat_id,  from_admin, datetime, content)
      VALUES ($1, $2, $3, $4) RETURNING *`;
          //replace 'aaa' with content once frontend is ready
          const queryParams = [id, 'FALSE', time, 'aaa'];

          return db.query(queryString, queryParams)
            .then((result) => result.rows)
            .catch((error) => error.message);
        });
    },

    viewChat(chat) {
      const queryString =
        `SELECT * FROM messages
         JOIN chats ON chats.id = messages.chat_id
         WHERE chats.id = $1`;

      const queryParams = [chat.chatId];

      return db
        .query(queryString, queryParams)
        .then((result) => {
          return result.rows;
        })
        .catch((error) => error.message);
    },

    sendMessage(chat) {
      const time = new Date();

      const queryString = `INSERT INTO messages (chat_id, from_admin, datetime, content)
      VALUES ($1, $2, $3, $4)
      RETURNING *`;
      //replace 'aaa' with content once frontend is ready
      const queryParams = [chat.chatId, chat.from_admin, time, 'aaa'];

      return db.query(queryString, queryParams)
        .then((result) => result.rows)
        .catch((error) => error.message);
    },
  };
};
