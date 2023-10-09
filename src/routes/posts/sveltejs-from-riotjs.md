---
title: Svelte JS from Riot JS
author: Brian Takita
date: 07/03/17 20:30
---
Creating Web Components/Web Apps has never been more pleasurable.
It's out with the old & in with the new. I converted my client's project to use Svelte JS from Riot JS. This post highlights some considerations why I chose Svelte & a a sample web component using Svelte.

<!--more-->

<a href="https://svelte.technology" target="_blank">Svelte JS</a> is a build-time isomorphic library that utilizes a transpilation process to build completely self-contained web components.

<a href="http://riotjs.com/" target="_blank">Riot JS</a> is a runtime isomorphic component library.

I recently <a href="/posts/monorepo-static-sites-using-sveltejs-rollup-bash" target="_blank">converted this site</a> to svelte from metalsmith, which is a static site generator.

While it's easy to get stuck into the rat race of endless technological upgrades & porting to the latest hyped piece of tech&hellip;

# Svelte JS has Staying Power

## Performance & Memory Usage

Despite being a young library, svelte <a href="https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts-results/table.html" target="_blank">does quite well</a> on krausest/js-framework-benchmark for Performance & Memory Usage. That's because, Svelte JS generates optimal javascript while not having the overhead of a runtime library. It's also going to have an advantage in page load time due to not requiring a runtime library to be loaded.

## HTML-based Components
 
HTML is the lingua franca of the world wide web. HTML the lowest common denominator (developers, designers, non-technical) can work with. With Svelte, the HTML file is converted to be a Component. Components can use other Components.

I feel confident that I will continue to use Svelte for a long time. Since it's design is simple & well thought out (all of my use cases were supported with elegance), I don't expect to have upgrade pains that plague some of the larger frameworks out there.

## APIs

Svelte's api idioms are well thought out. Development flow was coherent natural during the port from Riot.

For each of my professional clients, I use a monorepo using the <a href="https://github.com/ctx-core/ctx-core" target="_blank">ctx-core</a> toolkit. ctx-core has supporting architecture of a dependency injected ctx (context), agents, & build tools.

## Example Component

Here's an example component (Dossier__Search). It is composed of a search box, search results, & the detail of the selected person.

On the top is the html of the component & below is the javascript behavior.

This example highlights the following features:
  
  * properties
  * computed properties
  * helpers
  * methods
  * two-way binding
  * sub components
  
You can <a href="https://svelte.technology/guide" target="_blank">read more about the features of svelte</a>.
