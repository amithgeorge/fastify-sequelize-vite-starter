/* eslint-disable node/no-unpublished-import */

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

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
