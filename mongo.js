const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://manish:d6mnHQ5TDuJp5z1q@cluster0-eiy2b.mongodb.net/products_test?retryWrites=true&w=majority';

//   const MongoClient = require('mongodb').MongoClient;
//   const uri = "mongodb+srv://manish:<password>@cluster0-eiy2b.mongodb.net/test?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, { useNewUrlParser: true });
//   client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//   });


const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({ message: 'Could not store data.' });
  }
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
