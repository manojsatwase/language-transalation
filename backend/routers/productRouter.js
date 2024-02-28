const express = require('express');
const {createProduct,getProduct} = require('../controllers/product');

const router = express.Router();

router.route('/').post(createProduct).get(getProduct);

module.exports = router;