const { describe } = require("node:test");
const request = require('supertest');
const {app,sayMyWord} = require("../index");

test('shouldSayMyWord', function () {
    expect(sayMyWord("test")).toBe("test");
});


describe('API status' , () =>{
    test('should return name',async ()=>{
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })
})

describe('API response',()=>{
    test('should return a json response',async () =>{
        const response = await request(app).get('/');
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    })
})
