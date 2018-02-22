var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3030;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

// Use Handlebars as the default view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var homeRoute = require("./controllers/home_controller.js");
var appetizerRoutes = require("./controllers/appetizers_controller.js");
var entreeRoutes = require("./controllers/entrees_controller.js");
var dessertRoutes = require("./controllers/desserts_controller.js");

app.use(homeRoute);
app.use(appetizerRoutes);
app.use(entreeRoutes);
app.use(dessertRoutes);

app.listen(PORT, () => {
	console.log("App now listening at localhost:" + PORT);
});