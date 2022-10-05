import envSchema from "env-schema";
import fastify from "./server/app.js";

const app = fastify({
	pluginTimeout: 50000,
	bodyLimit: 15485760,
});

try {
	// Get port from .env or 3000
	const { PORT } = envSchema({
		dotenv: true,
		schema: {
			type: "object",
			required: ["PORT"],
			properties: {
				PORT: {
					type: "string",
					default: 3000,
				},
			},
		},
	});

	app.listen({ port: PORT, host: "0.0.0.0" });
	console.log(`Server started on 0.0.0.0:${PORT}`);
} catch (err) {
	app.log.error(err);
	process.exit(1);
}
