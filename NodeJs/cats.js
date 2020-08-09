var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

var CatSchema = mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

var Cat = mongoose.model("Cats", CatSchema)

// var george = new Cat({
//     name: "abx",
//     age: 7,
//     temperament: "evil"
// })

// george.save(function(err, cats) {
//     if (err) {
//         console.log("We got an error")
//     } else {
//         console.log(cats)
//     }
// })

Cat.create({
    name: "abhi",
    age: 17,
    temperament: "bark"
}, function(err, cat) {
    if (err) {

        console.log(err)
    } else {
        console.log(cat)
    }
})

Cat.find({}, function(err, cats) {
    if (err) {
        console.log(err)
    } else {
        console.log(cats)
    }
})