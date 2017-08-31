const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const mysql = require('mysql');
const prod = require('./server/routes/productsRoutes.js')(app);
const grow = require('./server/routes/growerRoutes.js')(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'));

// API location
app.use('/api', require('./server/routes/productsRoutes'));

// Requiring our models for syncing
const db = require('./models');

// Send all other requests to Angular app
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Set port
const PORT = process.env.PORT || '8080';
app.set('port', PORT);

const server = http.createServer(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});