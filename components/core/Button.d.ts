import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Token-driven button. Re-themes with the active trend-variant class.
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual weight. primary = accent fill, secondary = surface, ghost = text only. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export function Button(props: ButtonProps): JSX.Element;
