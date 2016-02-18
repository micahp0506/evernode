'use strict'


const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');

const app = express();
// Port where our app will run
const PORT = process.env.PORT || 3000;

const Note = mongoose.model('Notes', mongoose.Schema({
    title: String,
    text: String
}));
// Allows us to use jade, this before routes
app.set('view engine', 'jade')
// Middleware for using bodyParser
app.use(bodyParser.urlencoded({
    exended:false
}));

app.get('/', (req, res) => {
    res.send("She's lost that loving feeling");
});

app.get('/notes/new', (req, res) => {
    res.render('new-note');
});

app.post('/notes', (req,res) => {
    Note.create(req.body, (err, note) => {
        if (err) throw (err);
        console.log("note", note);
        res.redirect('/');
    });
});

mongoose.connect('mongodb://localhost/27017/evernode', (err) => {
    if (err) throw (err);

    app.listen(PORT, () => {
        console.log(`Evernode server is running on Port ${PORT}`);
    });
});

