# Button

A versatile button component for the Doxy design system with support for 3 variants, 4 colors, 3 sizes, icons, icon-only mode, and full-width mode.

## Import

```tsx
import { Button } from "@doxy/design-system/components";
// or
import { Button } from "@doxy/design-system/components/Button";
```

## Usage

```tsx
<Button color="action" size="medium" onClick={() => console.log("clicked")}>
  Click me
</Button>
```

## Props

| Prop             | Type                                                             | Default     | Description                                                        |
| ---------------- | ---------------------------------------------------------------- | ----------- | ------------------------------------------------------------------ |
| `children`       | `ReactNode`                                                      | `undefined` | The content to display (optional for icon-only)                    |
| `color`          | `"action" \| "positive" \| "critical" \| "neutral" \| "inherit"` | `"action"`  | The color of the button                                            |
| `variant`        | `"solid" \| "outline" \| "ghost"`                                | `"solid"`   | The visual variant of the button                                   |
| `size`           | `"small" \| "medium" \| "large"`                                 | `"medium"`  | The size of the button                                             |
| `icon`           | `ReactElement`                                                   | `undefined` | Icon element to display before the label                           |
| `fullWidth`      | `boolean`                                                        | `false`     | Whether the button should take full container width                |
| `disabled`       | `boolean`                                                        | `false`     | Whether the button is disabled                                     |
| `onClick`        | `() => void`                                                     | `undefined` | Click handler                                                      |
| `className`      | `string`                                                         | `undefined` | Additional CSS classes                                             |
| `aria-label`     | `string`                                                         | `undefined` | Accessible label (recommended for icon-only buttons)               |
| `unstyledStates` | `boolean`                                                        | `false`     | Removes built-in hover, active, and focus visual styles (advanced) |

## Variants

Three visual variants control the button's appearance:

- **solid** (default): Filled background with white text
- **outline**: Transparent background with colored border and text
- **ghost**: Transparent background with colored text, no border (subtle background on hover)

## Colors

All colors use design tokens with automatic hover and active states via CSS `color-mix()`:

- **action**: Primary actions (uses `--dxy-color-action`)
- **positive**: Success / confirmation actions (uses `--dxy-color-positive`)
- **critical**: Destructive / danger actions (uses `--dxy-color-critical`)
- **neutral**: Muted / secondary actions (uses `--dxy-color-neutral`)
- **inherit**: Inherits color from parent via `currentColor` (ideal for dark backgrounds)

## Sizes

Sizes use typography and spacing tokens:

- **small**: Compact size (`--dxy-type-body-2-size` font, `--dxy-spacing-2x/3x` padding)
- **medium**: Default size (`--dxy-type-body-1-size` font, `--dxy-spacing-3x/4x` padding)
- **large**: Larger size (`--dxy-type-featured-3-size` font, `--dxy-spacing-4x/5x` padding)

## Icon Prop

The `icon` prop accepts a React element. The Button clones the element and controls its size via CSS (`1em` relative to button font size).

```tsx
// Define an icon element
const MyIcon = (
  <svg viewBox="0 0 24 24">
    <path d="..." />
  </svg>
);

// Pass the element directly
<Button icon={MyIcon}>With Icon</Button>;
```

## Icon Only

Buttons can render with just an icon by omitting `children`. When only an icon is present, the button becomes square using `aspect-ratio: 1`.

```tsx
// Icon-only button (square shape)
<Button icon={StarIcon} aria-label="Favorite" />

// Different sizes
<Button icon={StarIcon} size="small" aria-label="Favorite" />
<Button icon={StarIcon} size="large" aria-label="Favorite" />

// With colors and variants
<Button icon={StarIcon} color="critical" aria-label="Delete" />
<Button icon={StarIcon} variant="outline" aria-label="Favorite" />
```

**Important:** Always provide an `aria-label` for icon-only buttons to ensure accessibility.

## Accessibility

- Uses native `<button>` element for keyboard accessibility
- Supports `disabled` state with proper HTML disabled attribute
- Has `type="button"` to prevent accidental form submissions
- Focus visible ring for keyboard navigation
- Use `aria-label` for icon-only buttons to provide an accessible name

## Advanced

### Unstyled States

The `unstyledStates` prop removes all built-in hover, active, and focus visual styles (background color changes, outline, transform). This allows advanced users to implement completely custom state styles via `className`.

```tsx
// Button with no built-in state styles
<Button unstyledStates className="my-custom-states">
  Custom Hover
</Button>
```

The CSS uses `:where()` for low specificity, so your custom styles will easily override without needing `!important`.

## Examples

### Basic Usage

```tsx
<Button>Default Button</Button>
```

### All Colors

```tsx
<Button color="action">Action</Button>
<Button color="positive">Positive</Button>
<Button color="critical">Critical</Button>
<Button color="neutral">Neutral</Button>
```

### All Variants

```tsx
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### All Sizes

```tsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

### With Icon

```tsx
const SettingsIcon = (
  <svg viewBox="0 0 24 24">...</svg>
);

<Button icon={SettingsIcon}>Settings</Button>
<Button icon={SettingsIcon} size="large">Large with Icon</Button>
```

### Icon Only

```tsx
<Button icon={StarIcon} aria-label="Favorite" />
<Button icon={SettingsIcon} aria-label="Settings" />
<Button icon={StarIcon} color="critical" aria-label="Delete" />
```

### Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

### Disabled State

```tsx
<Button disabled>Cannot Click</Button>
```

### On Dark Backgrounds (Inherit Color)

The `inherit` color uses `currentColor` to inherit text color from the parent container. This is ideal for buttons on dark backgrounds where text is white.

```tsx
// Container with white text on dark background
<div style={{ background: "black", color: "white" }}>
  <Button variant="ghost" color="inherit">
    Ghost
  </Button>
  <Button variant="outline" color="inherit">
    Outline
  </Button>
  <Button variant="solid" color="inherit">
    Solid
  </Button>
</div>
```

Hover and active states use semi-transparent overlays that work regardless of the inherited color.

## File Structure

```
Button/
├── index.ts                # Component exports
├── Button.tsx              # Main component
├── Button.unit.tsx         # Unit tests
├── Button.stories.tsx      # Storybook stories
├── Button.module.css       # CSS modules styles
└── Button.llm.md           # This file
```
