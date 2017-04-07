var mongoose = require('mongoose')
var homeSchema = new mongoose.Schema({
  address: String,
  sqft: Number,
  bedrooms: Number,
  baths: Number,
  price: Number
})

var home = mongoose.model('Homes', homeSchema)

module.exports = home
