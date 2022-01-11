const request = require('supertest');
const app = require('../app');

describe("/api", () => {
    describe("GET", () => {
        test("responds with 200 and with message all ok", () => {
            return request(app)
            .get("/api")
            .expect(200)
            .then((res) => {
                expect(res.body.msg).toBe('all ok');
            });
        });
    });
});

describe("/api/restaurants", () => {
    describe("GET", () => {
        test("200 code and responds with an array of resaurants", () => {
            return request(app)
            .get("/api/restaurants")
            .expect(200)
            .then(({ body }) => {
                const restaurants = body.restaurants;
                expect(restaurants).toBeInstanceOf(Array);
                console.log(body.restaurants);
                expect(restaurants).toHaveLength(8);
                restaurants.forEach((restaurant) => {
                  expect(restaurant).toEqual(
                    expect.objectContaining({
                      retaurant_id: expect.any(Number),
                      restaurant_name: expect.any(String),
                      area_id: expect.any(Number),
                      cuisine: expect.any(String),
                      website: expect.any(String)
                    })
                  );
                });
              });
        });
    });
});