const express = require("express");
const app = express();
const routes = require("./routes.js");

app.use(express.static(__dirname + "/public"));
app.use("/", routes);

let port = 5000
const server = app.listen(port, function() {
  console.log(`this server is running at ${port}`);
});
