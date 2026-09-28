# Skill: Catalog style

Read when: changing the look of, or adding a section to, a shop started from the Catalog template.

Catálogo: a well-run supply counter. Inter at tight tracking for everything, JetBrains Mono for labels, slate ink on white, bordered cards, one dark band with hazard tape.

- The look is `src/theme.css`: change a token there first (colours, fonts, radius, spacing), then a single rule. This template's tokens: `--shop-bg: #ffffff`, `--shop-ink: #0f172a`, `--shop-font-body: 'Inter', sans-serif`, `--shop-font-display: 'Inter', sans-serif`, `--shop-radius-button: 8px`, `--shop-radius-card: 12px`.
- `--shop-accent` is the merchant's brand colour on a live shop. Never build a large panel or a background on it; big tinted surfaces use this file's own colours.
- A new section takes the look from the tokens. Style it with a `section[data-section-type="<type>"]` rule in `src/theme.css`, in the voice of the rules already there.
- Copy stays generic for the vertical (Large catalogs, parts and supplies) and promises nothing the merchant may not keep: no delivery times, return windows, warranties, discounts, scarcity or ratings.
