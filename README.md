# ♾️ Hicons for Hugo SVG Icons Support

***Hugo Icons plugin for easy-to-use SVG icons from open-source vendors Lucide and Feather — no bloated layouts.***

`hicons` scans your Hugo layouts for icon usage and automatically generates or updates your `icons.html` partial with SVGs from Lucide.

🔥 **New Workflow:** Hicons now has a **minimal, night-mode friendly website** for Hugo layout-ready code: [https://hicons.pages.dev](https://hicons.pages.dev)

---

## 🚀 Features

* ⚡ Auto-detect icons used across Hugo layouts.
* 🧠 Automatically add minified SVGs to your Hugo partials.
* 🧩 Merge icons into your `layouts/partials/icons.html` or `_partials/icons.html`.
* 🛡 Keeps existing icons safe (no overwrites).
* 🎨 Supports `$class` for Tailwind or custom CSS classes.
* 👀 **New:** `npx hicons --watch & hugo server -D` can be added to dev scripts for live updates.
* 🌐 **Dedicated icon website:** search, click, and copy layout-ready code instantly.

---

## 🌐 Dedicated Hicons Icon Layout Website

The refreshed Hicons website embraces a calmer, more minimal interface with full light and dark mode support. Search is instant, copy feedback is clear, and the layout stays focused on the icons you need.

Steps:

1. Visit [https://hicons.pages.dev](https://hicons.pages.dev)
2. Use the search bar or the curated tag chips to filter icons (night mode is stored locally between visits)
3. Click any icon tile to copy the Hugo-ready partial call instantly
4. Paste the code into your Hugo layout template
5. Run `npx hicons` (or `--watch` mode) — your Hugo icons partial updates automatically

### Example Copied Code

```go
{{ partial "icons.html" (dict "name" "sparkles" "class" "w-6 h-6 text-pink-500") }}
```

✅ No manual SVG copy. No bloated `if-else` blocks. Just clean, Hugo-ready code — now in a distraction-free UI.

---

## 💻 Installation

### Global install:

```bash
npm install -g hicons
```

### Or run instantly with `npx`:

```bash
npx hicons
```

---

## ⚙️ How It Works

1. Scans all Hugo layout files:

   ```
   layouts/**/*.html
   ```
2. Finds icon partial calls:

   ```go
   {{ partial "icons.html" (dict "name" "mail" "class" "w-6 h-6") }}
   ```
3. Extracts icon names (e.g., `mail`, `heart`, `sparkles`).
4. Fetches SVGs from the Lucide library.
5. Updates your Hugo partial (`icons.html`), merging new icons while keeping old ones intact.

---

## 🏃 Commands

### ▶️ One-Time Run

```bash
npx hicons
```

Generates/updates `icons.html` once.

---

### 👀 Watch/Dev Mode

```bash
npx hicons --watch
```

Or with Hugo dev server:

```bash
npx hicons --watch & hugo server -D
```

`hicons` will:

* Watch all `layouts/**/*.html` files
* Rebuild the partial whenever icons are added or modified
* Merge new icons safely
* Skip duplicates automatically

Perfect for development with `hugo server`.

---

## 🧩 Example Combined Workflow

Add this to your `package.json`:

```json
{
  "scripts": {
    "dev": "npx hicons --watch & hugo server -D",
    "build": "npx hicons && hugo --minify"
  }
}
```

Run:

```bash
npm run dev
```

* Icons auto-refresh instantly while editing layouts
* Hugo live server reloads automatically

---

## 🪄 Icon Styling

All icons default to:

* **24×24 size**
* `stroke="currentColor"`

You can fully customize with Tailwind or custom classes:

```go
{{ partial "icons.html" (dict "name" "heart" "class" "w-8 h-8 text-red-500") }}
```

---

## 📁 Partial File Location

`hicons` supports:

1. `layouts/partials/icons.html`
2. `layouts/_partials/icons.html`

If neither exists, `hicons` will **automatically create `_partials/icons.html`**.

---

## 🧠 Internals

* Uses Lucide’s official SVG set
* Keeps your existing partial intact
* Merges icons safely
* Prevents duplicates
* Logs new and missing icons clearly
* Persists light/dark preference locally for a consistent browsing experience

---

## 🧪 Optional / Planned Flags

| Flag                  | Description                                         |
| --------------------- | --------------------------------------------------- |
| `--watch`             | Watch mode: auto-regenerate icons on layout changes |
| `--quiet` *(planned)* | Suppress logs except for errors                     |
| `--clean` *(planned)* | Remove icons no longer used in layouts              |
| `--stats` *(planned)* | Show how many icons were added or removed           |

---

## 🪪 License

MIT © [OLIMIAH](https://olimah.pages.dev)