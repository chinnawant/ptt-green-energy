import request from 'supertest';
import express from 'express';
import { app, corsOptions } from '../../server/main.js';



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



describe('CORS options', () => {
  test('allows requests from whitelisted domains', () => {
    const callback = jest.fn();
    const testOrigin = "http://localhost:3000"; // assuming your whitelist is not empty

    corsOptions.origin(testOrigin, callback);

    expect(callback).toHaveBeenC
  });

  test('disallows requests from non-whitelisted domains', () => {
    const callback = jest.fn();
    const testOrigin = 'http://not-whitelisted.com';

    corsOptions.origin(testOrigin, callback);

    expect(callback).toHaveBeenCalledWith(new Error('Not allowed by CORS'));
  });

  test('allows requests with no origin', () => {
    const callback = jest.fn();

    corsOptions.origin(null, callback);

    expect(callback).toHaveBeenCalledWith(null, true);
  });
});