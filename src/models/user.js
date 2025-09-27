const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName:{
        type: String
const validator =require("validator");
const UserSchema = new mongoose.Schema({
    FirstName:{
        type: String,
        required: true,
        minlength:4,
        maxlength:15
    },
    LastName:{
        type:String
    },
    Email:{

        type:String
=======
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email address"+value)
            }
        },

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
        type:String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender is not valid")
            }
        },

    },
    Password:{
        type:String,
        required:true,
                validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Invalid  Password"+value)
            }
        },

    },
    photo:{
        type:String,
        default:"This is default photo"
    },
    skills:{
        type:[String],

        },
    createdAt:{
        type:Date,
    }
},{
    timestamps:true>>>>>>> New_DB
})

const UserModel=mongoose.model("Users",UserSchema);


module.exports = UserModel;