// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require('express-handlebars');
var logger = require("morgan");
// var bodyParser = require("body-parser");

// Initialize Express
var PORT = process.env.PORT || 3000;

var app = express();

// Require our routes
var routes = require("./routes/apiRoutes.js");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have every request go through our route middleware
app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrape_db";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });