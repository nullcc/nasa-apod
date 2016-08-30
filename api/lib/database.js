'use strict';

var mongoose = require('mongoose');
var db = function () {
    return {
        config: function (conf) {
            //var connectString = 'mongodb://';
            //connectString += conf.host + ':' + conf.port +  '/' + conf.database;

            var connectString = 'mongodb://';
            for (var i = 0; i < conf.instance.length; i++) {
                connectString += conf.instance[i].host + ':' + conf.instance[i].port;
                if (i < conf.instance.length - 1) {
                    connectString += ',';
                }
            }
            //参考:https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
            var option = {
                replset: {
                    rs_name: conf.replset,
                    readPreference: 'secondary'
                },
                server: {
                    poolSize: 2
                }
            };

            var dbUrl = connectString + '/' + conf.database;
            mongoose.connect(dbUrl, option, null);
            console.error(connectString);
            //mongoose.set('debug', true);
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open');
            });
        },
        close: function () {
            mongoose.connection.close();
        }
    };
};

module.exports = db();
