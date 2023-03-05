"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.status(200).json({ value: 'Welcome to My API' });
});
app.listen(5000, () => {
    console.log("Its work");
});
function sayMyWord(word) {
    console.log(word);
    return word;
}
sayMyWord("hello");
module.exports = { sayMyWord, app };
