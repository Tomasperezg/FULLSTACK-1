const express = require("express");
const app = express();
const routes = require("./routes.js");


app.use(express.static(__dirname + "/public"));//<--this is calling public folder(regular html,css,js)
app.use("/", routes);//<--hosting a server with API functionality 


let port = 5000
const server = app.listen(port, function() {
  console.log(`this server is running at ${port}`);
});
