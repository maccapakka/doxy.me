"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import cx from "classnames";

import styles from "./Text.module.css";

/** Valid typography variants */
type TextVariant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "featured-1"
  | "featured-2"
  | "featured-3"
  | "body-1"
  | "body-2"
  | "caption-1"
  | "caption-2";

/** Valid text color tokens */
type TextColor =
  | "primary"
  | "primary-subtle"
  | "primary-bold"
  | "secondary"
  | "secondary-subtle"
  | "secondary-bold"
  | "accent"
  | "accent-subtle"
  | "accent-bold"
  | "warning"
  | "warning-subtle"
  | "warning-bold"
  | "positive"
  | "positive-subtle"
  | "positive-bold"
  | "critical"
  | "critical-subtle"
  | "critical-bold"
  | "neutral"
  | "neutral-subtle"
  | "neutral-bold"
  | "black"
  | "white";

/** Text alignment values */
type TextAlign = "left" | "center" | "right" | "justify";

/** Text decoration values */
type TextDecoration = "underline" | "line-through" | "none";

/** Text transform values */
type TextTransform = "uppercase" | "lowercase" | "capitalize" | "none";

/** Text wrap values */
type TextWrap = "balance" | "pretty" | "wrap" | "nowrap";

/** Text weight values */
type TextWeight = "normal" | "semibold" | "bold";

/** Weight mapping to CSS variable values */
const weightMap: Record<TextWeight, string> = {
  normal: "var(--dxy-type-weight-normal)",
  semibold: "var(--dxy-type-weight-medium)",
  bold: "var(--dxy-type-weight-bold)",
};

/** Props for the Text component */
export interface TextProps {
  /** The element type to render as (default: "span") */
  as?: ElementType;
  /** The content to display */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Typography variant (default: "body-1") */
  variant?: TextVariant;
  /** Text color from design tokens */
  color?: TextColor;
  /** Text alignment */
  align?: TextAlign;
  /** Text decoration (underline, line-through, none) */
  decoration?: TextDecoration;
  /** Text transform (uppercase, lowercase, capitalize, none) */
  transform?: TextTransform;
  /** Render text in italic */
  italic?: boolean;
  /** Truncate text with ellipsis (single line) */
  truncate?: boolean;
  /** Maximum number of lines before truncating (multi-line clamp) */
  maxLines?: number;
  /** Text wrapping behavior */
  wrap?: TextWrap;
  /** Font weight override (normal, semibold, bold) */
  weight?: TextWeight;
  /** Allow any additional props */
  [key: string]: unknown;
}

/**
 * Text is a foundational typography primitive.
 *
 * It supports polymorphic rendering via the `as` prop, typography variants
 * from design tokens, and semantic color options.
 */
export const Text = ({
  as: Component = "span",
  children,
  className,
  variant = "body-1",
  color,
  align,
  decoration,
  transform,
  italic,
  truncate,
  maxLines,
  wrap,
  weight,
  ...rest
}: TextProps) => {
  const rootClasses = cx(
    styles.root,
    styles[variant],
    truncate && styles.truncate,
    maxLines && styles.lineClamp,
    className
  );

  return (
    <Component
      className={rootClasses}
      style={
        {
          "--_clr": color ? `var(--dxy-color-${color})` : undefined,
          "--_ta": align,
          "--_td": decoration,
          "--_tt": transform,
          "--_fs": italic ? "italic" : undefined,
          "--_tw": wrap,
          "--_lc": maxLines,
          "--_fw": weight ? weightMap[weight] : undefined,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
};

// Semantic aliases
export const Title = (props: TextProps) => <Text {...props} />;
export const Heading = (props: TextProps) => <Text {...props} />;
export const Caption = (props: TextProps) => <Text {...props} />;
