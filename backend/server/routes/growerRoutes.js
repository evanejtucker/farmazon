var db = require("../../models");

module.exports = function(app) {

	//adding a new product from a grower
	app.post("/api/new/products", function(req, res) {
		db.Product.create({
			product_name: req.body.name,
			product_category: req.body.category,
			qty: req.body.qty,
			qty_type: req.body.qty_type,
			organic: req.body.organic,
			harvest_date: req.body.harvest_date,
			grower: req.body.grower,
			image: req.body.image
		}).then(function(result) {
			res.json(result);
		}).catch(function(err) {
			res.json(err);
		});
	});

	//removing a product from table when it has been sold out
	app.delete("/api/products/:id", function(req, res) {
		db.Products.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(results) {
			res.json(results);
		});
	});

	//updating quantity as product is sold
	app.put("/api/products/:id", function(req, res) {
		db.Products.update({
			qty: req.body.qty
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(results) {
			res.json(results);
		}).catch(function(err) {
			res.json(err);
		});
	});
};