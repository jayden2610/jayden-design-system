Badge — DM-Mono pill for status, priority, and metric chips. The Tymos task-card vocabulary.

```jsx
<Badge tone="high">high</Badge>
<Badge tone="accent">50m focus</Badge>
<Badge tone="low" solid>done</Badge>
```

Tones map to semantic tokens: `accent` (brand), `high` (red), `medium` (yellow), `low` (green), `info` (blue), `muted`. Default is a soft low-alpha tint; `solid` fills with the hue and uses `--on-accent` text. Always monospace, always 100px radius.
