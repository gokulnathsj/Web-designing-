var express = require("express")
var mongoose = require("mongoose")
var passport = require("passport")
var bodyParser = require("body-parser")
var localStrategy = require("passport-local")
var User = require("./models/user")
var passportLocalMongoose = require("passport-local-mongoose")

mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost/auth_app_demo", { useNewUrlParser: true });

var app = express()

app.use(require("express-session")({
    secret: "Rusty is the best and the cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// 
// Routes
//

app.get("/", function(req, res) {
    res.render("home.ejs")
})

app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret.ejs")
})

// 
// Authentications Routes
// Show Sign Up forms 
app.get("/register", function(req, res) {
    res.render("register.ejs")
})

// post request
app.post("/register", function(req, res) {
    req.body.username
    req.body.password
    User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("/register.ejs");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/secret")
        });

    });

});

app.get("/login", function(req, res) {
    res.render("login.ejs")
})

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res) {});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect('/login')
}
app.listen(3001, function() {
    console.log("Server is listening")
})