var Actions = require('./actions/actions');
var moment = require('moment');

//起始时间 1995-09-22
var start = 811728000000;
var end = 820368000000;

//Actions.getApod('2016-04-01', function(err, data){
//    console.log(data);
//});


var startDate = moment(start).format('YYYY-MM-DD');
var endDate = moment(end).format('YYYY-MM-DD');
console.log(startDate);
console.log(endDate);