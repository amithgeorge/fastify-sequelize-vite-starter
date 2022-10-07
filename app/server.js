import url from "node:url";

import envSchema from "env-schema";

import { defaultApp } from "#server/app.js";

let app;
function start() {
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

		app = defaultApp;
		app.listen({ port: PORT, host: "0.0.0.0" });
		console.log(`Server started on 0.0.0.0:${PORT}`);
	} catch (error) {
		app?.log.error(error);
		throw error;
	}
}

const isExecuting = import.meta.url === url.pathToFileURL(process.argv[1]).href;
if (isExecuting) {
	start();
}
