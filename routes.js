const express = require("express");
let shopRoutes = express.Router();
let items = require("./items.json");
let pool = require("./pool.js");
console.log(pool);


shopRoutes.get("/items", (req, res) => {//<--./items will be feeding method in itemService.js, in the method we feed same method we use here
  pool.query("SELECT * FROM shopingcart").then((result) => {
    res.send (result);
  // }).catch((err) => {
  //   console.log(err);
  //   res.status(500);
  //   res.send("ERROR");
  });
  console.log("the get request is working");

});



shopRoutes.post("/api/items", (req, res) => {
  let items = req.query;
  console.log(items);
  console.log(req);
  let sql = "INSERT INTO items(id, product, price, quantity)" +
    "VALUES ($1::integer, $2::text, $3::money, $4::integer)";
  let values = [items.id, items.product, items.price, items.quantity];

  pool.query(sql, values).then((result) => {
    res.status(201);
    res.send("INSERTED");
  });
  console.log("i am a post request, i am working");
});

shopRoutes.put("/items/_ID_", (req, res) => {
  console.log("later, this will replace an item in the list");
  res.send(items);
});

shopRoutes.delete("/items", (req, res) => {
  res.send("hey, i am a delete request, try delete me, if you can!");
});


module.exports = shopRoutes;
