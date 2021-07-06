const mongoose = require('mongoose');


productSaleSchema = mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },

    product_price:{
        type:Number,
        require:true
        
    },

    product_discount:{
        type:Number, //this will be a small decimal number
        require:true
    },

    redeem_codes:{
        type:Array,
        default:[]
    },

    amount_available:{
        type:Number,
        default:0
    }

})


inventorySchema = mongoose.Schema({
    market_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:false
    },

    productsale: productSaleSchema

    


},
{
    timestamps:true
}



);

