'use strict';

var expressValidator = require('express-validator'),
    utils = require(appRoot + '/lib/utils');

//自定义参数验证方法集
var customValidators = {};

customValidators.isObjectId = function (value) {
    return new RegExp('^[0-9a-fA-F]{24}$').test(value);
};

//数字区间：例如 [1,6]
customValidators.isNumInterval = function(param, min, max) {
    return param >= min && param <= max;
};

//匹配订单号(20开头的19位数字)
customValidators.isOrderId = function(value) {
    return /^20\d{17}$/.test(value);
};

//匹配正数
customValidators.isPositive = function (value) {
    return (/^(?:[1-9][0-9]*)$/).test(value);
};

//匹配手机号码
customValidators.isTelPhone = function (value) {
    return (/^((1[1-9]{1}[0-9]{1})+\d{8})$/).test(value);
};

//检查长度是否在区间内
customValidators.isLengthInterval = function (value, min, max) {
    return value.length >= min && value.length <= max;
};

//自定义参数校验方法集
module.exports = function(){
    return expressValidator({
        customValidators: customValidators
    });
};

module.exports.validator = utils.extend(expressValidator.validator, customValidators);
