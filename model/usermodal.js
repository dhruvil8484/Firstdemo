var mongoose = require("mongoose");

var userschema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String 
    },
    hobby:{
        type:String 
    },
    password:{
        type:String 
    },
    numbar:{
         type:String   
            
    }

});
module.exports = mongoose.model("user",userschema)