var express = require('express');
var app = express();

// set port for "heroku local" testing, bc the "var port = process.env.PORT || 8080" port doesn't work locally

// app.set('port', 5125);

// set port for heroku

var port = process.env.PORT || 8080
app.set('port', port);

// set express to use all the front end files (html, css) in the public folder

app.use(express.static(__dirname + "/public"));

// render homepage when website is visited

app.get("/", function(req, res) {
  res.render("index");
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

