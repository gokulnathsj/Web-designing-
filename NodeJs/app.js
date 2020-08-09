var express = require("express")
var path = require("path")
var bodyParser = require("body-parser");

app = express()
var friends = ["gokul", "anoop", "ebin", "aswin"];
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '/public')));
app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.post("/addfriends", function(req, res) {
    var newfriend = req.body.newfriend
    friends.push(newfriend)
    res.redirect("/friends")
})

app.get("/friends", function(req, res) {
    res.render('friends.ejs', { friends: friends });
})

app.listen(3001, function() {
    console.log("server is running")
})