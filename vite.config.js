import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "build",
	},
	server: {
		mimeTypes: {
			"application/javascript": ["js", "jsx"],
			"text/javascript": ["mjs"],
			"text/jsx": ["jsx"],
		},
	},
});
