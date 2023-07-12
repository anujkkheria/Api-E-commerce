const mongo = require('mongoose')

const productSchema = mongo.Schema({
   product_name:{
        type:String,
        required:[true, "provide a product name"]
    },
    price:{
        type:Number,
        required:[true, "cant sell a product with out a price"]
    },
    description:{
        type:String,
        required:[true,"What exactly is this product"]
    },
    category:{
        type:String,
        required:[true,"What category is this product"]
    },
    brand:{
        type:String,
        required:[true,"What brand does this item belong to"]
    },
    Rating:{
        type:Number,
        default: 0.0
    },
})

const Product = mongo.model('Products',productSchema)

module.exports = Product