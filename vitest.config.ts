import path from "node:path";
import { fileURLToPath } from "node:url";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    projects: [
      // Unit tests - jsdom environment
      {
        extends: true,
        test: {
          name: "unit",
          globals: true,
          environment: "jsdom",
          include: ["**/*.unit.{ts,tsx}"],
          exclude: ["**/node_modules/**", "**/dist/**"],
          setupFiles: ["./vitest.setup.ts"],
          coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
            exclude: [
              "**/node_modules/**",
              "**/dist/**",
              "**/*.stories.{ts,tsx}",
              "**/*.config.{js,ts,mjs,cjs}",
            ],
          },
        },
      },
      // Storybook tests - browser environment
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, "packages/design-system/.storybook"),
            storybookScript: "pnpm storybook --no-open",
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            provider: playwright({}),
            headless: true,
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [
            path.join(dirname, "packages/design-system/.storybook/vitest.setup.ts"),
          ],
        },
      },
    ],
  },
});
