# Box

A foundational layout primitive component for flexbox and grid layouts. Box is the building block for creating layouts with consistent spacing using design tokens. It automatically switches between flexbox and CSS Grid based on which props are provided.

## Import

```tsx
import { Box } from "@doxy/design-system/components";
// or
import { Box } from "@doxy/design-system/components/Box";

// Semantic aliases
import {
  Section,
  Article,
  Header,
  Footer,
  Aside,
  Nav,
} from "@doxy/design-system/components";

// Layout aliases
import {
  Stack,
  Cluster,
  Card,
  Container,
} from "@doxy/design-system/components";
```

## Usage

```tsx
<Box direction="column" gap={4} padding={6}>
  <div>Child 1</div>
  <div>Child 2</div>
</Box>
```

## Props

| Prop                  | Type                                                                            | Default     | Description                                    |
| --------------------- | ------------------------------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `as`                  | `ElementType`                                                                   | `"div"`     | The HTML element to render                     |
| `children`            | `ReactNode`                                                                     | `undefined` | The content to display inside the Box          |
| `className`           | `string`                                                                        | `undefined` | Additional CSS classes                         |
| `direction`           | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'`                        | `undefined` | Flex direction                                 |
| `alignItems`          | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'`                       | `undefined` | Align items on cross axis                      |
| `alignSelf`           | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'`                       | `undefined` | Align self on cross axis                       |
| `justifyContent`      | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'`             | `undefined` | Justify content on main axis                   |
| `justifySelf`         | `'start' \| 'center' \| 'end' \| 'stretch'`                                     | `undefined` | Justify self on main axis                      |
| `gap`                 | `number`                                                                        | `2` (8px)   | Gap between children (multiplier of 4px)       |
| `padding`             | `number`                                                                        | `undefined` | Padding on all sides (multiplier of 4px)       |
| `paddingBlock`        | `number`                                                                        | `undefined` | Vertical padding (multiplier of 4px)           |
| `paddingInline`       | `number`                                                                        | `undefined` | Horizontal padding (multiplier of 4px)         |
| `background`          | `'primary' \| 'secondary' \| 'accent' \| 'warning' \| 'positive' \| 'critical'` | `undefined` | Background color from design tokens            |
| `borderRadius`        | `1 \| 2 \| 3 \| 'circle'`                                                       | `1`         | Border radius from design tokens               |
| `cornerShape`         | `'round' \| 'scoop' \| 'bevel' \| 'notch' \| 'squircle'`                        | `'round'`   | Corner shape style (CSS corner-shape)          |
| `width`               | `string`                                                                        | `undefined` | Width as CSS value (e.g. "300px", "50%")       |
| `maxWidth`            | `string`                                                                        | `undefined` | Max width as CSS value (e.g. "1440px", "80ch") |
| `height`              | `string`                                                                        | `undefined` | Height as CSS value (e.g. "100vh")             |
| `gridTemplateColumns` | `string`                                                                        | `undefined` | CSS grid-template-columns (triggers grid mode) |
| `gridTemplateRows`    | `string`                                                                        | `undefined` | CSS grid-template-rows (triggers grid mode)    |
| `gridTemplateAreas`   | `string`                                                                        | `undefined` | CSS grid-template-areas (triggers grid mode)   |
| `gridArea`            | `string`                                                                        | `undefined` | CSS grid-area for child placement              |
| `elevated`            | `boolean`                                                                       | `undefined` | Apply elevation styling (box shadow)           |

## Spacing Values

Spacing props (`gap`, `padding`, `paddingBlock`, `paddingInline`) accept any number as a multiplier of the base spacing unit (4px):

```tsx
<Box padding={4} />   // 16px (4 × 4px)
<Box gap={2} />       // 8px (2 × 4px)
<Box padding={100} /> // 400px - any multiplier works
```

## Default Styles

- `display: flex` (switches to `display: grid` when grid-template-\* props provided)
- `gap: 8px` (2x token)
- `border-radius: 4px` (1 token, default)

## Examples

### Basic Flexbox Container

```tsx
<Box direction="column" gap={4} padding={6}>
  <div>Child 1</div>
  <div>Child 2</div>
</Box>
```

### Centered Content

```tsx
<Box alignItems="center" justifyContent="center" padding={4}>
  <Logo />
</Box>
```

### Space Between Items

```tsx
<Box justifyContent="between" padding={4}>
  <span>Left</span>
  <span>Right</span>
</Box>
```

### With Background Color

```tsx
<Box background="primary" padding={4}>
  <span style={{ color: "white" }}>Primary background</span>
</Box>
```

### Border Radius

```tsx
// Numeric scale border radius
<Box borderRadius={1}>1 (4px, default)</Box>
<Box borderRadius={2}>2 (8px)</Box>
<Box borderRadius={3}>3 (12px)</Box>

// Special values
<Box borderRadius="circle">Perfect circle (9999px)</Box>
```

