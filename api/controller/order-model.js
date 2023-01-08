const mongoose = require('mongoose')
const order = require('../model/order')

//get all products
exports.getorders = async(req,res)=>{
    try{
        const orders = await order.find() //get all documents from the database
        res.status(200).json({  //if it reaches this line means data successfully fetched
            msg: "All documents fetched successfully",
            product: orders
        })

    }
    catch(err){
        res.status(501).json({
            code:0,
            msg: "Something went wrong",
            err:err
        })
    }
}

//get single product
exports.getOrderById = async(req,res)=>{
    try{
        const Order = await order.findById(req.params.orderId) //get single document from the database
        let msg ="";
        if(Order==null){
            msg = "No document found"
        }else{
            msg = "Single document fetched successfully"
        }
        res.status(200).json({  //if it reaches this line means data successfully fetched
            message: msg,
            data: Order
        })

    }
    catch(err){
        res.status(501).json({
            code:0,
            msg: "Something went wrong",
            err:err
        })
    }
}


exports.createOrder = async(req,res)=>{
    try{
        //create a product object
        const Order = new order({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            type: req.body.type,
            price:req.body.price
        })

        const data = await Order.save() //calling the save method and wait for it to return
        res.status(200).json({  //if it reaches this line mans save() was successful
            Create: "order created successfully",
            order: data
        })
    }
    catch(err){  //if it reaches this line means save() was failed
        res.status(501).json({
            code:0,
            Create: "Something went wrong",
            err:err
        })
    }
}


//update a product
exports.updateOrder = async(req,res)=>{
    try{
        const data = await order.findByIdAndUpdate(req.params.orderId,req.body) 
        res.status(200).json({  
            Msg: "order updated successfully",
            product: data
        })
    }
    catch(err){  //if it reaches this line mans save() was failed
        res.status(501).json({
            code:0,
            Msg: "Something went wrong",
            err:err
        })
    }
}


//delete a product
exports.deleteOrder = async(req,res)=>{
    try{
        const data = await order.findByIdAndDelete(req.params.orderId) 
        res.status(200).json({  
            Create: "order deleted successfully",
            Order: data
        })
    }
    catch(err){  //if it reaches this line mans save() was failed
        res.status(501).json({
            code:0,
            Create: "Something went wrong",
            err:err
        })
    }
}