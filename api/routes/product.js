const express = require('express')
const router = express.Router()
const app = require('../../app')

const mongoose = require('mongoose')
const Product = require('../model/product')
const productController = require('../controller/product-model')

router.get('/', productController.getProducts
// (req, res, next) => {
//     res.status(200).json({
//         msg: "This is GET request for product"
//     })
// }
)

router.post('/', productController.createProduct
// (req, res, next) => {

    // const product ={
    //     "name":req.body.name,
    //     "price":req.body.price
    // }
    // res.status(200).json({
    //     msg:"This is POST request for product",
    //     Create:"product created successfully",
    //     product:product
    // })

    //build a const by using Product model
    // const product = new Product({
    //     _id: new mongoose.Types.ObjectId,
    //     name: req.body.name,
    //     price: req.body.price
    // })

    // save the const (product) to the database
    // product.save().then((res) => {
    //     console.log(res)
    //     res.status(200).json({
    //         Create: "product created successfully",
    //         product: product
    //     })
    // }).catch((err) => {
    //     console.log(err)
    // })

    
// }
)


router.get('/:productId', productController.getProductById
// (req, res, next) => {

//     const id = req.params.productId
//     if (id == '7') {
//         res.status(200).json({
//             msg: "You have special cashback for having special id"
//         })
//     } else {
//         res.status(200).json({
//             msg: "You have regular cashback for having regular id"
//         })
//     }

// }
)

router.post('/:productId', (req, res, next) => {
    res.status(200).json({
        msg: "This is GET request for a single product"
    })

})

router.put('/:productId',productController.updateProduct 
// (req, res, next) => {
//     const id = req.params.productId

//     res.status(200).json({
//         msg: "This is PUT request for a single product",
//         id: id
//     })

// }
)

router.delete('/:productId', productController.deleteProduct
// (req, res, next) => {
//     const id = req.params.productId

//     res.status(200).json({
//         msg: "This is DELETE request for a single product",
//         id: id
//     })

// }
)

module.exports = router