'use strict'


const bodyParser = require('body-parser')
const express = require('express');

const app = express();
// Port where our app will run
const PORT = process.env.PORT || 3000;

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
    console.log(req.body);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Evernode server is running on Port ${PORT}`);
});
