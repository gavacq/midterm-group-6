const { response } = require("express");

module.exports = db => {

  return {

    // array to hold parameters that may be entered in the query
    const queryParams = [];

    // array to hold each query filter
    const filters = [];

    // start query with info that comes before the WHERE clause
    let queryString = `SELECT * FROM products
    JOIN favorites ON product_id = products.id
    JOIN users ON user_id = users.id`;
}