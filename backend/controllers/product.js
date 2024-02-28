const asyncHandler = require('express-async-handler');
const Product = require('../models/product');

 const createProduct = asyncHandler(async(req,res) => {
  const {name,description} = req.body;
  try {
    const product = await Product.create({
      name,
      description
    })
    if(product){
      res.status(201).json({
        product
      });
    }
    
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

const getProduct = asyncHandler(async (req, res) => {
  let { lang } = req.query;
  try {
    const product = await Product.find().select(`name.${lang} description.${lang} createdAt`);
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = {
  createProduct,
  getProduct
}