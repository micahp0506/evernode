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
            if (err) throw (err);

            res.redirect(`/notes/${note._id}`);
        });
    },

    show (req, res) {
        Note.findById(req.params.id, (err, note) => {
            if (err) throw (err);
            res.render('show-note', {note: note});
        });
    },

    edit (req, res) {
        Note.findById(req.params.id, (err, note) => {
            if (err) throw (err);
            res.render('new-note', {note: note});
        });
    },

    update (req, res) {
        Note.findByIdAndUpdate(req.params.id, req.body, (err, note) => {
            if (err) throw (err);

            res.redirect(`/notes/${note._id}`);
        });
    },

    destroy (req, res) {
        Note.findByIdAndRemove(req.params.id, (err) => {
            if (err) throw (err);
            res.redirect('/notes');
        });
    },

}


