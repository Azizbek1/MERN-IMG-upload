const mongoose = require('mongoose');

const multipleFile = mongoose.Schema({
   title: {
       type: String,
       required: true
   },
   files: [Object]
}, {
    timestamp: true,
})

module.exports = mongoose.model('MultileFile', multipleFile) 



