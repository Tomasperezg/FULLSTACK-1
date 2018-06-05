const express = require("express");
let shopRoutes = express.Router();

shopRoutes.get("/item", (req, res) => {
  res.send("here i am! i am get request!");
});

shopRoutes.post("/item", (req, res) => {
  res.send("here i am! i am a post request!");
});

shopRoutes.put("/item", (req, res) => {
  res.send("hey, i got a put request, i am working");
});

shopRoutes.delete("/item", (req, res) => {
  res.send("hey, i am a delete request, try delete me, if you can!");
});


module.exports = shopRoutes;
