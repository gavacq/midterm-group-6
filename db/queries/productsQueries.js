// this file contains the functions that will help query the database
// for the requests sent to /products

const { response } = require("express");

// export an anonymous function that takes db as a parameter
// all product related queries will go here
module.exports = db => {

  // return an object which will contain these helper functions as methods
  return {

    getProducts(options) {

      // array to hold parameters that MAY be entered in the query
      const queryParams = [];

      // array to hold each query filter
      const filters = [];

      // start query with info that comes before the WHERE clause
      let queryString = `SELECT * FROM products
                         JOIN favorites ON product_id = products.id
                         JOIN users ON user_id = users.id`;

      // when the user clicks on fav button
      if (true) {
        // FILTER BY FAVS: return only favorites
      `WHERE user_id = ${options.userId}`
      }


      // FILTER BY PRICE: minimum price
      if (options.minimum_price) {
        queryParams.push(`${options.minimum_price}`);
        filters.push(`price >= $${queryParams.length}`);
      }

      // FILTER BY PRICE: maximum price
      if (options.maximum_price) {
        queryParams.push(`${options.maximum_price}`);
        filters.push(`price >= $${queryParams.length}`);
      }

        // concatenate filters
      if (filters.length > 0) {
        queryString += 'WHERE ' + filters.join(' AND ');
      }

      // complete queryString
      queryString += `ORDER BY price;`;

      return db
      .query(queryString, queryParams)
      .then(result => result.rows)
      .catch(error => error.message);

    },

    // admin only
    postNewProduct() {
      //insert in produces
    }

  }

};

