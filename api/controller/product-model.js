const mongoose = require('mongoose')
const Product = require('../model/product')
const product = require('../model/product')

//get all products
exports.getProducts = async(req,res,next)=>{
    try{
        const products = await product.find() //get all documents from the database
        res.status(200).json({  //if it reaches this line means data successfully fetched
            msg: "All documents fetched successfully",
            product: products
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
exports.getProductById = async(req,res)=>{
    try{
        const Product = await product.findById(req.params.productId) //get single document from the database
        let msg ="";
        if(Product==null){
            msg = "No document found"
        }else{
            msg = "Single document fetched successfully"
        }
        res.status(200).json({  //if it reaches this line means data successfully fetched
            message: msg,
            data: Product
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


exports.createProduct = async(req,res,next)=>{
    try{
        //create a product object
        const product = new Product({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            price: req.body.price
        })

        const data = await product.save() //calling the save method and wait for it to return
        res.status(200).json({  //if it reaches this line mans save() was successful
            Create: "product created successfully",
            product: data
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


//update a product
exports.updateProduct = async(req,res,next)=>{
    try{
        const data = await product.findByIdAndUpdate(req.params.productId,req.body) 
        res.status(200).json({  
            Create: "product updated successfully",
            product: data
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


//delete a product
exports.deleteProduct = async(req,res,next)=>{
    try{
        const data = await product.findByIdAndDelete(req.params.productId) 
        res.status(200).json({  
            Create: "product deleted successfully",
            product: data
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