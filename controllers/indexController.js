/**
 * Created by sonja on 10/15/17.
 */

exports.index = function(req, res) {
    res.render('form', { title: 'ChickenClickerTriggerPicker ', name: 'Chickens'});
};

exports.upload_file_post = function(req, res) {
    res.send('file upload');
};

exports.set_timestamps_post = function(req, res) {
    res.send('apply timestamps');
};
