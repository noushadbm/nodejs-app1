var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, resp){
	resp.render("index");
});

app.get("/about",function(req, resp){
	resp.render("about");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server started at " + process.env.IP + ":" + process.env.PORT);
});