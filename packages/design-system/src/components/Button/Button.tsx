"use client";

import cx from "classnames";
import { cloneElement, type ReactElement, type ReactNode } from "react";

import styles from "./Button.module.css";

/** Props for the Button component */
export interface ButtonProps {
  /** Accessible label for icon-only buttons */
  "aria-label"?: string;
  /** The content to display inside the button (optional for icon-only buttons) */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** The color of the button (default: "action") */
  color?: ButtonColor;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button should take full width of its container */
  fullWidth?: boolean;
  /** Icon element to display before the label */
  icon?: ReactElement<{ className?: string }>;
  /** Click handler */
  onClick?: () => void;
  /** The size of the button (default: "medium") */
  size?: ButtonSize;
  /** Whether to remove built-in hover, active, and focus visual styles (advanced) */
  unstyledStates?: boolean;
  /** The visual variant of the button (default: "solid") */
  variant?: ButtonVariant;
}

/** Button color options */
type ButtonColor = "action" | "critical" | "inherit" | "neutral" | "positive";

/** Button sizes */
type ButtonSize = "large" | "medium" | "small";

/** Button variants */
type ButtonVariant = "ghost" | "outline" | "solid";

/**
 * Button is a clickable element for user actions.
 *
 * Supports 4 colors (action, positive, critical, neutral), 2 variants (solid, outline),
 * 3 sizes (small, medium, large), optional icons, icon-only mode, and full-width mode.
 */
export const Button = ({
  "aria-label": ariaLabel,
  children,
  className,
  color = "action",
  disabled = false,
  fullWidth = false,
  icon,
  onClick,
  size = "medium",
  unstyledStates = false,
  variant = "solid",
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
