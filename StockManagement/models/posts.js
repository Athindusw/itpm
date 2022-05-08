const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

   stockId:{
       type:String,
       required:true
   },
   noOfstocks:{
       type:String,
       required:true
   },
   stockName:{
       type:String,
       required:true
   },
   storeNumber:{
    type:String,
    required:true
   },
   date:{
    type:String,
    required:true
 }

});

module.exports = mongoose.model('Posts',postSchema);