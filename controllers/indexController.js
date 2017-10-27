/**
 * Created by sonja on 10/15/17.
 */

exports.index = function(req, res) {
    res.render('index', { title: 'VideoPlayer ', name: 'Chickens'});
};
