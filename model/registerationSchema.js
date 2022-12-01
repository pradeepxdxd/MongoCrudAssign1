const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    pass : {
        type : String,
        required : true
    },
    created_at:{ 
        type:Date, default: Date.now
    }
})

module.exports = mongoose.model('registerPage', schema);