const express = require("express");
let shopRoutes = express.Router();
let items = require("./items.json");

shopRoutes.get("/items", (req, res) => {
  // const id = req.params.id;
  console.log("the get request is working");
  res.send(items);
});

shopRoutes.post("/item", (req, res) => {
  res.send("later, this will add anew item to the list");
});

shopRoutes.put("/item", (req, res) => {
  res.send("hey, i got a put request, i am working");
});

shopRoutes.delete("/item", (req, res) => {
  res.send("hey, i am a delete request, try delete me, if you can!");
});


module.exports = shopRoutes;