### Corner Shape

```tsx
// Control corner shape style (CSS corner-shape property)
<Box borderRadius={2} cornerShape="round">Standard rounded corners (default)</Box>
<Box borderRadius={2} cornerShape="scoop">Inward curves</Box>
<Box borderRadius={2} cornerShape="bevel">Cut corners</Box>
<Box borderRadius={2} cornerShape="notch">Inverse bevels</Box>
<Box borderRadius={2} cornerShape="squircle">iOS-style superellipse</Box>
```

### Elevation

```tsx
// Apply elevation styling (box shadow)
<Box elevated padding={4}>
  Elevated box with shadow
</Box>

// Combine with elevation background
<Box elevated background="elevation" padding={4}>
  Elevated surface
</Box>
```

### Card Alias

The `Card` alias is a pre-configured elevated Box with the elevation background:

```tsx
// Card automatically has background="elevation" and elevated
<Card padding={4}>Card content with elevation styling</Card>
```

### Container Alias

The `Container` alias is a pre-configured Box for page-level centering with max-width:

```tsx
// Container has width="100%", maxWidth="1440px", and paddingInline={6}
<Container>Centered page content with max-width constraint</Container>
```

### Logical Padding (Block/Inline)

```tsx
<Box paddingBlock={8} paddingInline={4}>
  Vertical: 32px, Horizontal: 16px
</Box>
```

### CSS Grid Layout

Box automatically switches to CSS Grid when `gridTemplateColumns`, `gridTemplateRows`, or `gridTemplateAreas` is provided:

```tsx
// Simple column grid
<Box gridTemplateColumns="1fr 1fr 1fr" gap={4}>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</Box>

// Fixed + flexible columns
<Box gridTemplateColumns="200px 1fr 100px" gap={4}>
  <div>Sidebar</div>
  <div>Main</div>
  <div>Aside</div>
</Box>

// Named grid areas
<Box
  gridTemplateAreas="'header header' 'sidebar main' 'footer footer'"
  gridTemplateColumns="200px 1fr"
  gridTemplateRows="auto 1fr auto"
  gap={4}
>
  <Box gridArea="header">Header</Box>
  <Box gridArea="sidebar">Sidebar</Box>
  <Box gridArea="main">Main Content</Box>
  <Box gridArea="footer">Footer</Box>
</Box>
```

Note: `gridArea` can be used on any Box (it doesn't trigger grid mode) - it's for placing children within a parent grid.

### Polymorphic Rendering

```tsx
<Box as="section" padding={6}>
  Renders as a section element
</Box>

<Box as="nav" gap={4}>
  Renders as a nav element
</Box>
```

## Semantic HTML Aliases

Pre-configured aliases for semantic HTML elements:

```tsx
// All aliases accept the same props as Box
<Section paddingBlock={8}>...</Section>  // <section>
<Article padding={6}>...</Article>        // <article>
<Header padding={4}>...</Header>          // <header>
<Footer padding={4}>...</Footer>          // <footer>
<Aside padding={4}>...</Aside>            // <aside>
<Nav padding={4}>...</Nav>                // <nav>
```

### Semantic Layout Example

```tsx
<Box direction="column">
  <Header padding={4} justifyContent="between" background="primary">
    <Logo />
    <nav>...</nav>
  </Header>
  <Box direction="row">
    <Aside padding={4} direction="column">
      Sidebar
    </Aside>
    <Article padding={6} direction="column">
      Main content
    </Article>
  </Box>
  <Footer padding={4} justifyContent="center">
    © 2025
  </Footer>
</Box>
```

## CSS Variable Pattern

Box uses private CSS custom properties for token-based spacing. Default values are set at the React prop level:

```tsx
// Defaults set as prop defaults
export const Box = ({ gap = 2, padding }: BoxProps) => {
  // CSS vars passed via inline style
  const cssVars = { '--_gap': gap };
  if (padding !== undefined) cssVars['--_pa'] = padding;
```

```css
/* CSS module calculates from tokens */
.root {
  --_pa: initial; /* Reset to prevent inheritance */
  --_gap: initial;
  gap: calc(var(--dxy-spacing-base) * var(--_gap));
  padding: calc(var(--dxy-spacing-base) * var(--_pa, 0));
}
```

This pattern ensures:

- Spacing values are constrained to design tokens
- Nested Box components don't inherit spacing from parents
- CSS calculations stay in stylesheets, not JavaScript
- Default values are explicit and visible in React props

## Accessibility

- Uses semantic HTML elements via `as` prop or semantic aliases
- Supports keyboard navigation where applicable
- No ARIA attributes required - relies on semantic HTML

## File Structure

```
Box/
├── index.ts           # Component exports
├── Box.tsx            # Main component + aliases
├── Box.unit.tsx       # Unit tests
├── Box.stories.tsx    # Storybook stories
├── Box.module.css     # CSS modules styles
└── Box.llm.md         # This file
```
