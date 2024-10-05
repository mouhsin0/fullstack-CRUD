const route = require('express').Router()

const {pushProduct, getAllProducts, getProduct, editProduct, removeProduct} = require('../controls/product.controls')


route.get('/allProducts', getAllProducts)

route.get('/oneProduct/:id', getProduct)

route.post('/addProduct', pushProduct)

route.put('/updateProduct/:id', editProduct)

route.delete('/deleteProduct/:id', removeProduct)


module.exports = route