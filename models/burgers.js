
var orm = require("../config/orm.js");




var burger = {

	all: function(cb){
		orm.all("burgers", cb);
	}, 

	// create: function(cols, vals, cb){
	// 	orm.create("burgers", cols, vals, cb);
	// }

	update: function(objcal, cond, cb){

		orm.update("burgers", objcal, cond, cb);
	},

	create: function(objcal, vals, cb){
	
		orm.create("burgers", objcal, vals, cb);
	}

};

module.exports = burger;