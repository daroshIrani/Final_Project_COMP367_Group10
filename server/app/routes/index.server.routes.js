// Load the 'index' controller
const index = require('../controllers/index.server.controller');

// Load the required modules
const express = require('express');
const router = express.Router();

// Define the routes module' method
module.exports = function (app) {
    //app.use(express.json());

    // GET route for rendering the index page
    app.get('/', function (req, res) {
        res.render('index', {
            info: "see the results in console window"
        });
    });

    // GET route for training and prediction (existing route)
    app.get('/run', index.trainAndPredict);

    // POST route for handling form submission and prediction
     app.post('/run', index.trainAndPredict); 
     
    // Return the router
    return router;
};