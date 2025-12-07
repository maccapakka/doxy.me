"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import cx from "classnames";

import styles from "./Box.module.css";

/** Valid background color tokens */
type BackgroundColor =
  | "primary"
  | "secondary"
  | "accent"
  | "warning"
  | "positive"
  | "critical"
  | "neutral";

/** Flex direction values */
type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

/** Align items values (CSS values) */
type AlignItems = "flex-start" | "center" | "flex-end" | "stretch" | "baseline";

/** Justify content values (CSS values) */
type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

/** Justify/align self values (CSS values) */
type PlaceSelf = "flex-start" | "center" | "flex-end" | "stretch";

/** Props for the Box component */
export interface BoxProps {
  /** The element type to render as (default: "div") */
  as?: ElementType;
  /** The content to display inside the Box */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Flex direction */
  direction?: FlexDirection;
  /** Align items on the cross axis */
  alignItems?: AlignItems;
  /** Align self on the cross axis */
  alignSelf?: PlaceSelf;
  /** Justify content on the main axis */
  justifyContent?: JustifyContent;
  /** Justify self on the main axis */
  justifySelf?: PlaceSelf;
  /** Gap between children (multiplier of 4px, default: 2 = 8px) */
  gap?: number;
  /** Padding on all sides (multiplier of 4px) */
  padding?: number;
  /** Padding on block axis / vertical (multiplier of 4px) */
  paddingBlock?: number;
  /** Padding on inline axis / horizontal (multiplier of 4px) */
  paddingInline?: number;
  /** Background color from design tokens */
  background?: BackgroundColor;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Allow any additional props */
  [key: string]: unknown;
}

/**
 * Box is a foundational layout primitive for flexbox layouts.
 *
 * It supports polymorphic rendering via the `as` prop, token-based spacing,
 * and flexbox alignment properties.
 */
export const Box = ({
  as: Component = "div",
  children,
  className,
  direction,
  alignItems,
  alignSelf,
  justifyContent,
  justifySelf,
  gap = 2,
  padding,
  paddingBlock,
  paddingInline,
  background,
  style,
  ...rest
}: BoxProps) => {
  const rootClasses = cx(
    styles.root,
    background && styles[background],
    className
  );

  return (
    <Component
      className={rootClasses}
      style={
        {
          "--_gap": gap,
          "--_pa": padding,
          "--_px": paddingInline,
          "--_py": paddingBlock,
          "--_dir": direction,
          "--_ai": alignItems,
          "--_as": alignSelf,
          "--_jc": justifyContent,
          "--_js": justifySelf,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </Component>
  );
};

// Semantic HTML aliases
export const Section = (props: Omit<BoxProps, "as">) => (
  <Box as="section" {...props} />
);
export const Article = (props: Omit<BoxProps, "as">) => (
  <Box as="article" {...props} />
);
export const Header = (props: Omit<BoxProps, "as">) => (
  <Box as="header" {...props} />
);
export const Footer = (props: Omit<BoxProps, "as">) => (
  <Box as="footer" {...props} />
);
export const Aside = (props: Omit<BoxProps, "as">) => (
  <Box as="aside" {...props} />
);

// Layout aliases
export const Stack = (props: Omit<BoxProps, "direction">) => (
  <Box direction="column" {...props} />
);
export const Cluster = (props: Omit<BoxProps, "direction">) => (
  <Box direction="row" {...props} />
);
export const Placeholder = (
  props: Omit<BoxProps, "background" | "padding">
) => <Box background="neutral" padding={4} {...props} />;
