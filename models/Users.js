import { Schema, model } from 'mongoose';

// Create Schema
const UserSchema = new Schema({
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
    },
    upw:{
        type:String, 
        required:true
    }
   
});

const User = model('user', UserSchema);

export default User;