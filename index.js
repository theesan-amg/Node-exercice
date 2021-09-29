const express = require("express");
const exphbs = require('express-handlebars');
const translations = require("./translations.json")
const app = express();
const port = 4444;

app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');


app.get("/:lang?", (req, res) => {

    const lang = req.params.lang
    console.log(lang);
    res.render("home", {
        pageTitle: translations[lang]["pageTitle"]
    })
})

app.get("/*", (req, res) => {
    res.render("home", {
        pageTitle: translations["fr"]["pageTitle"]
    })
})

// A chaque fr ou es dans l'url le render va s'afficher title dans le json "hole , bonjour"

app.listen(port, () => {
    console.log("Server started :" + port);
})