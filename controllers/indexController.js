/**
 * Created by sonja on 10/15/17.
 */

exports.index = function(req, res) {
    res.render('form', { title: 'ChickenClickerTriggerPicker ', name: 'Chickens', pathToVideo: 'video/huehner.mp4'});
};