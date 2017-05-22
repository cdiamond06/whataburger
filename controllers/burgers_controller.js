
var express = require("express");

// grabs all the routes associated with router
var router = express.Router();

var burger = require("../models/burgers.js")

router.get('/', function(req, res){
	burger.all(function(data){
		var notEatenO = { burg : data};
		console.log(notEatenO);
		res.render("index", notEatenO);
	}) // end of burgers not eaten function
}); // end of get function

router.post("/", function(req, res){
	burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(){
		res.redirect('/');
	})
});

router.put("/:id",function(req, res){
	var cond = "id = " + req.params.id;
	console.log("cond " + cond);

	burger.update({devoured: true}, cond, function(){
		res.redirect('/')
	})
})


module.exports = router;