import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@template/shared": path.resolve(__dirname, "../shared/src/index.ts"),
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy API requests to Express
    },
  },
});
