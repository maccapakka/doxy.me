"use client";

import type { CSSProperties } from "react";
import cx from "classnames";

import styles from "./Avatar.module.css";

/** Valid color tokens */
type ColorVariant =
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

/** User presence status */
type StatusVariant = "online" | "away" | "offline";

/** Props for the Avatar component */
export interface AvatarProps {
  /** Image URL to display */
  src?: string;
  /** Fallback text when no image is provided */
  initials?: string;
  /** Size multiplier (multiplier of 4px, default: 6 = 24px) */
  size?: number;
  /** Background color variant from design tokens (used when no image) */
  color?: ColorVariant;
  /** User presence status indicator */
  status?: StatusVariant;
  /** Additional CSS classes */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Allow pass-through HTML attributes */
  [key: string]: unknown;
}

/**
 * Avatar is a component for displaying user images or initials fallback.
 *
 * When an image `src` is provided, it displays the image in a circular frame.
 * When no image is available, it shows colored initials.
 */
export const Avatar = ({
  src,
  initials,
  size = 6,
  color = "primary",
  status,
  className,
  style,
  ...rest
}: AvatarProps) => {
  const rootClasses = cx(styles.root, className);

  return (
    <div
      className={rootClasses}
      style={
        {
          "--_size": size,
          "--_src": src ? `url(${src})` : undefined,
          "--_bg": `var(--dxy-color-${color})`,
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
