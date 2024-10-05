const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    
    {
        name: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        quantity: {
            type: Number,
            required: true
        },

        image: {
            type: String,
            required: false
        }
    },

    {
        timestamps: true
    }
)

const Products = mongoose.model('product', productSchema) // in databse product seitch to products 


module.exports = Products