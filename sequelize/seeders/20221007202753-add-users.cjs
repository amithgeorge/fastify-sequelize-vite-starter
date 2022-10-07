const { randomUUID } = require("node:crypto");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, _Sequelize) {
		return queryInterface.bulkInsert("users", [
			{
				name: randomUUID(),
			},
			{
				name: randomUUID(),
			},
			{
				name: randomUUID(),
			},
		]);
	},

	async down(queryInterface, _Sequelize) {
		return queryInterface.bulkDelete("users", null, { truncate: true });
	},
};
