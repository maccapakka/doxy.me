import { globalIgnores } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import pluginReactCompiler from "eslint-plugin-react-compiler";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginNext from "@next/eslint-plugin-next";
import globals from "globals";

import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for Next.js applications.
 * Includes accessibility, React Compiler, and Next.js-specific rules.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nextJsConfig = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginJsxA11y.flatConfigs.strict,
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
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
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
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
    // Next.js page/layout files - can add custom rules here if needed
    files: [
      "**/app/**/page.tsx",
      "**/app/**/layout.tsx",
      "**/app/**/loading.tsx",
      "**/app/**/error.tsx",
      "**/app/**/not-found.tsx",
      "**/app/**/template.tsx",
      "**/app/**/default.tsx",
    ],
    rules: {},
  },
  {
    ignores: ["dist/**", ".next/**", "out/**"],
  },
];
