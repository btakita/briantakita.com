---
title: Monorepo Musings with ctx-core
author: Brian Takita
date: 2/25/16 11:00
description: Monorepos Create a Holistic Way to Develop Domains & Platforms
---

It's been about 2 years since my previous post here. I've been busy working on a few client projects. As a consultant, I'm naturally inclined to accumulate a toolkit of tech (technology & techniques). In the domain of technology, where all levels of the solution stack are subject to change, keeping a toolkit while moving from project to project is a challenge.

<details>
<summary>Why I choose Javascript</summary>
<span>
I'm developing full-stack applications using node.js & es6/es2017. An advantage of web applications written in javascript is the potential to share logic on all levels of the stack. Frameworks such as <a href="https://www.meteor.com/#!" target="_blank">Meteor</a> provide full-stack solutions; with the price being lock-in to the design idioms that the framework authors have chosen to support their toolsets.
</span>
</details>

# Independence/Autonomy

As desirable features emerge in other libraries, the Framework would need to integrate the new feature. If a library is no longer desirable to you, it may be difficult to decouple from that library. A Framework has inertia. Once a Framework gains a community, it has an obligation to keep a feature set out while maintaining a simple interface. This often has a cost of complexity & loss of freedom.

As any software project (Frameworks included) is used & as new tech emerges, the idioms of the project often change. 
