# Box

A foundational layout primitive component for flexbox layouts. Box is the building block for creating layouts with consistent spacing using design tokens.

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

| Prop             | Type                                                                            | Default     | Description                              |
| ---------------- | ------------------------------------------------------------------------------- | ----------- | ---------------------------------------- |
| `as`             | `ElementType`                                                                   | `"div"`     | The HTML element to render               |
| `children`       | `ReactNode`                                                                     | `undefined` | The content to display inside the Box    |
| `className`      | `string`                                                                        | `undefined` | Additional CSS classes                   |
| `direction`      | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'`                        | `undefined` | Flex direction                           |
| `alignItems`     | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'`                       | `undefined` | Align items on cross axis                |
| `alignSelf`      | `'start' \| 'center' \| 'end' \| 'stretch' \| 'baseline'`                       | `undefined` | Align self on cross axis                 |
| `justifyContent` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'`             | `undefined` | Justify content on main axis             |
| `justifySelf`    | `'start' \| 'center' \| 'end' \| 'stretch'`                                     | `undefined` | Justify self on main axis                |
| `gap`            | `number`                                                                        | `2` (8px)   | Gap between children (multiplier of 4px) |
| `padding`        | `number`                                                                        | `undefined` | Padding on all sides (multiplier of 4px) |
| `paddingBlock`   | `number`                                                                        | `undefined` | Vertical padding (multiplier of 4px)     |
| `paddingInline`  | `number`                                                                        | `undefined` | Horizontal padding (multiplier of 4px)   |
| `background`     | `'primary' \| 'secondary' \| 'accent' \| 'warning' \| 'positive' \| 'critical'` | `undefined` | Background color from design tokens      |

## Spacing Values

Spacing props (`gap`, `padding`, `paddingBlock`, `paddingInline`) accept any number as a multiplier of the base spacing unit (4px):

```tsx
<Box padding={4} />   // 16px (4 × 4px)
<Box gap={2} />       // 8px (2 × 4px)
<Box padding={100} /> // 400px - any multiplier works
```

## Default Styles

- `display: flex`
- `gap: 8px` (2x token)
- `border-radius: 8px` (2x token)

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

### Logical Padding (Block/Inline)

```tsx
<Box paddingBlock={8} paddingInline={4}>
  Vertical: 32px, Horizontal: 16px
</Box>
```

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
