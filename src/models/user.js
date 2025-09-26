const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    FirstName:{
        type: String,
        required: true,
        minlength:4,
        maxlength:8
        
    },
    LastName:{
        type:String
    },
    Email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
    },
    Age:{
        type:Number
    },
    Gender:{
        type:String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender is not valid")
            }
        },

    },
    Password:{
        type:String,

    },
    photo:{
        type:String,
        default:"This is default photo"
    },
    skills:{
        type:[String],
    }
})

const UserModel=mongoose.model("Users",UserSchema);


module.exports = UserModel;