# Avatar

A component for displaying user profile images or initials fallback in a circular frame.

## Import

```tsx
import { Avatar } from "@doxy/design-system/components";
// or
import { Avatar } from "@doxy/design-system/components/Avatar";
```

## Usage

```tsx
<Avatar src="/user.jpg" initials="JD" />
```

## Props

| Prop        | Type                              | Default     | Description                             |
| ----------- | --------------------------------- | ----------- | --------------------------------------- |
| `src`       | `string`                          | `undefined` | Image URL to display                    |
| `initials`  | `string`                          | `undefined` | Fallback text when no image is provided |
| `size`      | `number`                          | `6`         | Size multiplier (4px base, so 6 = 24px) |
| `color`     | `ColorVariant`                    | `"primary"` | Background color for initials fallback  |
| `status`    | `"online" \| "away" \| "offline"` | `undefined` | User presence status indicator          |
| `className` | `string`                          | `undefined` | Additional CSS classes                  |
| `style`     | `CSSProperties`                   | `undefined` | Additional inline styles                |

### ColorVariant

Available color values: `primary`, `primary-subtle`, `primary-bold`, `secondary`, `secondary-subtle`, `secondary-bold`, `accent`, `accent-subtle`, `accent-bold`, `warning`, `warning-subtle`, `warning-bold`, `positive`, `positive-subtle`, `positive-bold`, `critical`, `critical-subtle`, `critical-bold`, `neutral`, `neutral-subtle`, `neutral-bold`, `black`, `white`

### Status Indicator

| Status    | Color            | Animation       |
| --------- | ---------------- | --------------- |
| `online`  | Green (positive) | Pulse animation |
| `away`    | Yellow (warning) | Static          |
| `offline` | Gray (neutral)   | Static          |

## Examples

### Basic Initials

```tsx
<Avatar initials="JD" />
```

### With Image

```tsx
<Avatar src="/profile.jpg" initials="JD" />
```

### Custom Size

Size is a multiplier of 4px. Default is 6 (24px).

```tsx
<Avatar initials="SM" size={6} />  {/* 24px */}
<Avatar initials="MD" size={10} /> {/* 40px */}
<Avatar initials="LG" size={14} /> {/* 56px */}
```

### Custom Color

```tsx
<Avatar initials="AC" color="accent" />
<Avatar initials="CR" color="critical" />
<Avatar initials="PS" color="positive" />
```

### Image with Fallback

Always provide initials as fallback in case the image fails to load:

```tsx
<Avatar src="/user.jpg" initials="JD" color="accent" />
```

### Status Indicator

Show user presence with the status prop:

```tsx
<Avatar initials="JD" status="online" />  {/* Green with pulse animation */}
<Avatar initials="JD" status="away" />    {/* Yellow, static */}
<Avatar initials="JD" status="offline" /> {/* Gray, static */}
```

Status works with both images and initials:

```tsx
<Avatar src="/user.jpg" initials="JD" status="online" />
```

## Accessibility

- The Avatar renders as a `<div>` element
- Add `aria-label` for meaningful description when used as standalone
- When used alongside user names, the avatar is decorative

## Implementation Notes

- Uses CSS `background-image` for images (not `<img>` element)
- Background color shows through when no image is provided
- Initials text is white and centered
- Circular shape via `border-radius: 50%`
- Status indicator is positioned bottom-right with a white border
- Online status has a pulse animation, away and offline are static

## File Structure

```
Avatar/
├── index.ts                # Component exports
├── Avatar.tsx              # Main component
├── Avatar.unit.tsx         # Unit tests
├── Avatar.stories.tsx      # Storybook stories
├── Avatar.module.css       # CSS modules styles
└── Avatar.llm.md           # This file
```
