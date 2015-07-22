(function (data) {
	
	var seedData = require('./seedData');
	var database = require("./database");

	data.getNoteCategories = function (next) {
		
		next(null, seedData.initialNotes);
	};

	function seedDatabase() {
		database.getDb(function (err, db) {
			if(err){
				console.log("failed to seed database: " + err);
			}
		})
	}

})(module.exports);