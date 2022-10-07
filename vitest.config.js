/* eslint-disable import/no-extraneous-dependencies */

/// <reference types="vitest" />
import { defineConfig } from "vite";

import { config as viteConfig } from "./vite.config.js";

const config = {
	...viteConfig,
	root: "./", // override the root, as we want vitest to test both server and client code
	test: {},
};

export default defineConfig(config);
