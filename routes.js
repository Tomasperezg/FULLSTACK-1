const express = require("express");
let shopRoutes = express.Router();
let items = require("./items.json");

shopRoutes.get("/items", (req, res) => {//<--./items will be feeding method in itemService.js, in the method we feed same method we use here
  console.log("the get request is working");
  res.send(items);
});

shopRoutes.post("/items", (req, res) => {
  res.send("later, this will add anew item to the list");
});

shopRoutes.put("/items/_ID_", (req, res) => {
  console.log("later, this will replace an item in the list");
  res.send(items);
});

shopRoutes.delete("/item", (req, res) => {
  res.send("hey, i am a delete request, try delete me, if you can!");
});


module.exports = shopRoutes;
