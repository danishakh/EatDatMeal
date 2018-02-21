var orm = require('../config/orm.js');

var appetizer = {
	all: (cb) => {
		orm.selectAll("appetizers", (res) => {
			cb(res);
		});
	},
	// The variables cols and vals could be arrays, but we set devoured=false by DEFAULT so we just need to pass
	// the appetizer_name
	create: (object, cb) => {
		orm.insertOne("appetizers", object, (res) => {
			cb(res);
		});
	},
	update: (objColVals, condition, cb) => {	//objColVals is an object
		orm.updateOne("appetizers", objColVals, condition, (res) => {
			cb(res);
		});
	},
	delete: (condition, cb) => {
		orm.deleteOne("appetizers", condition, (res) => {
			cb(res);
		});
	}
};

// Export the database functions for the controller
module.exports = appetizer;
