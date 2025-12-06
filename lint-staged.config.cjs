module.exports = {
  "*.{json,md}": ["prettier --write"],
  "*.css": ["stylelint --fix"],
  "package.json": ["sort-package-json"],
};
