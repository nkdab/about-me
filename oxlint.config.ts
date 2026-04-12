import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    suspicious: "error",
    style: "warn"
  },
  ignorePatterns: [".next", "node_modules", "playwright-report", "test-results"]
});
