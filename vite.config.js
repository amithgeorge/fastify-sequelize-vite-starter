/* eslint-disable import/no-extraneous-dependencies */

import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

export const config = {
	root: "./client", // we will use vite only for the client side code. server side code is untouched
	plugins: [preact()],
	server: {
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
	resolve: {
		alias: {
			"#server": `${new URL("server", import.meta.url).pathname}`,
			"#client": `${new URL("client/src", import.meta.url).pathname}`,
		},
	},
};

// https://vitejs.dev/config/
export default defineConfig(config);
