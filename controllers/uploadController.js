/**
 * Created by sonja on 10/15/17.
 */

exports.upload = function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    var file = req.files.file;

    file.mv(__dirname + '/../uploads/' + file.name, function(err) {
        if (err)
            return res.status(500).send(err);
        res.render('upload', {title: 'ChickenClickerTriggerPicker ', name: 'Chickens', message: 'Successful upload!'});
    });
};