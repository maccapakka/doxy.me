"use client";

import type { CSSProperties } from "react";

import cx from "classnames";

import styles from "./Avatar.module.css";

/** Props for the Avatar component */
export interface AvatarProps {
  /** Allow pass-through HTML attributes */
  [key: string]: unknown;
  /** Additional CSS classes */
  className?: string;
  /** Background color variant from design tokens (used when no image) */
  color?: ColorVariant;
  /** Fallback text when no image is provided */
  initials?: string;
  /** Size multiplier (multiplier of 4px, default: 6 = 24px) */
  size?: number;
  /** Image URL to display */
  src?: string;
  /** User presence status indicator */
  status?: StatusVariant;
  /** Additional inline styles */
  style?: CSSProperties;
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

/** User presence status */
type StatusVariant = "away" | "offline" | "online";

/**
 * Avatar is a component for displaying user images or initials fallback.
 *
 * When an image `src` is provided, it displays the image in a circular frame.
 * When no image is available, it shows colored initials.
 */
export const Avatar = ({
  className,
  color = "primary",
  initials,
  size = 6,
  src,
  status,
  style,
  ...rest
}: AvatarProps) => {
  const rootClasses = cx(styles.root, className);

  return (
    <div
      className={rootClasses}
      style={
        {
          "--_bg": `var(--dxy-color-${color})`,
          "--_size": size,
          "--_src": src ? `url(${src})` : undefined,
          ...style,
        } as CSSProperties
      }
      {...rest}
    >
      {!src && initials}
      {status && <span className={styles.status} data-status={status} />}
    </div>
  );
};
