const express = require('express')
require('dotenv').config()

const app = express()
const productsRouter = require('./api/routes/product')
const orderRouter = require('./api/routes/order')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//connect to mongo database (deployed on mongo cloud database)
// const connectionString = process.env.dbConnectionString
const username = process.env.dbUser
const password = process.env.dbpassword
const connectionString = "mongodb+srv://"+username+":"+password+"@cluster0.wvb02ep.mongodb.net/test"
mongoose.connect(connectionString)


// app.use((req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request"
//     })
// })

//setup the body parser middleware to handle encoded urls and json data
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))


app.use(morgan("dev")) //"dev" is one of the predefined format for morgan


app.use('/products',productsRouter)
app.use('/orders',orderRouter)


module.exports = app