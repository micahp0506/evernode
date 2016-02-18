'use strict'


const express = require('express');
const router = express.Router();

const note = require('../controllers/note');

router.get('/notes/new', note.newNote);
// url's with route params have to be below the exception, in this instance, if this were before the get before, the url would thin that new in the above path is an id
router.get('/notes/:id', note.show);
router.delete('/notes/:id', note.destroy);
router.post('/notes', note.create);



module.exports = router;
