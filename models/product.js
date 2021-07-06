const mongoose = reuire('mongoose');

ProductSchema = mongoose.Schema({


    item_name: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },

    EAN:{
        type:Number,
        required:true,
        trim:true
    },

    Keywords:{
        type:Array,
        deafult:[]
    },

    description: {
        type: String,
        required: false,
        trim: true
    },
    category: {
        type: String,
        required: true
    },

    brand:{
        type:String,
        required: true
        

    },
    series:{
        type:String,
        required:true
    },


    

     
})



product = mongoose.Model('product', ProductSchema);

module.export = product 