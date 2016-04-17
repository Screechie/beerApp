var express = require('express');
var app = express();
app.use(express.static('public'));


var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('5e492c7ac91e7d3f0de1b48ed9622370');

app.get('/beers', function (req, res) {
  	brewdb.search.beers({ q: "dogfish" }, function(error, data) {
  	res.json(data) //terminates search
  });
});

app.get('/breweries/:keyword', function (req, res) {
	var keywordName = req.params.keyword
	console.log(req.url);
	// URL encoding strings
  	brewdb.search.breweries({ q: keywordName }, function(error, data) {
  	res.json(data) //terminates search
  });
});

app.get('/search/:keyword', function (req, res) {
	var keywordName = req.params.keyword
	brewdb.search.beers({ q: keywordName, withBreweries: "Y" }, function(error, data) {
	res.json(data)
	});
});

var server = app.listen((process.env.PORT || 3000), function () {
});
