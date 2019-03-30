---
title: backbone-signal - Practical Reactive Programming in Javascript
author: Brian Takita
date: 9/7/13 10:16 AM
---

<a href="/posts/backbone-signal-practical-reactive-programming-in-javascript/">
<img src="/images/neurons.jpg" alt="From Parthiv Haldipur http://www.flickr.com/photos/hmmmmm/3903176411/ - Licensed under Creative Commons" />
</a>

I have recently released <a href="https://github.com/btakita/backbone-signal" target="_blank">backbone-signal (github.com)</a>, which is a <a href="https://en.wikipedia.org/wiki/Reactive_programming" target="_blank">reactive programming (Wikipedia)</a> library with a practical & javascripty model api.

<hr class="more"/>

```js
// backbone-signal extends Backbone.Model
var app = new Backbone.Model();

var userSignal = app.signal("user");
userSignal.getTruthy(app, function(app, user) {
  console.info("Hello " + user.name);
});

console.info("Let's see some friends");
userSignal.set({
  name: "Jane"
});

userSignal.getTruthy(app, function(app, user) {
  console.info("Nice to see you");
});

userSignal.set({
  name: "Joe"
});

userSignal.unset();
```

The console ouput is:

```shell
    Let's see some friends
    Hello Jane
    Nice to see you
    Hello Joe
    Nice to see you
```

We are calling getTruthy on the userSignal two times, one for "Hello " + user.name and one for "Nice to see you". The callback is invoked when the value is <a href="http://www.sitepoint.com/javascript-truthy-falsy/" target="_blank">Truthy</a>. So when userSignal.unset is called, the callbacks are not invoked.

What is nice about having a dedicated signal object is that you can bind to it even when it's value is undefined, thereby avoiding order dependencies and simplifying your logic.

backbone-signal also utilizes Backbone's listenTo and listenToOnce methods, which make it easy to clean up by calling stopListening on the listener.

backbone-signal is being used in <a href="http://www.rundavoo.com" target="_blank">www.rundavoo.com</a> and has been fun to use, especially with <a href="http://nodejs.org/" target="_blank">node.js</a> & <a href="http://browserify.org/" target="_blank">Browserify</a>. It's been a pleasure using a lightweight unframework to freely structure the dataflow logic of the site.

The api includes:

## Loading/Unloading

* load - Invokes the loader when the value is not defined
* forceLoad - Invokes the loader (regardless if the value is defined)
* reload - Unsets the value then invokes the loader
* unload - Invokes the unloader
* setLoader - Sets the Loader callback
* unsetLoader - Unsets the Loader callback
* setUnloader - Sets the Unloader callback
* unsetUnloader - Unsets the Unloader callback

## Setters

* set - Sets the value with the argument
* unset - Unets the value
* value - Returns the value

## Getters/Listeners

* get - Invoke the callback immediately and on any additional changes to the value
* listen - Listen to any additional changes to the value (does not invoke the callback immediately)
* getOnce - Invoke the callback immediately one time
* listenOnce - Listen to any additional changes to the value one time
* getTruthy - Invoke the callback immediately and on any additional changes to the value if the value is truthy
* listenTruthy - Listen to any additional changes to the value if the value is truthy
* getTruthyOnce - Invoke the callback immediately or on any additional changes to the value if the value is truthy one time only
* listenTruthyOnce - Listen to any additional changes to the value if the value is truthy one time only
* getFalsy- Invoke the callback immediately and on any additional changes to the value if the value is falsy
* listenFalsy - Listen to any additional changes to the value if the value is falsy
* getFalsyOnce - Invoke the callback immediately or on any additional changes to the value if the value is falsy one time only
* listenFalsyOnce - Listen to any additional changes to the value if the value is falsy one time only
* getDefined- Invoke the callback immediately and on any additional changes to the value if the value is defined
* listenDefined - Listen to any additional changes to the value if the value is defined
* getDefinedOnce - Invoke the callback immediately or on any additional changes to the value if the value is defined one time only
* listenDefinedOnce - Listen to any additional changes to the value if the value is defined one time only
* unbind - Unbinds the given object from the callback
* loading
* isLoading
