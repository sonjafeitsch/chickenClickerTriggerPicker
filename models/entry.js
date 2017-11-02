/**
 * Created by sonja on 10/15/17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var entrySchema = new Schema({
    path: String,
    name: String,
    uploadDate: Date
});

var entryModel = mongoose.model('entryModel', entrySchema);

module.exports(entryModel);