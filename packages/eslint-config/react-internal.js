import pluginReact from "eslint-plugin-react";
import pluginReactCompiler from "eslint-plugin-react-compiler";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginStorybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for React libraries (e.g., design systems).
 * Includes accessibility, Storybook, and React Compiler rules.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginJsxA11y.flatConfigs.strict,
  ...pluginStorybook.configs["flat/recommended"],
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-compiler": pluginReactCompiler,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // React Hooks rules
      ...pluginReactHooks.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // React Compiler - prepares codebase for React 19 compiler
      "react-compiler/react-compiler": "error",

      // React best practices
      "react/prop-types": "off", // Using TypeScript for prop validation
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }], // Allow quotes, forbid chars that break JSX
      "react/jsx-no-target-blank": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": "error",
      "react/jsx-boolean-value": ["error", "never"],

      // Accessibility - already strict from jsx-a11y.flatConfigs.strict
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/no-static-element-interactions": "error",
    },
  },
  {
    // Storybook files can use default exports and certain patterns
    files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "storybook/no-redundant-story-name": "off", // Redundant to enforce name matching export
    },
  },
  {
    // Test files - relax certain strict rules for testing patterns
    files: ["**/*.unit.tsx", "**/*.unit.ts", "**/*.test.tsx", "**/*.test.ts"],
    rules: {
      // Vitest's expect().toXxx() calls are typed as `error` in strict mode
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
  {
    // Disable type-checked rules for .storybook config files (not in tsconfig)
    files: ["**/.storybook/**/*.ts", "**/.storybook/**/*.tsx"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    ignores: ["dist/**", "storybook-static/**"],
  },
];
