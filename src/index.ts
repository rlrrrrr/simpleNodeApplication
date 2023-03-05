import { Request, Response } from "express";

const express = require('express');



const app = express();


app.get('/', (req:Request, res:Response) => {
    res.status(200).json({value:'Welcome to My API'});
});


app.listen(5000,()=>{
    console.log("Its work");
})

function sayMyWord(word: string):string{
    console.log(word);
    return word;
}

sayMyWord("hello");

module.exports = {sayMyWord,app};



