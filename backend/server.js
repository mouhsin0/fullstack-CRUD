const express = require('express')

const mongoose = require('mongoose')

const dotenv = require('dotenv')

const productRoutes = require('./routes/product.route')

const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Methods', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

app.use('/crud', productRoutes)

mongoose.connect(process.env.DATABASE_URL).then(() => {

    console.log('database connected successfully !!!')

}).catch(() => {

    console.log('this database not found //')
})


app.listen(3000, () => console.log('server running on port 3000'))