var db = require("../../models");

module.exports = function(app) {

	// finds all products available for purchase
	app.get("/api/products", function(req, res) {
		db.Product.findAll({}).then(function(results) {
			res.json(results);
			console.log(results);
		});
	});

	// finds all products associated with grower profile
	app.get("/api/grower/:id", function(req, res) {
		db.Product.findAll({
			where: {
				grower_id: req.params.id
			}
		}).then(function(results) {
			res.json(results);
		}).catch(function(err){
			res.json(err);
		});
	});

	// finds all products within request category
	app.get("/api/products/category/:category", function(req, res) {
		db.Product.findAll({
			where: {
				prod_category: req.params.category
			}
		}).then(function(results) {
			res.json(results);
		}).catch(function(err){
			res.json(err);
		});
	});	
};