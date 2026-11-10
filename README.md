# Wings Burn Away — Exit Us site

Open `index.html` in a browser (double-click or any static server). No build step.

## Storage

Reviews are saved in the browser’s `localStorage` (`wba-exit-us-reviews-v1`). They stay on that device only. The banner on the page says so.

To point the same UI at a shared backend later, change only `storage.js`:

- Keep the reviews shape: `{ [songId]: [ { user, score, notes, ts } ] }`
- Implement `getAll()` and `addReview(songId, user, score, notes)`
- Set `kind` to `"remote"` and update `label`

## Access

The splash accepts the first names Rob, Gary, Eddie, Daniel, Tony (any capitalization). This is a weak gate: the names are in the page source. See the delivery report for a stronger option.

## Files

- `index.html` — page shell
- `styles.css` — Ash Wings / Ink & Paper styles
- `data.js` — songs, links, lyrics status
- `storage.js` — storage adapter
- `app.js` — UI
- `assets/logo.jpg` — official Ash Wings logo
