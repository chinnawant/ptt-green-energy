import request from 'supertest';
import express from 'express';
import app from '../../server/main.js';


// import app from '

describe('Middleware headers', () => {
  test('should set X-Frame-Options header', async () => {

    const res = await request(app).get('/');
    expect(res.headers['x-frame-options']).toEqual('SAMEORIGIN');
  });

});


describe("GET /static", () => {
  it("should return 400 with error message", async () => {
    const response = await request(app).get("/static");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Your custom error message here");
  });
});

describe("GET /static/js", () => {
  it("should return 400 with error message", async () => {
    const response = await request(app).get("/static/js");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Your custom error message here");
  });
});

describe("GET /static/css", () => {
  it("should return 400 with error message", async () => {
    const response = await request(app).get("/static/css");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Your custom error message here");
  });
});

describe("GET /static/media", () => {
  it("should return 400 with error message", async () => {
    const response = await request(app).get("/static/media");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Your custom error message here");
  });
});

describe("GET /sitemap.xml", () => {
  it("should return 400 with error message", async () => {
    const response = await request(app).get("/sitemap.xml");
    expect(response.statusCode).toBe(400);
    expect(response.text).toBe("Your custom error message here");
  });
});