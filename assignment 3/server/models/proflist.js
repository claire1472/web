let mongoose = require('mongoose');

// create a model class
let profModel = mongoose.Schema({
        FullName:String,
        Program:String,
        Email:String,
    },
    {
        collection:"prof-list"
    });
module.exports = mongoose.model('prof',profModel);
