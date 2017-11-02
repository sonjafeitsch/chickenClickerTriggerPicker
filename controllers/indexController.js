/**
 * Created by sonja on 10/15/17.
 */

exports.index = function(req, res) {
    res.render('index', { title: 'ChickenClickerTriggerPicker ', name: 'Chickens'});
};

exports.upload_file_post = function(req, res) {
    res.send('file upload');
};
