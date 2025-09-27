const validator =require("validator")
const ValidateData =(req)=>{
    const {FirstName,LastName,Email,Password}=req.body;
    if(!FirstName || !LastName){
        throw new Error("Name is not valid")
    }
    else if(!validator.isEmail(Email)){
        throw new Error("Invalid Email Address")
    }
    else if(!validator.isStrongPassword(Password)){
        throw new Error("Invalid Password")
    }

}

module.exports ={ValidateData}

