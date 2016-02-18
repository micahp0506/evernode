'use strict'



const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("She's lost that loving feeling");
});

app.listen(PORT, () => {
    console.log(`Evernode server is running on Port ${PORT}`);
});
