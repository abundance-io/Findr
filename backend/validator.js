const Joi = require('@hapi/joi');

const ProductCreateSchema = (json_string) =>{
    const schema = Joi.object({
        item_name:Joi.string()
        .required(),

        EAN:Joi.string()
        .required(),

        Keywords:Joi.array(),

        description:Joi.string(),
        category:Joi.string(),
        brand:Joi.string(),


    })

    return schema.validate(json_string);

}


const LoginValidation = (json_string) => {
    const schema = Joi.object({
        
        username:Joi.string()
        .required(),

        password:Joi.string()
        .required(),

    })
    return schema.validate(json_string);
};


const MarketRegisterValidation = (json_string) =>{
    const schema = Joi.object({
        user_id:Joi.string()
            .required(),

        market_name:Joi.string()
            .min(3)
            .required(),
        isRootMarket:Joi.bool()
            .required(),
        
        help_lines:Joi.array()
        .min(1),

        desc:Joi.string()
        



    })
    return schema.validate(json_string);
};

const UserRegisterValidation = (json_string) => {

const schema = Joi.object({
    username:Joi.string()
        .min(5)
        .required(),

    email: Joi.string() 
        .min(5)
        .required()
        .email(),

    password: Joi.string()
        .min(6)
        .required(),

    isAdmin: Joi.bool(),

    gender: Joi.string().valid('male','female').required(),

    address: Joi.string()
        .min(6)
        .required(),

    country: Joi.string().min(3),

    age:Joi.number().max(120).min(7)
    
    



    

    

})
return schema.validate(json_string);
};

module.exports.ProductCreateSchema = ProductCreateSchema;
module.exports.UserRegisterValidation = UserRegisterValidation;
module.exports.LoginValidation = LoginValidation;
module.exports.MarketRegisterValidation = MarketRegisterValidation;



