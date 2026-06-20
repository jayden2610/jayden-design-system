import React from "react";

/**
 * Badge — DM-Mono pill for status, priority, and metrics.
 * The Tymos vocabulary: 100px radius, monospace, low-alpha tinted background of a
 * semantic token. `tone` selects the hue; `soft` (default) tints, `solid` fills.
 */
export function Badge({
  children,
  tone = "accent",
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    accent: { c: "var(--accent, #7c5c3a)", bg: "var(--accent-bg, rgba(124,92,58,0.12))" },
    high:   { c: "var(--red, #b84f3a)",    bg: "rgba(184,79,58,0.12)" },
    medium: { c: "var(--yellow, #b8903a)", bg: "rgba(184,144,58,0.12)" },
    low:    { c: "var(--green, #4a8c5c)",  bg: "rgba(74,140,92,0.12)" },
    info:   { c: "var(--blue, #3a6b8c)",   bg: "rgba(58,107,140,0.12)" },
    muted:  { c: "var(--muted, #a08b75)",  bg: "var(--surface-2, rgba(127,127,127,0.10))" },
  };
  const t = tones[tone] || tones.accent;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontFamily: "var(--font-mono, ui-monospace, monospace)",
    fontSize: 10,
    letterSpacing: "0.05em",
    lineHeight: 1,
    padding: "3px 8px",
    borderRadius: "var(--radius-pill, 100px)",
    color: solid ? "var(--on-accent, #fff)" : t.c,
    background: solid ? t.c : t.bg,
    whiteSpace: "nowrap",
    ...style,
  };
  return (
    <span style={base} {...rest}>
      {children}
    </span>
  );
}
