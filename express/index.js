const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const Product  = require('./model/product');

main().catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(cors())

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
  console.log(1)
}

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.send(products)
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send(product)
})

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.send(newProduct)
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})
