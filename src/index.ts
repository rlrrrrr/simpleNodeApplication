import { Request, Response } from "express";
import {exit} from 'node:process';

const express = require('express');



const app = express();


app.get('/', (req:Request, res:Response) => {
    res.status(200).json({value:'Welcome to My API'});
});


const server = app.listen(5000,()=>{
})

function sayMyWord(word: string):string{
    console.log(word);
    return word;
}

function shutdown(){
    console.log("fermeture de la connexion");
    server.close(()=>{
        exit(1);
    })
}

sayMyWord("hello");

module.exports = {sayMyWord,server,app};



