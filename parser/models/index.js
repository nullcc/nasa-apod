var mongoose = require('mongoose');

require('./apod');

exports.Apod = mongoose.model('Apod');
