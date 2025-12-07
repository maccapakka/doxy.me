"use client";

import type { ElementType, ReactNode } from "react";
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
  | "secondary"
  | "accent"
  | "warning"
  | "positive"
  | "critical"
  | "neutral"
  | "inherit";

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
  /** Text color from design tokens (default: "inherit") */
  color?: TextColor;
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
  color = "inherit",
  ...rest
}: TextProps) => {
  const rootClasses = cx(
    styles.root,
    styles[variant],
    color !== "inherit" && styles[color],
    className
  );

  return (
    <Component className={rootClasses} {...rest}>
      {children}
    </Component>
  );
};

// Semantic aliases
export const Title = (props: TextProps) => <Text {...props} />;
export const Heading = (props: TextProps) => <Text {...props} />;
export const Caption = (props: TextProps) => <Text {...props} />;

