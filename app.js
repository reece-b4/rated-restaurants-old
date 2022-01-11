const express = require('express');
const {getMessage, getRestaurants} =require('./controllers/controllers.js');
const app = express();

app.get('/api', getMessage);
app.get('/api/restaurants', getRestaurants);

module.exports = app;