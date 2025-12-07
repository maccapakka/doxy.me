# Text

A foundational typography primitive component for displaying text with consistent styling from design tokens.

## Import

```tsx
import { Text } from "@doxy/design-system/components";
// or
import { Text } from "@doxy/design-system/components/Text";

// Semantic aliases
import { Title, Heading, Caption } from "@doxy/design-system/components";
```

## Usage

```tsx
<Text variant="body-1" color="primary">
  Hello world
</Text>
```

## Props

| Prop         | Type                                                                                                                                        | Default     | Description                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------ |
| `as`         | `ElementType`                                                                                                                               | `"span"`    | The HTML element to render           |
| `children`   | `ReactNode`                                                                                                                                 | `undefined` | The content to display               |
| `className`  | `string`                                                                                                                                    | `undefined` | Additional CSS classes               |
| `variant`    | `'title-1' \| 'title-2' \| 'title-3' \| 'featured-1' \| 'featured-2' \| 'featured-3' \| 'body-1' \| 'body-2' \| 'caption-1' \| 'caption-2'` | `"body-1"`  | Typography variant from tokens       |
| `color`      | `'primary' \| 'secondary' \| 'accent' \| 'warning' \| 'positive' \| 'critical' \| 'neutral' \| 'inherit'`                                   | `"inherit"` | Text color from design tokens        |
| `align`      | `'left' \| 'center' \| 'right' \| 'justify'`                                                                                                | `undefined` | Text alignment                       |
| `decoration` | `'underline' \| 'line-through' \| 'none'`                                                                                                   | `undefined` | Text decoration                      |
| `transform`  | `'uppercase' \| 'lowercase' \| 'capitalize' \| 'none'`                                                                                      | `undefined` | Text transform (case)                |
| `italic`     | `boolean`                                                                                                                                   | `undefined` | Render text in italic                |
| `truncate`   | `boolean`                                                                                                                                   | `undefined` | Single-line truncation with ellipsis |
| `maxLines`   | `number`                                                                                                                                    | `undefined` | Multi-line truncation (line-clamp)   |
| `wrap`       | `'balance' \| 'pretty' \| 'wrap' \| 'nowrap'`                                                                                               | `undefined` | Text wrapping behavior               |

## Typography Variants

Variants are based on a 1.2 typescale ratio with body-1 (16px) as the base:

| Variant      | Size  | Line Height | Weight | Use Case          |
| ------------ | ----- | ----------- | ------ | ----------------- |
| `title-1`    | ~48px | 1.1         | Bold   | Page titles       |
| `title-2`    | ~40px | 1.1         | Bold   | Section titles    |
| `title-3`    | ~33px | 1.1         | Bold   | Subsection titles |
| `featured-1` | ~28px | 1.3         | Normal | Large subtitles   |
| `featured-2` | ~23px | 1.3         | Normal | Medium subtitles  |
| `featured-3` | ~19px | 1.3         | Normal | Small subtitles   |
| `body-1`     | 16px  | 1.6         | Normal | Default body text |
| `body-2`     | ~13px | 1.6         | Normal | Smaller body text |
| `caption-1`  | ~11px | 1.4         | Normal | Small captions    |
| `caption-2`  | ~9px  | 1.4         | Normal | Smallest captions |

## Examples

### Basic Text

```tsx
<Text>Default body text</Text>
<Text variant="title-1">Large title</Text>
```

### Colored Text

```tsx
<Text color="critical">Error message</Text>
<Text color="positive">Success message</Text>
<Text variant="caption-1" color="secondary">Muted caption</Text>
```

### Polymorphic Rendering

```tsx
<Text as="h1" variant="title-1">
  Renders as h1 element
</Text>

<Text as="p" variant="body-1">
  Renders as paragraph element
</Text>

<Text as="label" variant="body-2">
  Renders as label element
</Text>
```

## Semantic Aliases

Pre-configured aliases for code semantics and readability:

```tsx
// Title - for page/section titles
<Title variant="title-1">Page Title</Title>

// Heading - for section headings
<Heading variant="featured-1">Section Heading</Heading>

// Caption - for captions, labels, metadata
<Caption variant="caption-1" color="secondary">Last updated: Dec 2025</Caption>
```

All aliases accept the same props as Text and are purely semantic - they don't change any default values.

### Typography Hierarchy Example

```tsx
<Box direction="column" gap={4}>
  <Title as="h1" variant="title-1">
    Welcome to Our Platform
  </Title>
  <Text variant="featured-1" color="secondary">
    Discover amazing features and capabilities.
  </Text>
  <Heading as="h2" variant="title-3">
    Getting Started
  </Heading>
  <Text variant="body-1">Follow these simple steps to begin your journey.</Text>
  <Caption variant="caption-1" color="secondary">
    Last updated: December 2025
  </Caption>
</Box>
```

### Form Labels

```tsx
<Box direction="column" gap={1}>
  <Text as="label" variant="body-2">
    Email Address
  </Text>
  <input type="email" />
  <Caption variant="caption-1" color="secondary">
    We'll never share your email.
  </Caption>
</Box>
```

### Error States

```tsx
<Text variant="featured-2" color="critical">
  Error: Invalid credentials
</Text>
<Caption variant="caption-1" color="critical">
  Password must be at least 8 characters.
</Caption>
```

### Text Alignment

```tsx
<Text align="center">Centered text</Text>
<Text align="right">Right-aligned text</Text>
<Text align="justify">Justified text spreads evenly</Text>
```

### Text Decoration

```tsx
<Text decoration="underline">Underlined text</Text>
<Text decoration="line-through">Strikethrough text</Text>
```

### Text Transform

```tsx
<Text transform="uppercase">uppercase text</Text>
<Text transform="lowercase">LOWERCASE TEXT</Text>
<Text transform="capitalize">capitalize each word</Text>
```

### Italic Text

```tsx
<Text italic>Italic text</Text>
<Text variant="featured-1" italic>Featured italic text</Text>
```

### Truncation

```tsx
// Single-line truncation
<Text truncate>
  This very long text will be truncated with an ellipsis...
</Text>

// Multi-line truncation (3 lines max)
<Text maxLines={3}>
  This longer text will be clamped to three lines before showing an ellipsis.
</Text>
```

### Text Wrap

```tsx
// Balance line lengths (great for headings)
<Title variant="title-2" wrap="balance">
  A Balanced Heading That Wraps Nicely
</Title>

// Avoid orphans at paragraph end
<Text wrap="pretty">
  This paragraph avoids orphan words.
</Text>

// Prevent wrapping
<Text wrap="nowrap">This text will not wrap.</Text>
```

### Combined Styles

```tsx
<Text transform="uppercase" decoration="underline" color="primary">
  Uppercase underlined primary text
</Text>
<Text italic color="secondary" align="center">
  Centered italic secondary text
</Text>
```

## Accessibility

- Use the `as` prop to render semantic HTML elements (h1-h6, p, label, etc.)
- Color should not be the only indicator of meaning - pair with text or icons
- Ensure sufficient color contrast between text and background

## File Structure

```
Text/
├── index.ts           # Component exports
├── Text.tsx           # Main component + aliases
├── Text.unit.tsx      # Unit tests
├── Text.stories.tsx   # Storybook stories
├── Text.module.css    # CSS modules styles
└── Text.llm.md        # This file
```
