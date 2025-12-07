module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-clean-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern": null, // Allow camelCase for CSS modules
    // Allow:
    // - Design tokens: --dxy-color-primary, --dxy-spacing-4x
    // - Private CSS variables: --_pa, --_gap (for token-based props that should not inherit)
    "custom-property-pattern": [
      "^([a-z][a-z0-9]*(-[a-z0-9]+)*|dxy-[a-z0-9-]+|_[a-z]+)$",
      {
        message:
          "Custom property name should be kebab-case, --dxy-* (token), or --_* (private)",
      },
    ],
  },
};

