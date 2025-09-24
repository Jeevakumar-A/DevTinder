const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    FirstName:{
        type: String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    Age:{
        type:Number
    },
    Gender:{
        type:String

    },
    Password:{
        type:String
    }
})

const UserModel=mongoose.model("Users",UserSchema);


module.exports = UserModel;