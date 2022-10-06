/* eslint-disable import/no-extraneous-dependencies */

import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	root: "./client",
	plugins: [preact()],
	server: {
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
});
