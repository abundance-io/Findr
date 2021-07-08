const router = require('express').Router();
const Market = require('../models/Market');
const User = require('../models/user');
const Validator = require('../validator');
const Product = require('../models/product');

router.post('/create', async (req,res) => {
    try{
        const  error = await  Validator.MarketRegisterValidation(req.body).error;
        //console.log(error);
        if (error) return res.status(400).send(error.details[0].message)
        user = await User.findOne({_id:req.body.user_id})
        
        
        market = await new Market({
            market_name:req.body.market_name,
            isRootmarket:req.body.isRootmarket,
            desc:req.body.desc
        }
        )
        user.IsMarketUser = true;
        user.Markets.push(market._id);
        market = await market.save();
        await user.save();
        res.status(200).json(user);


    }catch(err){
        res.status(500).send('internal server error')
        throw err
}

})


router.post('/addProducts',async (req,res) =>{
    try{
        addCount = 0;
        const product_list = req.body.products;
        //console.log(product_list);
        product_list.forEach(  element => {
            const error =  Validator.ProductCreateSchema(element).error;
             if (error) return res.send(error.details[0].message).status(400);
             product =  new Product({
                 item_name:element.item_name,
                 EAN:element.EAN,
                 description:element.description,
                 Keywords:element.Keywords,
                 category:element.category,
                 brand:element.brand,
                 series:element.series,

             })
             product.save();
             addCount++
            
        });
        res.send('added'+addCount+"products").status(200);
    }catch(err){
        res.status(500);
        throw err
    }
    



}


)


module.exports = router;