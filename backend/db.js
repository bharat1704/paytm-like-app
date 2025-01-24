const mongoose = require("mongoose");

mongoose.connect("")
//we need to define schema here, email, password, name, profileid, location etc.
const userSchema = new mongoose.Schema({
username : {
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
    minLength:3,
    maxLength:30
    
}
 ,
password : {
type:String,
required:true,
minLength:6

},
firstname:{
    type:String,
    required:true,
    trim:true,
    maxLength:50
},
lastname: {
    type:String,
    required:true,
    trim:true,
    maxLength:50
}

})

//create a model 
const User = mongoose.model("User", userSchema);
//export the module

module.exports = User;
