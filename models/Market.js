const mongoose = require('mongoose');

const marketSchema = mongoose.Schema({
    market_name:{
        type:String,
        require:true,
        unique:true
    },

    parent_market:{
        type:mongoose.Schema.Types.ObjectId
        
    },

    isRootmarket:{
        type:Boolean,
        require:true,

    },

    submarkets:{
        type:Array,
        default:[]
    },



    desc:{
        type:String,
        
    },
    



    help_lines:{
        type:Array,
        default:[]

    },
    avilable_producs:{
        type:Array,
        default:[],  //this wiil be an array_of product Id's



    },

    viewers:{
        type:Array,
        default:0,
    },

    //settings

    inventories:{
        type:Array,
        default:[],
    }

    
    /* to add
    user settings { check daily , reset values , automatic response }
    */



})



Market = mongoose.model('Market',marketSchema);
module.exports = Market;