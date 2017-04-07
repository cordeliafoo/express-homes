var express = require('express')
var app = express()
var port = 8000
var mongoose = require('mongoose')
var dbURI = 'mongodb://localhost/test'

mongoose.connect(dbURI)

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
  console.log(req.body);
  res.send(req.body)
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  }
  console.log('express is running on port ' + port)
})
