/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: {
				type: Sequelize.DataTypes.BIGINT,
				autoIncrement: true,
				primaryKey: true,
			},
			name: Sequelize.DataTypes.STRING,
		});
	},

	async down(queryInterface, _Sequelize) {
		await queryInterface.dropTable("users");
	},
};
