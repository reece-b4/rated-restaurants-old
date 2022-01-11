const {fetchRestaurants} = require('../models/models');


exports.getMessage = (req, res) => {
    res.status(200).send({msg: 'all ok'});
}

exports.getRestaurants = (req, res) => {
   // console.log('hello from controller');
    fetchRestaurants()
    .then((restaurants) => {
        res.status(200).send({restaurants:restaurants})
    });
}