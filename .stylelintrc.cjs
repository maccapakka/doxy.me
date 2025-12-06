module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-clean-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern": null, // Allow camelCase for CSS modules
  },
};

