const mongoose = require('mongoose');

const singleFile = mongoose.Schema({
    fileName: {
        type: String,
        require: true,
    },
    filePath: {
        type: String,
        require: true,
    },
    fileType: {
        type: String,
        require: true,
    },
    fileSize: {
        type: String,
        require: true,
    }
}, {
    timestamp: true,
})

module.exports = mongoose.model('SingleFile', singleFile) 



