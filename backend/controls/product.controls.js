const express = require('express')
const productModel = require('../models/product.model')


// get all products .......
const getAllProducts = async (req, res) => {

    try{

        const products = await productModel.find()

        res.status(201).json(products)

    }catch(err){

        res.status(404).json({message: err.message})
    }

}

// get one product .........
const getProduct = async (req, res) => {

    try{

        const {id} = req.params

        const product = await productModel.findById(id)

        if(!product){

            res.status(404).json('oops this product not found !')
        }

        res.status(201).json(product)

    }catch(err){

        res.status(404).json({message: err.message})
    }
}

// add products ...... 
const pushProduct = async (req, res) => {

    try{

        const product = await productModel.create(req.body)

        res.status(201).json(product)

    }catch(err){

        res.status(404).json({message: err.message})
    }
}


// update product ............
const editProduct = async (req, res) => {

    try{

        const {id} = req.params

        const product = await productModel.findByIdAndUpdate(id, req.body)

        if(!product){

            res.status(404).json('oops this product not found')

        }

        const updatedProduct = await productModel.findById(id)

        res.status(201).json(updatedProduct)

    }catch(err){

        res.status(404).json({message: err.message})
    }
}


// delete product 


const removeProduct = async (req, res) => {


    try{

        const {id} = req.params

        const product = await productModel.findByIdAndDelete(id)

        if(!product){

            res.status(404).json('oops this product not found !!')

        }

        res.status(201).json('product remove successfuly... ')

    }catch(err){

        res.status(404).json({message: err.message})
    }
}


module.exports = {pushProduct, getAllProducts, getProduct, editProduct, removeProduct}