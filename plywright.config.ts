import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  use: {
    headless: false, // show browser
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
