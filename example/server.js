var http = require("http");
var express = require('express');
var app = express();
//var ejsEngine = require("ejs-locals");
//Controllers initilization.
var controllers = require('./controllers');


// Setup View Engine

// Using vash view engine
app.set("view engine", "vash");

// Jade view engine.
//app.set("view engine", "jade");

// using ejs view engine
//app.engine("ejs", ejsEngine); // support master pages
//app.set("view engine", "ejs"); // ejs view engine.

// traditional / basic way of writing server
/*var server = http.createServer(function(req, res) {
	res.write("<html><body><h1>"+ req.url +"</h1></body> </html>");
	res.end();
}).listen("3000");*/

// set the public static reseources folder
//console.log(__dirname);
app.use(express.static(__dirname + "/public"));


// Map routes
controllers.init(app);

// Express + vash

app.get("/vash", function(req, res){
	res.render("vash/index", {title : "Express + Vash", name:"Chirag"});
});

// Using Express + Jade view engine
app.get("/jade", function(req, res) {
	res.render("/jade/index", {title : "Express + Jade"});
});

// using Express + ejs view engine
app.get("/ejs", function(req, res) {
	res.render("ejs/index", {title : "Express + Ejs"});
});

// using express framework..
app.get("/foo/bar", function(req, res) {
	
	res.send("<html><body><h1> "+ req.url +" </h1></body> </html>")
});

app.get("/api/users/user", function(req, res){
	res.set("Content-Type", "application/json");
	res.send({name:"chirag", isValid:true, group:"Admin"});
});

// Using express..
var server = http.createServer(app);
server.listen(3000); 