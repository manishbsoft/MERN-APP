const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
  .connect(
    'mongodb+srv://manish:d6mnHQ5TDuJp5z1q@cluster0-eiy2b.mongodb.net/products_test?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection Faliled!');
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
