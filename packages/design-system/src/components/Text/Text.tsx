"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";

import cx from "classnames";

import styles from "./Text.module.css";

/** Text alignment values */
type TextAlign = "center" | "justify" | "left" | "right";

/** Valid text color tokens */
type TextColor =
  | "accent"
  | "accent-bold"
  | "accent-subtle"
  | "black"
  | "critical"
  | "critical-bold"
  | "critical-subtle"
  | "neutral"
  | "neutral-bold"
  | "neutral-subtle"
  | "positive"
  | "positive-bold"
  | "positive-subtle"
  | "primary"
  | "primary-bold"
  | "primary-subtle"
  | "secondary"
  | "secondary-bold"
  | "secondary-subtle"
  | "warning"
  | "warning-bold"
  | "warning-subtle"
  | "white";

/** Text decoration values */
type TextDecoration = "line-through" | "none" | "underline";

/** Text transform values */
type TextTransform = "capitalize" | "lowercase" | "none" | "uppercase";

/** Valid typography variants */
type TextVariant =
  | "body-1"
  | "body-2"
  | "caption-1"
  | "caption-2"
  | "featured-1"
  | "featured-2"
  | "featured-3"
  | "title-1"
  | "title-2"
  | "title-3";

/** Text weight values */
type TextWeight = "bold" | "normal" | "semibold";

/** Text wrap values */
type TextWrap = "balance" | "nowrap" | "pretty" | "wrap";

/** Weight mapping to CSS variable values */
const weightMap: Record<TextWeight, string> = {
  bold: "var(--dxy-type-weight-bold)",
  normal: "var(--dxy-type-weight-normal)",
  semibold: "var(--dxy-type-weight-medium)",
};

/** Props for the Text component */
export interface TextProps {
  /** Allow any additional props */
  [key: string]: unknown;
  /** Text alignment */
  align?: TextAlign;
  /** The element type to render as (default: "span") */
  as?: ElementType;
  /** The content to display */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Text color from design tokens */
  color?: TextColor;
  /** Text decoration (underline, line-through, none) */
  decoration?: TextDecoration;
  /** Apply elevation styling (box shadow) */
  elevated?: boolean;
  /** Render text in italic */
  italic?: boolean;
  /** Maximum number of lines before truncating (multi-line clamp) */
  maxLines?: number;
  /** Text transform (uppercase, lowercase, capitalize, none) */
  transform?: TextTransform;
  /** Truncate text with ellipsis (single line) */
  truncate?: boolean;
  /** Typography variant (default: "body-1") */
  variant?: TextVariant;
  /** Font weight override (normal, semibold, bold) */
  weight?: TextWeight;
  /** Text wrapping behavior */
  wrap?: TextWrap;
}

/**
 * Text is a foundational typography primitive.
 *
 * It supports polymorphic rendering via the `as` prop, typography variants
 * from design tokens, and semantic color options.
 */
export const Text = ({
  align,
  as: Component = "span",
  children,
  className,
  color,
  decoration,
  elevated,
  italic,
  maxLines,
  transform,
  truncate,
  variant = "body-1",
  weight,
  wrap,
  ...rest
}: TextProps) => {
  const rootClasses = cx(
    styles.root,
    styles[variant],
    truncate && styles.truncate,
    maxLines && styles.lineClamp,
    elevated && styles.elevated,
    className
  );

  return (
    <Component
      className={rootClasses}
      style={
        {
          "--_clr": color ? `var(--dxy-color-${color})` : undefined,
          "--_fs": italic ? "italic" : undefined,
          "--_fw": weight ? weightMap[weight] : undefined,
          "--_lc": maxLines,
          "--_ta": align,
          "--_td": decoration,
          "--_tt": transform,
          "--_tw": wrap,
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
