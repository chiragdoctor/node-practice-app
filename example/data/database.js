(function (database) {
	//mongo db connection.
	var mongodb require("mongodb");
	var mongoUrl = "mongodb://localhost:27017/practice";
	var theDb = null;

	database.getDb = function(next){
		if(!theDb){
			// connect to the database
			mongodb.MongoClinet.connect(mongoUrl, function (err, db) {
				if(err){
					next(err,null);
				} else {
					theDb = {
						db: db,
						notes : 
					};
					next(null, theDb);		
				}
			});
		} else {
			next(null, theDb);
		}
	}
})(module.exprots);