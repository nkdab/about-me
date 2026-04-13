import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    suspicious: "error",
  },
  ignorePatterns: [
    ".next",
    "node_modules",
    "playwright-report",
    "test-results",
  ],
});
