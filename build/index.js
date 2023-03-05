"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.status(200).json({ value: 'Express + TypeScript Server' });
});
app.listen(5000, function () {
    console.log("Its work");
});
function sayMyWord(word) {
    console.log(word);
    return word;
}
sayMyWord("hello");
module.exports = { sayMyWord: sayMyWord, app: app };
