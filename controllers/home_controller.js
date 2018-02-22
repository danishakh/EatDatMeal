var express = require('express');
var appetizer = require('../models/appetizer.js');
var entree = require('../models/entree.js');
var dessert = require('../models/dessert.js');

var router = express.Router();


router.route('/')
	.get((req, res) => {
		var handlebarsObj = {};

		appetizer.all((data) => {
			handlebarsObj.appetizers = data;
			//console.log(handlebarsObj);
		});
		entree.all((data) => {
			handlebarsObj.entrees = data;
			//console.log(handlebarsObj);
		});
		dessert.all((data) => {
			handlebarsObj.desserts = data;
			console.log(handlebarsObj);
			res.render('index', handlebarsObj);
		});

	});


module.exports = router;