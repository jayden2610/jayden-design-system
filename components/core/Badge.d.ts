import React from "react";

/** Props for the Badge pill. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Semantic hue. Default "accent". */
  tone?: "accent" | "high" | "medium" | "low" | "info" | "muted";
  /** Solid fill instead of soft tint. Default false. */
  solid?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
