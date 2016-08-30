'use strict';

var express = require('express');
var kraken = require('kraken-js');

global.appRoot = process.cwd();

var app = module.exports = express();
var	options = require('./lib/spec')(app);
app.use(kraken(options));

app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.kraken.get('env:env'));
});
