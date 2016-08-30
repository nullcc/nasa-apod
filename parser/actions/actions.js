const request = require('superagent');
const api_key = require('../config/config').api_key;

var getApod = function(date, cb){
    var url = 'https://api.nasa.gov/planetary/apod';
    request
        .get(url)
        .query({api_key: api_key, date: date, hd: true})
        .end(function(err, res){
            if (err) {
                return cb(err);
            }
            var json = JSON.parse(res.text);
            console.log(json);
            return cb(null, json);
        });
};

module.exports = {
    getApod: getApod
};