# Viewport playground

## Usage

```ts
import {ViewportPlayground, enterPlayground} from 'viewport-playground'

<ViewportPlayground>
    // a button to enter the dev mode, can be nested anywhere in the app
    <button onclick={enterPlayground}>enter playground</button>
    // ...The rest of your app
</ViewportPlayground>
```

## Props

wrapper: `iframe` => default | 'div'.
