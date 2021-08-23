// this file contains the functions that will help query the database
// for the requests sent to /products

const { response } = require("express");

// export an anonymous function that takes db as a parameter
// all product related queries will go here
module.exports = db => {

  // return an object which will contain these helper functions as methods
  return {

    getProducts() {

      // query the database
     return db.query(`SELECT * FROM products;`)
      .then(result => {
        console.log('result.rows', result.rows);
        return result.rows;
      })
      .catch(error => error.message);

      // filter by price, favs or without filters in the same func
    },

    // admin only
    postNewProduct() {

    }

  }

};

