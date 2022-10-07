/* eslint-disable import/no-extraneous-dependencies */

import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export const config = {
	root: "./app/client", // we will use vite only for the client side code. server side code is untouched
	build: {
		emptyOutDir: true,
		outDir: "../../dist",
	},
	plugins: [preact()],
	server: {
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
	resolve: {
		alias: {
			"#server": `${new URL("app/server", import.meta.url).pathname}`,
			"#client": `${new URL("app/client/src", import.meta.url).pathname}`,
		},
	},
};

// https://vitejs.dev/config/
export default defineConfig(config);
