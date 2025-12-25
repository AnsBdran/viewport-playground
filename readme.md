# Viewport Playground 📱💻

A powerful, isolated viewport testing component for Svelte 5. Test your application's responsiveness in real-time with curated device presets, all within your own development environment.

## Key Features

- 🛡️ **Style Isolation**: Built with `all: initial` and scoped CSS to ensure the playground UI is never affected by your application's global styles.
- 📱 **Device Presets**: Includes common mobile, tablet, and desktop viewports.
- 🔄 **Orientation Toggle**: Switch between portrait and landscape modes instantly.
- 🖼️ **Flexible Wrapping**: Choose between `iframe` (perfect for true isolation) or `div` wrappers.
- 🌐 **URL Sync**: Test different routes of your application directly from the toolbar.

## Installation

```bash
npm install viewport-playground
```

## Usage

Wrap your application (usually in `+layout.svelte`) with the `ViewportPlayground` component.

```svelte
<script>
    import { ViewportPlayground, enterPlayground } from 'viewport-playground';
</script>

<ViewportPlayground>
    <!-- Your App Content -->
    {@render children()}
    
    <!-- Button to launch the playground -->
    <button onclick={enterPlayground} class="your-btn">
        Open Viewport Playground
    </button>
</ViewportPlayground>
```

## API Reference

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `wrapper` | `'iframe' \| 'div'` | `'iframe'` | The element used to wrap your application content. |
| `defaultOpen` | `boolean` | `false` | Whether the playground should be active by default. |
| `disabled` | `boolean` | `false` | Disable the playground functionality. |
| `url` | `string` | `'/'` | Initial URL for the iframe (if using iframe wrapper). |

### Exported Functions

- `enterPlayground()`: Activates the playground view.
- `exitPlayground()`: Deactivates the playground view.

## Style Isolation

The component is designed to be completely independent. We use a combination of:
- `all: initial` on root elements to block inheritance from the parent app.
- Scoped CSS to prevent internal styles from leaking out.
- Explicit `box-sizing: border-box` and standard font stacks for consistent look and feel.

---

Built with ❤️ by [AnsBdran](https://github.com/AnsBdran)
