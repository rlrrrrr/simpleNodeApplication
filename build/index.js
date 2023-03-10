"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_process_1 = require("node:process");
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.status(200).json({ value: 'Welcome to My API' });
});
const server = app.listen(5000, () => {
});
function sayMyWord(word) {
    console.log(word);
    return word;
}
function shutdown() {
    console.log("fermeture de la connexion");
    server.close(() => {
        (0, node_process_1.exit)(1);
    });
}
sayMyWord("hello");
module.exports = { sayMyWord, server, app };
