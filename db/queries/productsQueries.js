// this file contains the functions that will help query the database
// for the requests sent to /products

const { response } = require("express");

// export an anonymous function that takes db as a parameter
// all product related queries will go here
module.exports = db => {

  // return an object which will contain these helper functions as methods
  return {

    // USER/ADMIN: view all products, or filter by price/favorites
    getProducts(options) {

      // array to hold parameters that may be entered in the query
      const queryParams = [];

      // array to hold each query filter
      const filters = [];

      // start query with info that comes before the WHERE clause
      let queryString = `SELECT * FROM products
                         JOIN favorites ON product_id = products.id
                         JOIN users ON user_id = users.id`;


      // --------- the filter by favorites part is not functional yet -----------//
      // FILTER BY FAVS: return only favorites
      // when the user clicks on fav button
      if (true) {
      `WHERE user_id = ${options.userId}`
      }

      // -------------- filter by price -------------------- //

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

    // ADMIN: insert new product in /products
    postNewProduct(product) {

      const queryString = `INSERT INTO products (name, description, price, image_path)
      VALUES ($1, $2, $3, $4)
      RETURNING *`; // NOTE: not sure if RETURNING * is needed

      const queryParams = [product.name, product.description, product.price, product.image_path];

      return db
      .query(queryString, queryParams)
      .then(result => result.rows)
      .catch(error => error.message);
    },

    // USER/ADMIN: view a product modal
    viewProduct(product) {

      const queryString = `SELECT * FROM products
                           WHERE products.id = $1`;

      const queryParams = [product.productId];

      return db
      .query(queryString, queryParams)
      .then(result => result.rows)
      .catch(error => error.message);
    },

    // USER: add a product to favorites
    addToFavorites(product) {

      const queryString = `INSERT INTO favorites (product_id, user_id)
                           WHERE product_id = $1
                           AND user_id = $2`;

      const queryParams = [product.productId, /* userId */];

      return db
      .query(queryString, queryParams)
      .then(result => result.rows)
      .catch(error => error.message);

    },

    // ADMIN: delete a product
    deleteProduct(product) {
      const queryString = `DELETE FROM products
                           WHERE products.id = $1`;

      const queryParams = [product.productId];

      return db
      .query(queryString, queryParams)
      .then(result => result.rows)
      .catch(error => error.message);
    }




  }

};

// --------- NOTES -------- //
// not adding ids (serial primary key) in the inserts
// in addToFavorites, do we need 2 arguments to get both user id and product id,
// or do we need to do a JOIN in the query?
// options is an object that corresponds to req.params
