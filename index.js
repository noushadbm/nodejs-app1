var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, resp){
	resp.render("index");
});

app.get("/about",function(req, resp){
	resp.render("about");
});

app.listen(8880, function(){
	console.log(process.env.PORT);
	console.log("Server started");
});