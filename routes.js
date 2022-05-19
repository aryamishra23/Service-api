'use strict';

const  controller =require('./controller');

module.exports = function(app) {
	app.route('/about').get(controller.about);
	app.route('/distance/:pincode1/:pincode2').get(controller.getDistance);
	app.get('/', (req, res)=>{
		res.send("Hello  , This is API HOME")
	})
	
};

