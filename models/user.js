mongoose = require('mongoose')

const UserSchema = new  mongoose.Schema({

    username:{
        type:String,
        require:true,
        max:30,
        min:5,
        unique:true

    },

    email:{
        type:String,
        require:true,
        lowercase:true,
        unique:true,
        max:50,
        min:5
    },

    password:{
        type:String,
        require:true,
        max:20,
        min:5


    }

    ,

    isAdmin:{
        type:Boolean,
        default:false
    },

    

    age:{
        type:Number,
        require:true,


    },

    gender:{
        type:String,
        require:true,
    },

    country:{
        type:String,
        require:true
    },

    address:{
        type:String,
        require:true,
        min:6,
        max:30


    },

    

    Recommended:{
        type:Array,
        default:[]
    },

    Markets:{
        type:Array,
        default:[]

    },

    IsMarketUser:{
        type:Boolean,
        default:false,
        
    }
    
    


}


);

User = mongoose.model('user',UserSchema);
module.exports = User;