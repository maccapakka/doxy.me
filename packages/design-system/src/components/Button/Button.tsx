"use client";

import { cloneElement, type ReactElement, type ReactNode } from "react";
import cx from "classnames";

import styles from "./Button.module.css";

/** Button color options */
type ButtonColor = "action" | "positive" | "critical" | "neutral" | "inherit";

/** Button sizes */
type ButtonSize = "small" | "medium" | "large";

/** Button variants */
type ButtonVariant = "solid" | "outline" | "ghost";

/** Props for the Button component */
export interface ButtonProps {
  /** The content to display inside the button (optional for icon-only buttons) */
  children?: ReactNode;
  /** The color of the button (default: "action") */
  color?: ButtonColor;
  /** The visual variant of the button (default: "solid") */
  variant?: ButtonVariant;
  /** The size of the button (default: "medium") */
  size?: ButtonSize;
  /** Icon element to display before the label */
  icon?: ReactElement<{ className?: string }>;
  /** Whether the button should take full width of its container */
  fullWidth?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label for icon-only buttons */
  "aria-label"?: string;
  /** Whether to remove built-in hover, active, and focus visual styles (advanced) */
  unstyledStates?: boolean;
}

/**
 * Button is a clickable element for user actions.
 *
 * Supports 4 colors (action, positive, critical, neutral), 2 variants (solid, outline),
 * 3 sizes (small, medium, large), optional icons, icon-only mode, and full-width mode.
 */
export const Button = ({
  children,
  color = "action",
  variant = "solid",
  size = "medium",
  icon,
  fullWidth = false,
  disabled = false,
  onClick,
  className,
  "aria-label": ariaLabel,
  unstyledStates = false,
}: ButtonProps) => {
  const isIconOnly = !children && !!icon;

  const rootClasses = cx(
    styles.root,
    styles[color],
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    isIconOnly && styles.iconOnly,
    unstyledStates && styles.unstyledStates,
    className
  );

  return (
    <button
      aria-label={ariaLabel}
      className={rootClasses}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {icon && cloneElement(icon, { className: styles.icon })}
      {children}
    </button>
  );
};
