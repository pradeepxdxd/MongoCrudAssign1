const mongoose = require('mongoose');

const proSchema = new mongoose.Schema({
    pname : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true,
    },
    quantity : {
        type : String,
        required : true
    },
    created_at:{ 
        type:Date, default: Date.now
    }
})

module.exports = mongoose.model('product', proSchema);