# hicons

**Hugo plugin to add [Lucide](https://lucide.dev/icons/) SVG icons without bloated layout templates**  

`hicons` scans your Hugo layouts for icon usage and automatically generates or updates a Hugo partial (`icons.html`) with SVGs from Lucide. This eliminates the need for manually writing huge `if-else` blocks for each icon.

---

## Features

- Auto-detect icons used in Hugo layouts.
- Pull SVGs from Lucide icons library.
- Merge with existing `icons.html` partial; preserves manually added icons.
- Supports `layouts/partials/icons.html` or `layouts/_partials/icons.html`.
- Creates `_partials/icons.html` if none exist.
- Adds Hugo `$classes` support for Tailwind or custom classes.

---

## Installation

### Global install:

```bash
npm install -g hicons
````

### Or use with `npx`:

```bash
npx hicons
```

---

## How It Works

1. `hicons` scans all your Hugo layout files:

```go
layouts/**/*.html
```

2. Looks for partial calls like:

```go
{{ partial "icons.html" (dict "name" "mail" "class" "w-6 h-6 text-sky-500") }}
```

3. Extracts the icon `name` (e.g., `mail`) and fetches the SVG from Lucide.
4. Adds the SVG to your Hugo partial `icons.html` or `_partials/icons.html`.
5. Merges new icons while keeping existing icons intact.

---

## Using in Hugo Layouts

1. **Call the icon partial anywhere in your layout:**

```go
{{ partial "icons.html" (dict "name" "mail" "class" "w-6 h-6 text-sky-500") }}
```

2. **Parameters:**

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `name`    | The Lucide icon name (e.g., `mail`, `heart`, `award`)        |
| `class`   | Optional CSS classes to style the SVG (Tailwind recommended) |

3. **Example in layout:**

```go
<header>
  {{ partial "icons.html" (dict "name" "mail" "class" "w-6 h-6 text-sky-500") }}
  <h1>Contact Us</h1>
</header>
```

This will output the Lucide `mail` icon SVG with your classes applied.

---

## Finding Icon Names in Lucide

1. Visit the [Lucide Icons](https://lucide.dev/icons/) official website.
2. Browse or search the icon you want.
3. Click the icon card.
4. **Copy the Component Name** from the “Copy Component Name” button — this is the exact name `hicons` uses for the `name` parameter in Hugo.

**Example:**

* Icon: ✉ Mail
* Copy Component Name: `Mail` → use lowercase `mail` in Hugo:

```go
{{ partial "icons.html" (dict "name" "mail") }}
```

* Icon: ❤️ Heart → `heart`
* Icon: 🏆 Award → `award`

> Tip: All names are case-insensitive in `hicons`, but use **lowercase** for consistency.

---

## Icon Size, Stroke, and Classes

* All icons default to **24x24** and `stroke="currentColor"`.
* You can adjust size or color with Tailwind classes in `class`:

```go
{{ partial "icons.html" (dict "name" "heart" "class" "w-8 h-8 text-red-500") }}
```

---

## Partial File Location

`hicons` supports:

1. `layouts/partials/icons.html`
2. `layouts/_partials/icons.html`

* If neither exists, it will **create `_partials/icons.html`** automatically.
* Running `hicons` multiple times **merges new icons** instead of overwriting existing ones.

---

## Running `hicons`

### Basic run:

```bash
npx hicons
```

* Scans all layouts for new icons.
* Updates `icons.html` partial with missing icons.

### Global installation:

```bash
npm install -g hicons
hicons
```

---

## Example Layout Usage

```go
<section class="features">
  <div class="feature">
    {{ partial "icons.html" (dict "name" "award" "class" "w-6 h-6 text-yellow-400") }}
    <h2>Top Achievement</h2>
  </div>

  <div class="feature">
    {{ partial "icons.html" (dict "name" "sparkles" "class" "w-6 h-6 text-pink-500") }}
    <h2>New Feature</h2>
  </div>
</section>
```

This will automatically pull `award` and `sparkles` SVGs from Lucide into your Hugo partial.

---

## Notes

* Always use the **Lucide “Copy Component Name”** for icon names.
* You can safely run `hicons` multiple times; it will **merge icons** instead of overwriting.
* Supports Tailwind, custom classes, and multiple partial paths.

---

## License

MIT © OLIMIAH
