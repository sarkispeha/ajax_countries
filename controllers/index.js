var countries_model = require('../models/countries-model.json');


var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	countries: function(req, res){
		res.send('test');
		console.log(countries_model);
	}
};

module.exports = indexController;