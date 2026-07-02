# UI Pattern Library

A curated collection of reusable UI patterns built on the Jayden Design System tokens.
Each file is a self-contained HTML page with a theme switcher — open in browser, pick a trend, copy the HTML.

## How to use

1. Open any `.html` file in your browser
2. Cycle through themes with the dropdown to see how patterns render across trends
3. Copy the HTML for any pattern into your own project
4. All patterns read semantic tokens (`--bg`, `--surface`, `--accent`, `--text`, `--muted`, `--border`) — they re-theme automatically

## Pattern files

| File | Contents |
|------|----------|
| `hero-sections.html` | 4 hero layouts: centered, split, editorial, minimal |
| `card-patterns.html` | 4 card layouts: 3-col features, 2-col image cards, 4-col stats, testimonials |
| `nav-bars.html` | 4 nav patterns: standard, right-aligned, centered, glass floating |
| `cta-footers.html` | 2 CTA patterns + 2 footer patterns |

## Adding new patterns

Each pattern in a file is wrapped in:

```html
<section class="pattern">
  <div class="pattern-label">NN · Pattern name</div>
  <div class="container">
    <!-- pattern HTML -->
  </div>
</section>
```

Rules:
- Use semantic tokens only — no raw hex, no hardcoded colors
- Test across at least 2 themes before committing
- Include real content — no "Lorem ipsum"
- Patterns should be 15-30 lines of HTML each
