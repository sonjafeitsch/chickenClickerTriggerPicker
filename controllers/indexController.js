/**
 * Created by sonja on 10/15/17.
 */

var User = require('../models/user');
var async = require('async');

exports.index = function(req, res) {
    res.render('index', { title: 'SecretSanta ', mainTitle: 'SecretSanta '});
};