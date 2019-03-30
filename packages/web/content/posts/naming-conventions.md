---
title: Naming Conventions
author: Brian Takita
date: 2/27/18 16:30
description: Naming Conventions to encode the meaning & context of abstractions
---

An Abstraction name encodes the meaning & context of the abstraction. The name consists of tags that are joined together to create a name.

<a target="_blank" href="https://en.wikipedia.org/wiki/Naming_convention_(programming)
">Naming Convention (programming) (Wikipedia)</a>

## Discoverability & Unique vs Ambiguous Names

A name & tags in the name also acts identifiers to locate the usages of the abstraction in the codebase. This attribute is also known as discoverability.

<a target="_blank" href="https://en.wikipedia.org/wiki/Discoverability">Discoverability (Wikipedia)</a>

Unique & Accurate names for abstractions help discoverability. Ambiguous names hurt discoverability.

Advantages for discoverable abstractions include:

  * easy searching for an abstraction used across the codebase
  * easier refactoring (e.g. a rename refactoring is a search/replace)
  * provides a more comprehensive & accurate model of the system in one's head
  
### Ambiguous name Example — `id`

`id` fields with context are a good candidate to combine into a single tag.

Note that it's advantageous to name a field `user.user_id` instead of `user.id` because the abstraction `user_id` can be located though a search wherever it is used. The convention held by `ActiveRecord` in `Ruby on Rails` makes it difficult to find usages of the `user_id` abstraction, particularly when it is used in objects. In the `user` object, `user_id` is named `id`, which is ambiguous with all the other `*_id` fields used in all of the other relations. For reason of unambiguous distinction, it is advantageous to always use the same form for `user_id`.

## Top-down & Bottom-up Design

<a target="_blank" href="https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design">Top-down and bottom-up design (Wikipedia)</a>

One can communicate & gain design feedback on a system design by thinking in terms of top-down & bottom-up design. The typical naming convention in software systems is to have a top-down convention where the leftmost part of the name is the most global, becoming more local when moving rightward.

One can also think bottom-up by moving from the right to the left in a name. Thinking both top-down & bottom-up is often a useful exercise in understanding & discerning the naming of an abstraction.

## Underscore_casing

Underscore casing separates each word in a tag with an underscore `_`. Underscores are also used to separate tags when multiple tags are combined to form a name.

## CamelCasing

Camel casing is often used for variable & class names. While that works to identify a name tag, there are ambiguities when composing multiple tags together to form a name.

For example, the casing may be changed.

`const btoaEncodeURIComponentUserJson = btoa(encodeURIComponent(JSON.stringify(user)))`

Composing a camelCased tag with underscores removes this ambiguity:

`const btoa_encodeURIComponent_user_json = btoa(encodeURIComponent(JSON.stringify(user)))`

## Double__Underscore__Casing (`__`)

Double Underscores are used to aggregate a new chain of tags.

### Bottom-up naming

If the typical use case is top-down naming (`global_context_mid_context_local`), to achieve bottom-up naming, one could use `__` to join each tag (`local__mid_context__global_context`).

### Event Handler Names - `__click` as shorthand for `onclick`

A name that begins with `__` can be though of as an unassigned local tag followed by contextual tags. This technique can be used to name event handlers.

### Context Object Names - `__user` as shorthand for `ctx__user`

At times, it may be useful to have a ctx object representing a group of abstractions related to a certain tag.

```js
const __user =
        { user_name: 'Joe',
          user_id: 44,
          user: {user_id: 44, user_name: 'Joe'},
          user_orders_transactions:
            [ { order_transaction_id: 99,
                order_id: 54}]}
```

### Alternate names - `user__`

If a name is already used within a scope, it may be useful to define an alternate name. This is useful when a function takes an abstraction, clones it, & returns a new version of the abstraction.

```js
async function refresh_user(user) {
  const {user_id} = user
      , response = await fetch_user(user_id)
      , user__ = await response.json()
  return user__
}
```

## Factory Functions `$sales_report`

Factory functions are prefixed with a `$`, with the name of the created abstraction following.

```js
const sales_report = $sales_report()
```

This technique may be useful in breaking down a function into component parts using scoping. In the following example, these queries are run in parallel using `async/await` & `Promise.all`.

Note that in this example, bottom-up naming is used to highlight that `results` is the type of the abstraction, with the rest of the name being context named top-down.

```js
async function $sales_report() {
  const [ results__sales_aggregate_query
        , results__sales_regions_query
        , results__sales_forecast_query
        ] = await Promise.all([
          $results__sales_aggregate_query(),
          $results__sales_regions_query(),
          $results__sales_forecast_query()
        ])
  return {
    results__sales_aggregate_query,
    results__sales_regions_query,
    results__sales_forecast_query
  }
  async function $results__sales_aggregate_query() {
    // ...
  }
  async function $results__sales_regions_query() {
    // ...
  }
  async function $results__sales_forecast_query() {
    // ...
  }
}
```
