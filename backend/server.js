const express = require('express')

const mongoose = require('mongoose')

const dotenv = require('dotenv')

const productRoutes = require('./routes/product.route')

const cors =  require('cors')

const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true, origin: '*'}))

app.use('/crud', productRoutes)

mongoose.connect(process.env.DATABASE_URL).then(() => {

    console.log('database connected successfully !!!')

}).catch(() => {

    console.log('this database not found //')
})


app.listen(3000, () => console.log('server running on port 3000'))