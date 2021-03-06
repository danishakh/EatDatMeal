var express = require('express');
var appetizer = require('../models/appetizer.js');

var router = express.Router();


router.route('/api/appetizers')
	// GET all appetizers in JSON
	.get((req, res) => {
		appetizer.all((data) => {
			res.status(200).json(data);
		});
	})
	// POST appetizer to DB
	.post((req, res) => {
		appetizer.create({appetizer_name: req.body.appetizer_name}, (result) => {
			res.json({ id: result.insertId });
		});
	});

// Edit/Update Existing Appetizer
router.route('/api/appetizers/:id')
	.put((req, res) => {
		var condition = "id = " + req.params.id;
		console.log("Condition: ", condition);

		appetizer.update({devoured: req.body.devoured}, condition, (result) => {
			if (result.changedRows === 0) {
				return res.status(404).end();
			}
			res.status(200).end();
		});
	})
	.delete((req, res) => {
		var condition = "id = " + req.params.id;
		
		console.log("Condition: ", condition);
		appetizer.delete(condition, (result) => {
			res.status(200).end();
		});
	});

module.exports = router;