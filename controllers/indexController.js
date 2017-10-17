/**
 * Created by sonja on 10/15/17.
 */

var User = require('../models/user');
var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        user_count: function(callback){
            User.count(callback);
        },
        user_name: function(callback){
            var query = User.find();
            query.select('username email');
            query.exec(callback);
        }
    }, function(err, results){
        res.render('index', { title: 'SecretSanta ', mainTitle: 'SecretSanta ', error: err, data: results});
    });

    // User.find()
    //     .exec(function(err, userlist){
    //         if(err) {return next(err);}
    //         res.render('index', { title: 'SecretSanta ', mainTitle: 'SecretSanta ', user_name: userlist})
    //     })
};