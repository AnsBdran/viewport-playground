# Viewport playground

## Usage

```ts
import {ViewportPlayground, enter_dev_mode} from 'viewport-playground'

<ViewportPlayground>

    // a button to enter the dev mode, can be nested anywhere in the app
    <button onclick={enter_dev_mode}>enter playground</button>
    // ...The rest of your app
</ViewportPlayground>
```

## Props

wrapper: `iframe` => default | 'div'.
