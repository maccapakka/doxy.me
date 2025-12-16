"use client";

import type { CSSProperties, ReactElement } from "react";

import cx from "classnames";

import styles from "./Icon.module.css";

/** Props for the Icon component */
export interface IconProps {
  /** Allow pass-through HTML attributes */
  [key: string]: unknown;
  /** Additional CSS classes */
  className?: string;
  /** Color variant from design tokens */
  color?: ColorVariant;
  /** Size multiplier (multiplier of 4px, default: 6 = 24px) */
  size?: number;
  /** Additional inline styles */
  style?: CSSProperties;
  /** The SVG element to render */
  svg: ReactElement;
}

/** Valid color tokens */
type ColorVariant =
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

/**
 * Icon is a wrapper component for SVG icons that provides consistent sizing and coloring.
 *
 * It accepts an SVG element and applies design token-based colors and spacing-based sizes.
 */
export const Icon = ({
  className,
  color,
  size = 6,
  style,
  svg,
  ...rest
}: IconProps) => {
  const rootClasses = cx(styles.root, className);

  return (
    <div
      className={rootClasses}
      style={
        {
          "--_clr": color ? `var(--dxy-color-${color})` : undefined,
          "--_size": size,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {svg}
    </div>
  );
};
