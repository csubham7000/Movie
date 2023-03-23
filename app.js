const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("Public"));

app.get("/", function(req, res){
  res.render("index");
})
app.get("/wednesday", function(req, res){
    res.render("wednesday");
})
app.get("/bhediya", function(req, res){
  res.render("bhediya");
})
app.get("/shazam", function(req, res){
  res.render("shazam")
})
app.get("/pathaan", function(req, res){
  res.render("pathaan");
})
app.get("/tu-jhoothi-main-makkar", function(req, res){
  res.render("tu-jhoothi-main-makkar")
})
app.get("/farzi", function(req, res){
  res.render("farzi")
})
app.get("/taaza-khabar", function(req, res){
  res.render("taaza-khabar");
})
app.listen(3000, function() {
  console.log("Server started on port 3000");
});