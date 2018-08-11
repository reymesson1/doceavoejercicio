var mongoose = require('mongoose');

module.exports = mongoose.model('post',{    
    description: String,
    debit: String,
    credit: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})