import supertest from "supertest";
import { describe, expect, test } from "vitest";

import { defaultApp as app } from "#server/app.js";

describe("fastify server is configured", () => {
	test("use supertest to verify /api/hello route returns json data", async () => {
		await app.ready();

		const response = await supertest(app.server).get("/api/hello");

		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual({ hello: "world" });
	});

	test("use fastify.inject to verify /api/hello route returns json data", async () => {
		const response = await app.inject({
			url: "/api/hello",
			method: "GET",
		});

		expect(response.statusCode).toBe(200);
		const body = JSON.parse(response.payload);
		expect(body).toEqual({ hello: "world" });
	});
});
