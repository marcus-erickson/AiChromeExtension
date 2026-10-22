# AI Command Deck

A Chrome extension that replaces the new tab page with a cyberpunk-styled launchpad for AI tools. Every new tab asks "What will you build today?" and puts your favorite AI services one click away, so reaching for an AI assistant becomes the default instead of an afterthought.

(The extension is listed in Chrome as **AI Reminder**.)

## Features

- **One-click launchpad**: a grid of cards linking to popular AI and developer tools. Links open in the current tab.
- **Live clock and date**: updates every second, using your locale.
- **Expandable "MORE_TOOLS" row**: a collapsible set of secondary links.
- **Neon terminal look**: dot-grid background, scan lines, glowing card borders, a blinking cursor, and floating particles drawn on a canvas.
- **No permissions, no tracking**: the manifest requests no permissions, and the extension stores no data and runs no analytics.

### Included links

Main grid:

| Tool | Purpose |
|------|---------|
| Claude | Thinking partner |
| ChatGPT | GPT models |
| Gemini | Google AI |
| Grok | xAI |
| Claude Design | Visual builder |
| Lovable | App builder |
| Courses | Anthropic Academy |
| Muse | AI video |
| Google | Search |
| Supabase | Database dashboard |
| Render | Hosting dashboard |
| NotebookLM | Research notes |

More tools: v0, Perplexity, Colab, Sana, Anthropic, OpenAI.

## Install (unpacked)

1. Clone or download this repository.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the repository folder.
5. Open a new tab.

## Customize

- **Add or remove a tool**: edit the `ai-card` blocks in `newtab.html` (main grid) or the `extra-btn` links (MORE_TOOLS). Copy an existing block, then change the `href`, name, description, and icon SVG.
- **Change colors and effects**: edit `styles.css`. Each card has its own class (for example `.claude`, `.supabase`) for per-brand colors.
- **Tweak particles and clock**: edit `newtab.js`.

## Project structure

```
manifest.json   Manifest V3 config, overrides the new tab page
newtab.html     Page layout and tool links
newtab.js       Clock, MORE_TOOLS toggle, particle animation
styles.css      Theme and card styling
icons/          Extension icons (16, 48, 128 px) and favicon
```

## Notes

- Built with Manifest V3.
- The page loads the Orbitron and Share Tech Mono fonts from Google Fonts, so an internet connection is needed for the intended typography. Everything else is local.
- All product names and logos belong to their respective owners. This project is not affiliated with any listed service.
