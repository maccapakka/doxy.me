module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-clean-order",
    "stylelint-prettier/recommended",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-plugin-logical-css",
    "stylelint-declaration-strict-value",
    "stylelint-rem-over-px",
    "stylelint-plugin-defensive-css",
    "stylelint-high-performance-animation",
    "stylelint-use-nesting",
  ],
  rules: {
    // ========================================
    // CSS Modules Compatibility
    // ========================================
    "selector-class-pattern": null, // Allow camelCase for CSS modules

    // ========================================
    // Custom Property Naming
    // ========================================
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

    // ========================================
    // Property Validation
    // ========================================
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["corner-shape"], // CSS Shapes Module Level 1
      },
    ],

    // ========================================
    // Logical CSS Properties (i18n ready)
    // ========================================
    // Enforce logical properties over physical (margin-inline-start vs margin-left)
    "plugin/use-logical-properties-and-values": [
      true,
      {
        severity: "error",
        // Allow width/height for intentionally square elements (icons, avatars)
        // and -webkit-box-orient for line clamping
        ignore: ["width", "height", "-webkit-box-orient"],
      },
    ],
    // Enforce logical viewport units (dvb vs dvh)
    "plugin/use-logical-units": [true, { severity: "error" }],

    // ========================================
    // Design Token Enforcement
    // ========================================
    // Enforce use of CSS variables instead of magic numbers
    "scale-unlimited/declaration-strict-value": [
      [
        // Colors - all color-related properties must use tokens
        "/color$/",
        "fill",
        "stroke",
        // Spacing - margin, padding, gap must use tokens
        "/^margin/",
        "/^padding/",
        "gap",
        "row-gap",
        "column-gap",
        // Typography - must use type tokens
        "font-size",
        "line-height",
        "font-weight",
        "font-family",
        // Border radius - must use radius tokens
        "/^border.*radius$/",
      ],
      {
        ignoreValues: {
          // Global CSS keywords allowed everywhere
          "": ["inherit", "initial", "unset", "revert", "revert-layer"],
          // Color exceptions
          "/color$/": ["currentcolor", "transparent"],
          fill: ["currentcolor", "transparent", "none"],
          stroke: ["currentcolor", "transparent", "none"],
          // Spacing exceptions
          "/^margin/": ["0", "auto"],
          "/^padding/": ["0"],
          gap: ["0"],
          "row-gap": ["0"],
          "column-gap": ["0"],
          // Typography exceptions
          "line-height": ["normal"],
          "font-weight": ["bolder", "lighter"],
          // Border radius exceptions (0 for none, 50%/9999px for circles)
          "/^border.*radius$/": ["0", "50%", "9999px"],
        },
        disableFix: true,
        message:
          "Use design tokens (--dxy-*) instead of hardcoded values for ${property}",
      },
    ],

    // ========================================
    // Unit Enforcement
    // ========================================
    // Enforce rem over px (allow 1px, 2px for borders/outlines, 9999px for circles)
    "rem-over-px/rem-over-px": [
      true,
      {
        ignore: ["1px", "2px", "9999px"],
        ignoreFunctions: ["url"],
        ignoreAtRules: ["media"],
      },
    ],
    // Disallow print units (em allowed for relative sizing in specific contexts)
    "unit-disallowed-list": ["cm", "mm", "in", "pt", "pc"],
    // No units on zero values
    "length-zero-no-unit": true,

    // ========================================
    // Defensive CSS
    // ========================================
    "plugin/use-defensive-css": [
      true,
      {
        // Disabled: Too aggressive for component libraries where hover is well-understood
        "accidental-hover": false,
        // Suggest flex-wrap with flexbox (useful reminder)
        "flex-wrapping": true,
        // Warn about scroll chaining issues
        "scroll-chaining": true,
        // Require vendor prefix handling
        "vendor-prefix-grouping": true,
      },
    ],

    // ========================================
    // High Performance Animations
    // ========================================
    // Only allow GPU-accelerated properties in animations/transitions
    "plugin/no-low-performance-animation-properties": [
      true,
      {
        severity: "error",
        ignoreProperties: ["color", "background-color", "border-color"],
      },
    ],

    // ========================================
    // CSS Nesting
    // ========================================
    // Enforce native CSS nesting where possible
    "csstools/use-nesting": "always",

    // ========================================
    // Selector Complexity
    // ========================================
    // Disallow ID selectors - prevents specificity wars
    "selector-max-id": 0,
    // Limit nesting depth - keeps selectors maintainable
    "max-nesting-depth": [
      3,
      {
        ignore: ["blockless-at-rules", "pseudo-classes"],
      },
    ],
    // Limit selector complexity
    "selector-max-compound-selectors": 4,

    // ========================================
    // Declaration Quality
    // ========================================
    // Ban !important - forces proper cascade management
    "declaration-no-important": true,
    // Disallow named colors (red, blue) - use tokens
    "color-named": "never",
    // Disallow hex colors - use tokens
    "color-no-hex": true,
    // Force oklch/tokens for colors (disallow legacy color functions)
    "function-disallowed-list": ["rgb", "rgba", "hsl", "hsla", "hwb"],
    // Clean up redundant shorthand values
    "shorthand-property-no-redundant-values": true,
    // Allow longhand properties when using CSS variables (shorthands don't work with variables)
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: [
          "flex-flow",
          "grid-template",
          "flex",
          "place-items",
          "place-self",
        ],
      },
    ],
  },

  // ========================================
  // File-specific Overrides
  // ========================================
  overrides: [
    // Token definition files - allow raw values (that's their purpose)
    {
      files: ["**/tokens/**/*.css"],
      rules: {
        // Tokens define the raw values - they shouldn't use other tokens
        "scale-unlimited/declaration-strict-value": null,
        // Tokens can use any color format to define base colors
        "color-named": null,
        "color-no-hex": null,
        "function-disallowed-list": null,
        // Tokens define base units in px
        "rem-over-px/rem-over-px": null,
        // Allow em for letter-spacing tokens
        "unit-disallowed-list": ["cm", "mm", "in", "pt", "pc"],
        // Token files don't need flex-wrap reminders
        "plugin/use-defensive-css": null,
      },
    },
    // Web app globals - more permissive for demo/testing pages
    {
      files: ["apps/web/**/*.css"],
      rules: {
        // Allow nesting suggestions as warnings (easier migration)
        "csstools/use-nesting": ["always", { severity: "warning" }],
      },
    },
    // Design system components - nesting as warning for existing code
    {
      files: ["packages/design-system/src/components/**/*.css"],
      rules: {
        // Existing components use a flat structure; nesting is encouraged but not required
        "csstools/use-nesting": ["always", { severity: "warning" }],
      },
    },
  ],
};
