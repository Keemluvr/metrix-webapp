import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  env: {
    userFullName: "Admin",
    email: "admin@admin.com",
    password: "admin@admin.com",
    localUrl: "http://localhost:3000",
    localApiUrl: "http://localhost:3000/api",
    prodUrl: "https://metrix-neon.vercel.app/"
  },
  e2e: {}
});
