import React from "react";

/**
 * Card — token-driven surface container.
 * Reads --surface / --border / --shadow / --radius so it re-themes per active scope
 * (the real `tymos` brand, or any trend variant). Soft warm shadow, capped radius,
 * 1px low-alpha border — never a harsh edge. `interactive` adds the lift-on-hover the
 * Tymos task/KPI cards use.
 */
export function Card({
  children,
  interactive = false,
  padding = 20,
  as: Tag = "div",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    background: "var(--surface, #fff)",
    border: "1px solid var(--border, rgba(127,127,127,0.16))",
    borderRadius: "var(--radius-md, 12px)",
    boxShadow: hover && interactive
      ? "var(--shadow-2, 0 4px 24px rgba(80,50,20,0.14))"
      : "var(--shadow, 0 2px 12px rgba(80,50,20,0.10))",
    color: "var(--text, var(--ink, #2e1f0d))",
    padding,
    transition: "box-shadow 0.2s, transform 0.2s, border-color 0.18s",
    transform: hover && interactive ? "translateY(-1px)" : "none",
    ...style,
  };
  return (
    <Tag
      style={base}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
