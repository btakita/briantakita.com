---
title: Svelte JS from Riot JS
author: Brian Takita
date: 07/03/17 20:30
---
Creating Web Components/Web Apps has never been more pleasurable.
It's out with the old & in with the new. I converted my client's project to use Svelte JS from Riot JS. This post highlights some considerations why I chose Svelte & a a sample web component using Svelte.

<hr class="more"/>

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

```html
<div class="Dossier__Search">
  <input type="text" bind:value="query__search"/>
  
  <ul class="search__people" class="{{class__search__people}}">
    {{#each search__people as person}}
      <li on:click="click__search__person(event, person)">
      {{person.name}}
      </li>
    {{/each}}
  </ul>
  
  <div class="{{class__person}}">
    <h1>{{possessive__name(person.name)}} Dossier</h1>
    
    <Detail__Person ctx="{{ctx}}"></Detail__Person>
    
    <h2>Family</h2>
    {{#each family as person}}
      <div class="person">
        <h2>{{name}}</h2>
        <div class="bio">{{{bio}}}</div>
      </div>
    {{/each}}
    
    <h2>Collegues</h2>
    {{#each collegues as person}}
      <div class="person">
        <h2>{{name}}</h2>
        <div class="bio">{{{bio}}}</div>
      </div>
    {{/each}}
  </div>
</div>

  
<script type="buble">
  import {possessive__name} from 'names/lib'
  import {search__people__agent} from 'people/agent'
  import Detail__Person from 'people/Detail__Person.html'
  export default {
    oncreate,
    ondestroy,
    computed: {
      family: (person, people) =>
        people.filter(_person => person.in__family(_person)),
      collegues: (person, people) =>
        people.filter(_person => person.in__collegues(_person)),
      person: ctx => ctx.person,
      people: ctx => ctx.people,
      class__person: person => !!person,
      class__search__people: search__people =>
        search__people && search__people.length
        ? 'visible'
        : '',
    },
    helpers: {
      possessive__name
    },
    methods: {
      click__search__person
    },
    components: {
      Detail__Person
    }
  }
  function oncreate() {
    const C = this
        , ctx = C.get('ctx')
    search__people__agent(ctx)
    C.observe('query__search', observe__query__search)
    ctx.search__people__agent.on('change', onchange__search__people)
    C.unbind = unbind
    function observe__query__search(query__search) {
      ctx.search__people__agent.query(query__search)
    }
    function onchange__search__people() {
      const {search__people} = ctx
      C.set({search__people})
    }
    function unbind() {
      ctx.search__people__agent.off('change', onchange__search__people)
    }
  }
  function ondestroy() {
    this.unbind()
  }
  function click__search__person(e, person) {
    this.set({person})
  }
</script>
```
