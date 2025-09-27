const mongoose =require('mongoose');
const ConnectDB= async()=>{
await mongoose.connect("mongodb+srv://JeevaNode:F3PFEIDjWIDJ7aGc@jeevanode.zywybm5.mongodb.net/DevTinder")
}
module.exports={ConnectDB};

//export default ConnectDB;