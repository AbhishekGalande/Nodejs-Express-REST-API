const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Order = require('../model/order')
const orderController = require('../controller/order-model')

// function connect() {
//     const connectionString = "mongodb+srv://fbsroot:fbs%40123@cluster0.wvb02ep.mongodb.net/test"
//     mongoose.connect(connectionString)
//         .then(() => {
//             console.log("Connection established successfuly...")
//         })
//         .catch(() => {
//             console.log("Error Connecting...")
//         })
// }


router.get('/',orderController.getorders
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is GET request for order"
//     })
// }
)

router.post('/',orderController.createOrder
// (req,res,next)=>{
    // const order ={
    //     "name":req.body.name,
    //     "type":req.body.type
    // }
    // res.status(200).json({
    //     msg:"This is POST request for order",
    //     Create:"order created successfully",
    //     order:order
    // })

    //build a const by using Product model
//     const order = new Order({
//         _id: new mongoose.Types.ObjectId,
//         name: req.body.name,
//         type: req.body.type
//     })

    //connect to the database
    // connect()
    //save the const (order) to the database
//     order.save().then((res) => {
//         console.log(res)
//         res.status(200).json({
//             Create: "order created successfully",
//             order: order
//         })
//     }).catch((err) => {
//         console.log(err)
//     })

// }
)


router.get('/:orderId',orderController.getOrderById
// (req,res,next)=>{

//     const id = req.params.orderId
//     if(id=='7'){
//         res.status(200).json({
//             msg:"You have special cashback for having special id"
//         })
//     }else{
//     res.status(200).json({
//         msg:"You have regular cashback for having regular id"
//     })
// }
    
// })
// router.post('/:orderId',(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is GET request for a single product"
//     })

// }
)

router.put('/:orderId',orderController.updateOrder
// (req,res,next)=>{
//     const id = req.params.orderId

//     res.status(200).json({
//         msg:"This is PUT request for a single product",
//         id:id
//     })

// }
)


router.delete('/:orderId',orderController.deleteOrder
// (req,res,next)=>{
//     const id = req.params.orderId

//     res.status(200).json({
//         msg:"This is DELETE request for a single product",
//         id:id
//     })

// }
)

module.exports = router