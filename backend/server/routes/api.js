const express = require('express');
const router = express.Router();

//error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get all products
router.get('/products-routes', (req, res) => {
    connection((db) => {
        db.collection('products')
            .find()
            .toArray()
            .then((proudcts) => {
                response.data = products;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;