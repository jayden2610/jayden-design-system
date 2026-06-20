import React from "react";

/**
 * Button — token-driven action control.
 * Reads --accent / --text / --surface / --border from the active trend-variant class,
 * so it re-themes automatically. Three weights: primary (accent fill), secondary
 * (surface), ghost (text only). Pill radius per the system's button rule.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconBefore = null,
  iconAfter = null,
  onClick,
  type = "button",
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 13, padding: "8px 16px" },
    md: { fontSize: 15, padding: "12px 24px" },
    lg: { fontSize: 17, padding: "15px 32px" },
  };

  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--bg, var(--paper, #fff))",
      border: "1px solid transparent",
    },
    secondary: {
      background: "var(--surface, rgba(255,255,255,0.08))",
      color: "var(--text, var(--ink))",
      border: "1px solid var(--border, rgba(127,127,127,0.25))",
    },
    ghost: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid transparent",
    },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-sans, system-ui)",
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: "var(--radius-full, 999px)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform 0.2s var(--ease-out, cubic-bezier(0.16,1,0.3,1)), opacity 0.2s, filter 0.2s",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.filter = "brightness(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.filter = "none";
      }}
      {...rest}
    >
      {iconBefore}
      {children}
      {iconAfter}
    </button>
  );
}
