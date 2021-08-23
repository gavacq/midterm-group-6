require('dotenv').config();

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.getAllProducts()
      .then(
        rows=>{
          res.render('index', {rowarray: rows});
        })
    
      .catch(e => {
        console.error(e);
        res.send(e);
      });


  return router;
}


  //   console.log("SEARCH BODY", req.query);
  //   const sql = "SELECT * FROM items WHERE category_id = $1 AND name LIKE $2 AND price >= $3 AND price <= $4";
  //   const params = [req.query.categories, "%" + req.query.itemName + "%", ((req.query.minPrice) * 100), ((req.query.maxPrice) * 100)];
  //   db.query(sql, params)
  //     .then(data => {
  //       const templateVars = {
  //         items: data.rows,
  //         itemName: req.query.itemName
  //       };
  //       console.log("search results", templateVars.items);
        
  //       res.render("index", templateVars);
  //     });
  // });
  