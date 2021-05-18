const mongoose = require('mongoose');

const cqSchema = new  mongoose.Schema({
    firstName : {
        type:  String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type: Number,
    },
    comments:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

})

module.exports = mongoose.model('cq',cqSchema);