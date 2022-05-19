var request = require('request');
const apiKey ="DemoOnly00KjSeAgPqBMuYp6wANKKFdJLUggBRUOux8zr8GizQGFA9daPc4CwS30";
const zipcodeURL = 'https://www.zipcodeapi.com/rest/';

// THIS IS DISTANCE FUNCTION FROM API

var distance = {
	find: function(req,res, next) {
		request(zipcodeURL + apiKey + "/distance.json/" + req.params.pincode1 + "/" + req.params.pincode2 + "/mile",
		function(error, response, body) {
			if(!error && response.statusCode == 200) {
				response = JSON.parse(body);
				res.send(response);
			} else {
				console.log(response.statusCode + response.body);
				res.send({distance: -1});
			}
		});
	}
};

module.exports = distance;

				
				
		