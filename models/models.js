const db = require('../db/index.js');

exports.fetchRestaurants = () => {
    return db.query('SELECT * FROM restaurants')
    .then(({rows}) => {
        return rows;
    });
};