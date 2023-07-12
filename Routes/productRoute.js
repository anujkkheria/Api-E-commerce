const express = require('express')
const Products = require('../Controllers/Products')
const router = express.Router();

router
.route('/')
.get(Products.getProducts)


module.exports = router