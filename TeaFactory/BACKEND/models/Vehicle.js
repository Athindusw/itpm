const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    Vehicle_no : {
        type : String,
        required : true
    },

    Vehicle_Type : {
        type : String,
        required : true
    },

    Drivername : {
        type : String,
        required : true
    },

    Vehicle_Service_Date : {
        type : String,
        required : true
    },

    Total_Fuel_Economy : {
        type : Number,
        required : true 
    },

   

})



module.exports = mongoose.model("Vehicle",vehicleSchema);

//const Vehicle = mongoose.model("Vehicle",vehicleSchema);

//module.exports = Vehicle;