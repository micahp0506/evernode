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
    exended: false
}));

app.get('/', (req, res) => {
    res.send("She's lost that loving feeling");
});

app.get('/notes/new', (req, res) => {
    res.render('new-note');
});

// url's with route params have to be below the exception, in this instance, if this were before the get before, the url would thin that new in the above path is an id
app.get('/notes/:id', (req, res) => {
    Note.findById(req.params.id, (err, note) => {
        if (err) throw (err);
        res.render('show-note', {note: note});
    })
});

app.post('/notes', (req,res) => {
    Note.create(req.body, (err, note) => {
        if (err) throw (err);

        res.redirect(`/notes/${note._id}`);
    });
});

mongoose.connect('mongodb://localhost/27017/evernode', (err) => {
    if (err) throw (err);

    app.listen(PORT, () => {
        console.log(`Evernode server is running on Port ${PORT}`);
    });
});

