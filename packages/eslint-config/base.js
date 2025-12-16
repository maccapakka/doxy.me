import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import pluginUnicorn from "eslint-plugin-unicorn";
import pluginPromise from "eslint-plugin-promise";
import pluginPerfectionist from "eslint-plugin-perfectionist";

/**
 * A shared ESLint configuration for the repository.
 * Uses strict TypeScript rules with type-checking enabled.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  pluginUnicorn.configs.recommended,
  pluginPromise.configs["flat/recommended"],
  pluginPerfectionist.configs["recommended-natural"],
  eslintConfigPrettier,
  eslintPluginPrettier,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error",
    },
  },
  {
    // TypeScript parser options for type-checked rules
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Rules for all files
    rules: {
      // Core JavaScript best practices
      "no-console": "error",
      "no-debugger": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "prefer-const": "error",
      "no-var": "error",

      // Unicorn customizations - disable overly aggressive rules
      "unicorn/prevent-abbreviations": "off",
      "unicorn/no-null": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-useless-undefined": "off",

      // Promise rules
      "promise/always-return": "error",
      "promise/no-return-wrap": "error",
      "promise/catch-or-return": "error",

      // Perfectionist - use natural sorting
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "unknown",
          ],
          newlinesBetween: "always",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        {
          type: "natural",
          order: "asc",
        },
      ],
    },
  },
  {
    // TypeScript-specific strict rules (only for TS files)
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
    },
  },
  {
    // Disable type-checked rules for JS config files not in tsconfig
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: ["dist/**", "node_modules/**", ".next/**", "coverage/**"],
  },
];

