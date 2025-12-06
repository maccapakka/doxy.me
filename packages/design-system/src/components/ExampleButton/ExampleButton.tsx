"use client";

import { ReactNode } from "react";
import styles from "./ExampleButton.module.css";

export interface ExampleButtonProps {
  /** The content to display inside the button */
  children: ReactNode;
  /** The visual variant of the button */
  variant?: "primary" | "secondary" | "outline";
  /** The size of the button */
  size?: "small" | "medium" | "large";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const ExampleButton = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className,
}: ExampleButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

