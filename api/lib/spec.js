'use strict';

var express = require('express'),
    db = require(appRoot + '/lib/database'),
    expressValidator = require(appRoot + '/lib/validator')();

module.exports = function spec(app) {
    app.on('middleware:after:session', function configPassport(eventargs) {

    });

    app.on('start', function () {
        global.MongoDatabase = app.kraken.get('databaseConfig:database');
    });

    app.on('middleware:before:session', function (eventargs) {
        app.use(expressValidator);
    });
    return {
        onconfig: function (config, next) {
            db.config(config.get('databaseConfig'));
            next(null, config);
        }
    };
};
