# ♾️ Hicons

**Hugo plugin to add [Lucide](https://lucide.dev/icons/) SVG icons automatically — no bloated template logic, no manual SVG copy-paste.**

`hicons` scans your Hugo layouts for icon usage and auto-generates or updates your `icons.html` partial with SVGs from Lucide.

🔥 **New Workflow:** Hicons now has a **dedicated website for layout-ready code**: [https://hicons.pages.dev](https://hicons.pages.dev)

---

## 🚀 Features

* ⚡ Auto-detect icons used across Hugo layouts.
* 🧠 Automatically fetch SVGs from Lucide.
* 🧩 Merge icons into your `layouts/partials/icons.html` or `_partials/icons.html`.
* 🛡 Keeps existing icons safe (no overwrite).
* 🎨 Supports `$class` for Tailwind or custom CSS classes.
* 👀 **New:** `--watch` mode for real-time updates.
* 🌐 **Dedicated icon website:** search, click, copy layout-ready code instantly — no bloated template files.

---

## 🌐 Dedicated Icon Layout Website

Forget going to Lucide to look for icons manually. Now:

1. Visit [https://hicons.pages.dev](https://hicons.pages.dev)
2. Search the icon you want (e.g., `mail`, `sparkles`)
3. Click the icon or the 📋 **Copy** button
4. Paste the ready-to-use Hugo layout code directly into your template
5. Run `npx hicons` (or keep `--watch` running) — icons partial updates automatically

### Example Copied Code:

```go
{{ partial "icons.html" (dict "name" "sparkles" "class" "w-6 h-6 text-pink-500") }}
```

✅ No manual SVG copy, no bloated `if-else` blocks, just clean Hugo-ready code.

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
5. Updates your Hugo partial (`icons.html`), merging new icons and keeping old ones intact.

---

## 🏃 Commands

### ▶️ One-Time Run

```bash
npx hicons
```

Generates/updates `icons.html` once.

---

### 👀 Watch Mode (Live Updates)

```bash
npx hicons --watch
```

`hicons` will:

* Watch all `layouts/**/*.html` files
* Rebuild the partial whenever you add/modify icons
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

---

## 🧪 Optional / Planned Flags

| Flag                  | Description                                         |
| --------------------- | --------------------------------------------------- |
| `--watch`             | Watch mode: auto-regenerate icons on layout changes |
| `--quiet` *(planned)* | Suppress logs except errors                         |
| `--clean` *(planned)* | Remove icons not used in layouts anymore            |
| `--stats` *(planned)* | Show how many icons were added or removed           |

---

## 🪪 License

MIT © [OLIMIAH](https://olimah.pages.dev)
