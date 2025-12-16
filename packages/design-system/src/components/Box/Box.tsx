"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";

import cx from "classnames";

import styles from "./Box.module.css";

/** Props for the Box component */
export interface BoxProps {
  /** Allow any additional props */
  [key: string]: unknown;
  /** Align items on the cross axis */
  alignItems?: AlignItems;
  /** Align self on the cross axis */
  alignSelf?: PlaceSelf;
  /** The element type to render as (default: "div") */
  as?: ElementType;
  /** Aspect ratio (CSS value, e.g., "16/9", "1", "4/3") */
  aspectRatio?: string;
  /** Backdrop filter CSS value (e.g., "blur(50px)", "blur(10px) saturate(180%)") */
  backdropFilter?: string;
  /** Background color from design tokens */
  background?: BackgroundColor;
  /** Background image URL */
  backgroundImage?: string;
  /** Background position (CSS value, e.g., "center", "top left", "50% 50%") */
  backgroundPosition?: string;
  /** Background size (CSS value, e.g., "cover", "contain", "100px 200px") */
  backgroundSize?: string;
  /** Border radius from design tokens or special values (default: 1) */
  borderRadius?: BorderRadius;
  /** The content to display inside the Box */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Corner shape style (default: "round") */
  cornerShape?: CornerShape;
  /** Flex direction */
  direction?: FlexDirection;
  /** Apply elevation styling (box shadow) */
  elevated?: boolean;
  /** Gap between children (multiplier of 4px, default: 2 = 8px) */
  gap?: number;
  /** Grid area for placement in parent grid (CSS grid-area value) */
  gridArea?: string;
  /** Grid template areas (CSS grid-template-areas value, triggers grid display) */
  gridTemplateAreas?: string;
  /** Grid template columns (CSS grid-template-columns value, triggers grid display) */
  gridTemplateColumns?: string;
  /** Grid template rows (CSS grid-template-rows value, triggers grid display) */
  gridTemplateRows?: string;
  /** Height as any CSS value (e.g., "300px", "50%", "100vh", "auto") */
  height?: string;
  /** Justify content on the main axis */
  justifyContent?: JustifyContent;
  /** Justify self on the main axis */
  justifySelf?: PlaceSelf;
  /** Margin top (multiplier of 4px) */
  marginTop?: number;
  /** Max width as any CSS value (e.g., "1440px", "80ch") */
  maxWidth?: string;
  /** Opacity value (0-1, standard CSS) */
  opacity?: number;
  /** Padding on all sides (multiplier of 4px) */
  padding?: number;
  /** Padding on block axis / vertical (multiplier of 4px) */
  paddingBlock?: number;
  /** Padding on inline axis / horizontal (multiplier of 4px) */
  paddingInline?: number;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Width as any CSS value (e.g., "300px", "50%", "100vh", "auto") */
  width?: string;
}

/** Align items values (CSS values) */
type AlignItems = "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

/** Valid background color tokens */
type BackgroundColor =
  | "accent"
  | "accent-bold"
  | "accent-subtle"
  | "black"
  | "critical"
  | "critical-bold"
  | "critical-subtle"
  | "elevation"
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

/** Border radius values */
type BorderRadius = 1 | 2 | 3 | "circle";

/** Corner shape values */
type CornerShape = "bevel" | "notch" | "round" | "scoop" | "squircle";

/** Flex direction values */
type FlexDirection = "column" | "column-reverse" | "row" | "row-reverse";

/** Justify content values (CSS values) */
type JustifyContent =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-around"
  | "space-between"
  | "space-evenly";

/** Justify/align self values (CSS values) */
type PlaceSelf = "center" | "flex-end" | "flex-start" | "stretch";

/**
 * Box is a foundational layout primitive for flexbox layouts.
 *
 * It supports polymorphic rendering via the `as` prop, token-based spacing,
 * and flexbox alignment properties.
 */
export const Box = ({
  alignItems,
  alignSelf,
  as: Component = "div",
  aspectRatio,
  backdropFilter,
  background,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  borderRadius = 1,
  children,
  className,
  cornerShape = "round",
  direction,
  elevated,
  gap = 2,
  gridArea,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  height,
  justifyContent,
  justifySelf,
  marginTop,
  maxWidth,
  opacity,
  padding,
  paddingBlock,
  paddingInline,
  style,
  width,
  ...rest
}: BoxProps) => {
  const isGridContainer =
    gridTemplateRows !== undefined ||
    gridTemplateColumns !== undefined ||
    gridTemplateAreas !== undefined;

  const rootClasses = cx(
    styles.root,
    isGridContainer && styles.grid,
    elevated && styles.elevated,
    styles[
      borderRadius === "circle"
        ? "borderRadiusCircle"
        : `borderRadius${String(borderRadius)}`
    ],
    className
  );

  return (
    <Component
      className={rootClasses}
      style={
        {
          "--_ai": alignItems,
          "--_ar": aspectRatio,
          "--_as": alignSelf,
          "--_bf": backdropFilter,
          "--_bg": background ? `var(--dxy-color-${background})` : undefined,
          "--_bgi": backgroundImage ? `url(${backgroundImage})` : undefined,
          "--_bgp": backgroundPosition,
          "--_bgs": backgroundSize,
          "--_cs": cornerShape,
          "--_dir": direction,
          "--_ga": gridArea,
          "--_gap": gap,
          "--_gta": gridTemplateAreas,
          "--_gtc": gridTemplateColumns,
          "--_gtr": gridTemplateRows,
          "--_h": height,
          "--_jc": justifyContent,
          "--_js": justifySelf,
          "--_mt": marginTop,
          "--_mw": maxWidth,
          "--_op": opacity,
          "--_pa": padding,
          "--_px": paddingInline,
          "--_py": paddingBlock,
          "--_w": width,
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
export const Nav = (props: Omit<BoxProps, "as">) => <Box as="nav" {...props} />;
export const Main = (props: Omit<BoxProps, "as">) => (
  <Box as="main" {...props} />
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
export const Card = (props: Omit<BoxProps, "background">) => (
  <Box
    background="elevation"
    borderRadius={2}
    elevated
    padding={4}
    width="100%"
    {...props}
  />
);
export const Container = (
  props: Omit<BoxProps, "justifySelf" | "paddingInline" | "width">
) => (
  <Box
    justifySelf="center"
    maxWidth="1440px"
    paddingInline={6}
    width="100%"
    {...props}
  />
);
