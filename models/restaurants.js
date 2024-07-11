const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    coupons:{
        type:Boolean,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    isVeg:{
        type:Boolean,
        required:true
    }
})

const categoriesSchema = new mongoose.Schema({
    categorie:{
        type:String,
        required:true,
    },
    foods:[foodSchema]
})


const restaurantsSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    openTime:{
        type:String,
        required:true
    },
    closeTime:{
        type:String,
        required:true
    },
    overView:{
        menus:[String],
        Cuisines:[String],
        aboutCost:{type:String}
    },
    categories:[categoriesSchema],

})



const restaurantsDatabase = mongoose.model('restaurantsDatabse', restaurantsSchema);
module.exports = restaurantsDatabase;