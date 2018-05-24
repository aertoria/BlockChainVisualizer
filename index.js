let vis = require('./vis_async.js');
var d3 = require("d3");
let ejs = require('ejs');
var fs = require('fs');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send("server is running");
});

app.get('/json/', function (req, res) {
  (async function(){
    let s= await vis.getJSONByBlock(3996006);
    res.json(s);
  })();
});

app.get('/json/:blockid', function (req, res) {
  (async function(){
    let s= await vis.getJSONByBlock(req.params.blockid);
    res.json(s);
  })();
});

app.get('/write/:blockid', function (req, res) {
  (async function(){
    let s= await vis.getJSONByBlock(req.params.blockid);
    fs.writeFile("temp.json", JSON.stringify(s), function(err) {
       if(err) {
         return console.log(err);
       }
       console.log("The file was saved!");
    });
    res.json(s);
  })();
});

app.get('/index', function (req, res) {
  (async function(){
    let s= await vis.getJSONByBlock(3996006);
    console.log(JSON.stringify(s));
    res.render('index',{jr : JSON.stringify(s)});
  })();
});

app.get('/directed', function (req, res) {
  (async function(){
    let s= await vis.getJSONByBlockDirected(5601207);
    console.log(JSON.stringify(s));
    res.render('indexDirected',{jr : JSON.stringify(s)});
  })();
});

app.get('/directed/:blockid', function (req, res) {
  (async function(){
    let s= await vis.getJSONByBlockDirected(req.params.blockid);
    console.log(JSON.stringify(s));
    res.render('indexDirected',{jr : JSON.stringify(s)});
  })();
});

app.get('/directedM/:blockidStart/:blockidEnd', function (req, res) {
  (async function(){
    let s= await vis.getJSONByBlockDirectedFromTo(req.params.blockidStart,req.params.blockidEnd);
    console.log(JSON.stringify(s));
    res.render('indexDirected',{jr : JSON.stringify(s)});
  })();
});

app.get('/index/:blockid', function (req, res) {
  (async function(){
    let s= await vis.getJSONByBlock(req.params.blockid);
    console.log('fetching block'+req.params.blockid);
    res.render('index',{jr : JSON.stringify(s)});
  })();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
