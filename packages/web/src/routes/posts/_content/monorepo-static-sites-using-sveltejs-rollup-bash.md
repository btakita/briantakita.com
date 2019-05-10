---
title: Monorepo Static Sites using Svelte JS, Rollup, ctx-core, & Bash
author: Brian Takita
date: 6/7/17 5:30
---

BrianTakita.com is now built using a technology chain consisting of <a href="https://svelte.technology" target="_blank">SvelteJS</a>, <a href="https://rollupjs.org/" target="_blank">RollupJS</a>, <a href="https://github.com/ctx-core/ctx-core" target="_blank">ctx-core</a>, & good ol' Bash.

You can see the source in the <a href="https://github.com/btakita/briantakita.com" target="_blank">briantakita.com</a> repo.

<hr class="more"/>

I wanted a static site generator that felt like building a custom app, with a <a href="https://www.wikiwand.com/en/Domain-driven_design" target="_blank">domain-driven naming conventions</a>, approachable custom build scripts, & isomorphic javascript.

This site was build using existing solutions such as <a href="http://jekyllrb.com/" target="_blank">Jekyll</a>, <a href="http://wintersmith.io/" target="_blank">Wintersmith</a>, & <a href="http://www.metalsmith.io/" target="_blank">Metalsmith</a>. When using each of these libraries, I felt the desire to strip away the non-essential code & to have things done my way.

Some features that I found essential include:

* a development server with watch/build scripts
* generate static html files to serve from github.io
* isomorphic javascript

With these techs, the following is possible:

* static file builds
* server side rendering
* client side rendering

This means the entire html page can be rendered using svelte on the server (or static file) & svelte on the client side (for dynamic components). This means there's no need for other rendering libraries like pug. Only svelte & raw html strings are needed to gain all of the features of dynamic isomorphic components!

With this retooling, I will begin working on components to enhance the experience of authoring & reading meaning-dense information.

Stay tuned&hellip;