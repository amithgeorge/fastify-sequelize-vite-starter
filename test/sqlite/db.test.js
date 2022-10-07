import { Sequelize } from "sequelize";
import { describe, expect, test } from "vitest";

const sequelize = new Sequelize("sqlite:./data/dummy.db");

describe("sequelize sqlite usage", () => {
	test("can connect to file db", async () => {
		await sequelize.authenticate();
		const [results, _metadata] = await sequelize.query("select 1 as one;");
		console.dir(results);
		expect(results[0]).toEqual({ one: 1 });
	});
});
