const request = require("supertest");
const {app,server}  = require("../index");


describe('GET "/"', () => {
    it("should return code status 200", async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        server.close();

    });
    it("should return json",async ()=>{
        const response = await request(server).get('/');
        expect(response.header['content-type']).toMatch(/application\/json/);;
        server.close();
    })
    it("should return body equals to Welcome to My API",async ()=>{
        const response = await request(server).get('/');
        expect(response.body.value).toBe('Welcome to My API');
        server.close();

    })

    afterAll(()=>{
        server.close();
    })
});
