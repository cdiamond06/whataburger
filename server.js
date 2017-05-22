// sets up variable for express
var express = require("express");
// allows you to format req from user
var bodyParser = require("body-parser"); 
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;
// assigns an instances of express
var app = express();
// serves static content for the app from public directory
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({extended:false}));
// override with POST having a ?_method=PUT
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
// the default layout will be in main
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// connects the routes in this variable
var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

app.listen(port, function(){
	console.log("Listening on port " + port);
})