
var connection = require("../config/connection.js");


// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

var orm = {

	all: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		})
	},

	update: function(tableInput, objcall, cond, cb){
		var queryString = "UPDATE " + tableInput;

		queryString += " SET ";
		queryString += objToSql(objcall);
		queryString += " WHERE ";
		queryString += cond;
		console.log(queryString);
		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			cb();
		})
	},

	create:function(tableInput, objcall, vals, cb){
		var queryString = "INSERT INTO " + tableInput;

		queryString += " (";
		queryString += objcall.toString();
		queryString += ")  VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";
		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if (err){
				throw err;
			}
			cb();
		});
	}




}

module.exports = orm;