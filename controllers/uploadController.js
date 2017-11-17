/**
 * Created by sonja on 10/15/17.
 */

exports.upload = function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    var file = req.files.file;
    var path = __dirname + '/../uploads/' + file.name;

    file.mv(path, function(err) {
        if (err)
            return res.status(500).send(err);
        res.render('form', {title: 'ChickenClickerTriggerPicker ', name: 'Chickens', pathToVideo: file.name, message: 'Successful upload'});
    });
};