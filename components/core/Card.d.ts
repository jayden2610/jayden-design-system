import React from "react";

/** Props for the Card surface container. */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Lift + deepen shadow on hover (Tymos task/KPI card behavior). */
  interactive?: boolean;
  /** Inner padding in px. Default 20. */
  padding?: number;
  /** Element/tag to render as. Default "div". */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
