# Icon

A wrapper component for SVG icons that provides consistent sizing and coloring using design tokens.

## Import

```tsx
import { Icon } from "@doxy/design-system/components";
// or
import { Icon } from "@doxy/design-system/components/Icon";
```

## Usage

```tsx
import { Icon } from "@doxy/design-system/components";
import { DotsIcon } from "@doxy/design-system/icons/DotsIcon";

<Icon svg={DotsIcon} size={6} color="primary" />;
```

## Props

| Prop        | Type                                                                                         | Default     | Description                                                      |
| ----------- | -------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------- |
| `svg`       | `ReactElement`                                                                               | required    | The SVG element to render                                        |
| `size`      | `number`                                                                                     | `6` (24px)  | Size multiplier (multiplier of 4px spacing base)                 |
| `color`     | `"primary" \| "secondary" \| "accent" \| "warning" \| "positive" \| "critical" \| "neutral"` | `undefined` | Color variant from design tokens                                 |
| `className` | `string`                                                                                     | `undefined` | Additional CSS classes                                           |
| `style`     | `CSSProperties`                                                                              | `undefined` | Additional inline styles                                         |
| `...rest`   | `HTMLAttributes<HTMLDivElement>`                                                             | -           | Any additional HTML attributes are passed through to the wrapper |

## Size System

The Icon component uses a multiplier-based sizing system that follows the same pattern as the Box component's spacing system:

- Size multiplier is based on the 4px spacing base token (`--dxy-spacing-base`)
- `size={6}` → 24px (default, common icon size)
- `size={4}` → 16px (small)
- `size={8}` → 32px (large)
- `size={12}` → 48px (extra large)

The component uses `aspect-ratio: 1` to maintain a perfect square, and the SVG automatically fills the container.

## Color Variants

Color variants map directly to design system color tokens:

- **primary**: Blue - Primary actions and links
- **secondary**: Slate - Secondary elements
- **accent**: Violet - Highlights and accents
- **warning**: Amber - Warning states
- **positive**: Green - Success states
- **critical**: Red - Error states and destructive actions
- **neutral**: Light gray - Placeholder and muted elements

When no `color` prop is provided, the icon inherits the current text color from its parent.

## Examples

### Basic Usage

```tsx
<Icon svg={ChatIcon} />
```

### With Size and Color

```tsx
<Icon svg={SettingsIcon} size={8} color="primary" />
```

### Small Icon

```tsx
<Icon svg={PhoneIcon} size={4} color="critical" />
```

### Large Icon

```tsx
<Icon svg={MeetingCameraIcon} size={12} color="positive" />
```

### Inheriting Color from Parent

```tsx
<div style={{ color: "red" }}>
  <Icon svg={DotsIcon} size={6} />
</div>
```

### With Additional Styling

```tsx
<Icon
  svg={LayoutIcon}
  size={8}
  color="accent"
  className="custom-icon"
  style={{ marginRight: "8px" }}
/>
```

## Available Icons

The design system includes the following icons (import from `@doxy/design-system/icons`):

- `ChatIcon` - Chat/messaging
- `DotsIcon` - Menu/more options
- `LayoutIcon` - Layout controls
- `MeetingCameraIcon` - Camera on
- `MeetingCameraOffIcon` - Camera off
- `MicrophoneIcon` - Microphone on
- `PhoneIcon` - Phone/call
- `PhoneOffIcon` - End call
- `ReportIcon` - Report/analytics
- `SettingsIcon` - Settings/configuration

## Implementation Details

### Styling Approach

The component uses CSS custom properties to pass the size multiplier to CSS, where it's calculated against the spacing base token:

```css
.root {
  width: calc(var(--dxy-spacing-base) * var(--_size));
  aspect-ratio: 1;
  display: inline-flex;
}

.root svg {
  width: 100%;
  height: 100%;
}
```

### Color Implementation

Colors are applied via CSS classes that reference design system color tokens:

```css
.primary {
  color: var(--dxy-color-primary);
}
```

The SVG's `stroke="currentColor"` attribute allows it to inherit the color set by the wrapper.

### Why Not React.cloneElement?

This component uses a simple wrapper approach rather than cloning the SVG element. This is:

- More performant (no element cloning)
- Simpler to understand and maintain
- Achieves the same result via CSS inheritance

## Accessibility

- All icon SVGs include a `<title>` element for screen readers
- Icons are rendered in a wrapper that can accept ARIA attributes
- When icons are used for interactive elements, ensure proper ARIA labels are added to the parent button/link

## File Structure

```
Icon/
├── index.ts                # Component exports
├── Icon.tsx                # Main component
├── Icon.unit.tsx           # Unit tests
├── Icon.stories.tsx        # Storybook stories
├── Icon.module.css         # CSS modules styles
└── Icon.llm.md             # This file
```
