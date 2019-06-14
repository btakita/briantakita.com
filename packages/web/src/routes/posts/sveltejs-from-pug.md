---
title: Svelte JS from Pug
author: Brian Takita
date: 07/22/17 05:00
---

```js exec route
```

Now it's time to implement server side rendering (SSR) using SvelteJS.

On my current project, I will be migrating from <a href="https://pugjs.org" target="_blank">pug</a> to <a href="https://svelte.technology" target="_blank">sveltejs</a>. The key concepts are <a href="https://svelte.technology/guide#server-side-rendering" target="_blank">Server Side Rendering</a>, <a href="https://github.com/sveltejs/svelte/pull/649" target="_blank">Hydration</a>, & client/server architectural options.

<!--more-->

SvelteJS allows one to render in dom & server side environments. SSR is simpler than DOM rendering since Svelte does not worry about `oncreate`, `ondestroy`, or `events`, or `methods`. `data` & `computed properties` still work to create the properties and `helpers` are also available.

Svelte SSR is fully capable of replacing any server side html/xml templating system. For my current project, I replaced PUG.

Here's a relatively full-featured example of the Isomorphic Svelte components that utilize hydration.

One the server side, the `__SSR` component (`Index__SSR.html`) wraps the content (`Index.html`) component. On the dom, the `Index.html` component is rehydrated when loaded.

This allows html to be generated on the server side ()enabling HTTP caching), while allowing dynamic behavior to be `rehydrated` in the dom.

All of this happens solely in Svelte components, creating a unified architecture for both server side & dom rendering.
