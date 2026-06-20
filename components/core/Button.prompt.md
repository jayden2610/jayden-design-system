Token-driven action button — use for any primary or secondary call-to-action; it reads `--accent` from the active trend-variant class so it re-themes automatically.

```jsx
<Button variant="primary" size="md" onClick={start}>Light the candle</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` (accent fill), `secondary` (surface + border), `ghost` (text only). Sizes: `sm` / `md` / `lg`. Pass `iconBefore` / `iconAfter` nodes for icons, `disabled` to dim + block. Pill radius is fixed per the system's button rule — never override it to a square.
