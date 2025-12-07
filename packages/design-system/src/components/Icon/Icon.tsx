"use client";

import type { CSSProperties, ReactElement } from "react";
import cx from "classnames";

import styles from "./Icon.module.css";

/** Valid color tokens */
type ColorVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "warning"
  | "positive"
  | "critical"
  | "neutral";

/** Props for the Icon component */
export interface IconProps {
  /** The SVG element to render */
  svg: ReactElement;
  /** Size multiplier (multiplier of 4px, default: 6 = 24px) */
  size?: number;
  /** Color variant from design tokens */
  color?: ColorVariant;
  /** Additional CSS classes */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Allow pass-through HTML attributes */
  [key: string]: unknown;
}

/**
 * Icon is a wrapper component for SVG icons that provides consistent sizing and coloring.
 *
 * It accepts an SVG element and applies design token-based colors and spacing-based sizes.
 */
export const Icon = ({
  svg,
  size = 6,
  color,
  className,
  style,
  ...rest
}: IconProps) => {
  const rootClasses = cx(styles.root, color && styles[color], className);

  return (
    <div
      className={rootClasses}
      style={
        {
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
