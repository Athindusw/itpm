const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    userid:{
        type:String,
        required:true
    },

    uname:{
        type:String,
        required:true
    },

    uemail:{
        type:String, 
        required:true
    },
    uphone:{
        type:String, 
        required:true
    },
    unic:{
        type:String, 
        required:true
    }

});

module.exports = mongoose.model('Posts',postSchema); 