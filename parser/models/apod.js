'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * APOD集合
 */
var ApodSchema = new Schema({
    date: {type: String},            // 时间
    explanation: {type: String},     // 解释
    hdurl: {type: String},           // 高清图片url
    media_type: {type: String},      // 媒体类型
    service_version: {type: String}, // 服务版本
    title: {type: String},           // 标题
    url: {type: String}              // 图片url
}, {autoIndex: false});

mongoose.model('Apod', ApodSchema);
