var express = require('express');
var entree = require('../models/entree.js');

var router = express.Router();

router.route('/api/entrees')
	// GET all entrees in JSON
	.get((req, res) => {
		entree.all((data) => {
			res.status(200).json(data);
		});
	})
	// POST entree to DB
	.post((req, res) => {
		entree.create({entree_name: req.body.entree_name}, (result) => {
			res.json({ id: result.insertId });
		});
	});

// Edit/Update existing entree
router.route('/api/entrees/:id')
	.put((req, res) => {
		var condition = "id = " + req.params.id;
		console.log("Condition: ", condition);

		entree.update({devoured: req.body.devoured}, condition, (result) => {
			if (result.changedRows === 0) {
				return res.status(404).end();
			}
			res.status(200).end();
		});
	})
	.delete((req, res) => {
		var condition = "id = " + req.params.id;
		
		console.log("Condition: ", condition);
		entree.delete(condition, (result) => {
			res.status(200).end();
		});
	});

module.exports = router;