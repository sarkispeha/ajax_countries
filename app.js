var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
// var countries_model = require('./models/countries-model.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/countries', indexController.countries);

var server = app.listen(4752, function() {
	console.log('Express server listening on port ' + server.address().port);
});
