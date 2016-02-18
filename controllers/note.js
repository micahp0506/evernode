'use strict'


const Note = require('../models/note');

module.exports = {

    index (req, res) {
        Note.find({}, (err, notes) => {
            res.render('notes-index', {notes: notes});
        });
    },

    newNote (req, res) {
        res.render('new-note');
    },

    create (req,res) {
        Note.create(req.body, (err, note) => {
            if (err) throw err;

            res.redirect(`/notes/${note._id}`);
        });
    },

    show (req, res) {
        res.render('show-note', {note: req.note});
    },

    edit (req, res) {
        res.render('new-note', {note: req.note});
    },

    update (req, res) {
        req.note.update(req.body, (err) => {
            if (err) throw err;

            res.redirect(`/notes/${req.note._id}`);
        });
    },

    destroy (req, res) {
        req.note.remove((err) => {
            if (err) throw err;
            res.redirect('/notes');
        });
    },

}


