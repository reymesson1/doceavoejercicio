var mongoose = require('mongoose');

module.exports = mongoose.model('post',{    
    position: String,
    date: String,
    description: String,
    debit: String,
    credit: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})