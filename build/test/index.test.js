const request = require("supertest");
const {app,server}  = require("../index");


describe('GET "/"', () => {
    it("should return code status 200", async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        expect(response.body.value).toBe('Welcome to My API');
    });
    afterAll(()=>{
        server.close();
    })
});
