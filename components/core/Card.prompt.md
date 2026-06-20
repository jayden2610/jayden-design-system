Card — token-driven surface container. Use for any panel, list item, or KPI tile; pass `interactive` for clickable cards that should lift on hover.

```jsx
<Card interactive padding={18}>
  <h3>Best Day Ever</h3>
  <p>92m · 4 sessions</p>
</Card>
```

Reads `--surface / --border / --shadow / --shadow-2 / --radius-md`. Re-themes automatically under `class="tymos"` or any trend-variant scope. `as` changes the tag (e.g. `as="li"`). Keep radius ≤ 20px and lean on the warm soft shadow — never a heavy drop shadow or hard border.
