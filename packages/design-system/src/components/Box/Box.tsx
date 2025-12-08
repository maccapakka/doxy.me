"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import cx from "classnames";

import styles from "./Box.module.css";

/** Valid background color tokens */
type BackgroundColor =
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
  | "white"
  | "elevation";

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

/** Border radius values */
type BorderRadius = 1 | 2 | 3 | "circle";

/** Corner shape values */
type CornerShape = "round" | "scoop" | "bevel" | "notch" | "squircle";

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
  /** Margin top (multiplier of 4px) */
  marginTop?: number;
  /** Padding on all sides (multiplier of 4px) */
  padding?: number;
  /** Padding on block axis / vertical (multiplier of 4px) */
  paddingBlock?: number;
  /** Padding on inline axis / horizontal (multiplier of 4px) */
  paddingInline?: number;
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
  /** Corner shape style (default: "round") */
  cornerShape?: CornerShape;
  /** Width as any CSS value (e.g., "300px", "50%", "100vh", "auto") */
  width?: string;
  /** Max width as any CSS value (e.g., "1440px", "80ch") */
  maxWidth?: string;
  /** Height as any CSS value (e.g., "300px", "50%", "100vh", "auto") */
  height?: string;
  /** Aspect ratio (CSS value, e.g., "16/9", "1", "4/3") */
  aspectRatio?: string;
  /** Grid template rows (CSS grid-template-rows value, triggers grid display) */
  gridTemplateRows?: string;
  /** Grid template columns (CSS grid-template-columns value, triggers grid display) */
  gridTemplateColumns?: string;
  /** Grid template areas (CSS grid-template-areas value, triggers grid display) */
  gridTemplateAreas?: string;
  /** Grid area for placement in parent grid (CSS grid-area value) */
  gridArea?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Apply elevation styling (box shadow) */
  elevated?: boolean;
  /** Opacity value (0-1, standard CSS) */
  opacity?: number;
  /** Backdrop filter CSS value (e.g., "blur(50px)", "blur(10px) saturate(180%)") */
  backdropFilter?: string;
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
  marginTop,
  padding,
  paddingBlock,
  paddingInline,
  background,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  borderRadius = 1,
  cornerShape = "round",
  width,
  maxWidth,
  height,
  aspectRatio,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  gridArea,
  style,
  elevated,
  opacity,
  backdropFilter,
  ...rest
}: BoxProps) => {
  const isGridContainer = !!(
    gridTemplateRows ||
    gridTemplateColumns ||
    gridTemplateAreas
  );

  const rootClasses = cx(
    styles.root,
    isGridContainer && styles.grid,
    elevated && styles.elevated,
    styles[
      borderRadius === "circle"
        ? "borderRadiusCircle"
        : `borderRadius${borderRadius}`
    ],
    className
  );

  return (
    <Component
      className={rootClasses}
      style={
        {
          "--_bg": background ? `var(--dxy-color-${background})` : undefined,
          "--_bgi": backgroundImage ? `url(${backgroundImage})` : undefined,
          "--_bgp": backgroundPosition,
          "--_bgs": backgroundSize,
          "--_gap": gap,
          "--_mt": marginTop,
          "--_pa": padding,
          "--_px": paddingInline,
          "--_py": paddingBlock,
          "--_dir": direction,
          "--_ai": alignItems,
          "--_as": alignSelf,
          "--_jc": justifyContent,
          "--_js": justifySelf,
          "--_cs": cornerShape,
          "--_w": width,
          "--_mw": maxWidth,
          "--_h": height,
          "--_ar": aspectRatio,
          "--_gtr": gridTemplateRows,
          "--_gtc": gridTemplateColumns,
          "--_gta": gridTemplateAreas,
          "--_ga": gridArea,
          "--_op": opacity,
          "--_bf": backdropFilter,
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
    padding={4}
    elevated
    width="100%"
    {...props}
  />
);
export const Container = (
  props: Omit<BoxProps, "width" | "paddingInline" | "justifySelf">
) => (
  <Box
    width="100%"
    maxWidth="1440px"
    paddingInline={6}
    justifySelf="center"
    {...props}
  />
);
