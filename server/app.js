import { fastify as Fastify } from "fastify";
import fastifyStatic from "@fastify/static";
import path from "node:path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (opts) => {
	const app = Fastify(opts);

	/* Your code here. Hello world example: */
	app.get("/api/hello", async (_request, _reply) => {
		return { hello: "world with reload!!" };
	});

	app.get("/api/other", async (_request, _reply) => {
		return { hello: "from other" };
	});

	app.register(fastifyStatic, {
		root: path.join(__dirname, "../client/dist"),
		prefix: "/", // optional: default '/'
	});

	return app;
};
