const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: true,
    min:0
  },
  category: {
    type: String,
    enum: ['fruit', 'vegetable', 'dairy'],
    required : true
  }
})

const Product = mongoose.model('Product', productSchema)
// export default Product
module.exports = Product