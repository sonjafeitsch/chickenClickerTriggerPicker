/**
 * Created by sonja on 10/15/17.
 */

exports.upload = function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var file = req.files.file;

    // Use the mv() method to place the file somewhere on your server
    file.mv(__dirname + '/../uploads/' + file.name, function(err) {
        if (err)
            return res.status(500).send(err);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(req.files));
    });
};

