# ExampleButton

A versatile button component for the Doxy design system.

## Import

```tsx
import { ExampleButton } from "@doxy/design-system/components";
// or
import { ExampleButton } from "@doxy/design-system/components/ExampleButton";
```

## Usage

```tsx
<ExampleButton
  variant="primary"
  size="medium"
  onClick={() => console.log("clicked")}
>
  Click me
</ExampleButton>
```

## Props

| Prop        | Type                                    | Default     | Description                              |
| ----------- | --------------------------------------- | ----------- | ---------------------------------------- |
| `children`  | `ReactNode`                             | required    | The content to display inside the button |
| `variant`   | `"primary" \| "secondary" \| "outline"` | `"primary"` | The visual variant of the button         |
| `size`      | `"small" \| "medium" \| "large"`        | `"medium"`  | The size of the button                   |
| `disabled`  | `boolean`                               | `false`     | Whether the button is disabled           |
| `onClick`   | `() => void`                            | `undefined` | Click handler                            |
| `className` | `string`                                | `undefined` | Additional CSS classes                   |

## Variants

- **primary**: Blue background with white text, ideal for primary actions
- **secondary**: Gray background with dark text, ideal for secondary actions
- **outline**: Transparent background with blue border, ideal for tertiary actions

## Sizes

- **small**: Compact size (6px/12px padding, 12px font)
- **medium**: Default size (10px/20px padding, 14px font)
- **large**: Larger size (14px/28px padding, 16px font)

## Accessibility

- Uses native `<button>` element for keyboard accessibility
- Supports `disabled` state with proper ARIA attributes
- Has `type="button"` to prevent accidental form submissions

## Examples

### Basic Usage

```tsx
<ExampleButton>Default Button</ExampleButton>
```

### With Variant and Size

```tsx
<ExampleButton variant="secondary" size="large">
  Large Secondary Button
</ExampleButton>
```

### Disabled State

```tsx
<ExampleButton disabled>Cannot Click</ExampleButton>
```

### With Click Handler

```tsx
<ExampleButton onClick={() => alert("Hello!")}>Alert Button</ExampleButton>
```

## File Structure

```
ExampleButton/
├── index.ts                    # Component exports
├── ExampleButton.tsx           # Main component
├── ExampleButton.unit.tsx      # Unit tests
├── ExampleButton.stories.tsx   # Storybook stories
├── ExampleButton.module.css    # CSS modules styles
└── ExampleButton.llm.md        # This file
```
