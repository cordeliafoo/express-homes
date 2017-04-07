var express = require('express')
var app = express()
var port = 4000
var mongoose = require('mongoose')
var dbURI = 'mongodb://localhost/test'
var ObjectID = require('mongodb').ObjectID;
var conn = mongoose.connection
var connect = mongoose.connect(dbURI)

var Home = require('./models/home')

app.set('view engine', 'ejs')

var ejsLayouts = require('express-ejs-layouts')
app.use(ejsLayouts)

//handle the post request
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', function (req, res) {
  Home.find({}, function (err, homes) {
    if (err) console.error(err)
    res.render('homepage', {allHomes: homes})
  })
})

app.post('/', function(req, res){
  //talk to db
  //insert data into db

  res.send(req.body)
  var formData = req.body

  var data = {
    address: formData.address,
    sqft: formData.SqFt,
    bedrooms: formData.Bedrooms,
    baths: formData.Baths,
    price: formData.Price
  }

  console.log(data);
  conn.collection('homes').insert(data)

})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  }
  console.log('express is running on port ' + port)
})
