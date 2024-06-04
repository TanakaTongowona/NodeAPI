const express = require('express');
const Product = require('../models/productModel')
const {getProducts , getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')


const router = express.Router();

//get products
router.get('/', getProducts);
router.get('/:id' , getProduct);

//post data to the database
router.post('/', createProduct);

//update a product
router.put('/:id' ,updateProduct );

//delete a product
router.delete('/:id', deleteProduct);

module.exports = router;