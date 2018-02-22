var express = require('express');
var dessert = require('../models/dessert.js');

var router = express.Router();


router.route('/api/desserts')
	// GET all desserts in JSON
	.get((req, res) => {
		dessert.all((data) => {
			res.status(200).json(data);
		});
	})
	// POST dessert to DB
	.post((req, res) => {
		dessert.create({dessert_name: req.body.dessert_name}, (result) => {
			res.json({ id: result.insertId });
		});
	});

// Edit/Update Existing Dessert
router.route('/api/desserts/:id')
	.put((req, res) => {
		var condition = "id = " + req.params.id;
		console.log("Condition: ", condition);

		dessert.update({devoured: req.body.devoured}, condition, (result) => {
			if (result.changedRows === 0) {
				return res.status(404).end();
			}
			res.status(200).end();
		});
	})
	.delete((req, res) => {
		var condition = "id = " + req.params.id;
		
		console.log("Condition: ", condition);
		dessert.delete(condition, (result) => {
			res.status(200).end();
		});
	});

module.exports = router;