import { a as SvelteComponentDev, b as init, c as safe_not_equal, d as create_slot, e as svg_element, f as claim_element, g as children, h as detach$1, i as attr, j as add_location, k as insert, l as add_binding_callback, m as get_slot_changes, n as get_slot_context, o as assign$1, p as exclude_internal_props, q as mount_component, r as get_spread_update, s as element, t as listen, u as prevent_default, v as text, w as space, x as claim_text, y as toggle_class, z as append, A as validate_store, B as subscribe$1, C as bubble, D as group_outros, E as on_outro, F as check_outros, G as noop$1, H as detach_before, I as detach_between, J as empty, K as set_data, L as setContext, M as getContext } from './chunk.1987d881.js';
import { a as derived, b as writable, c as __subheader, d as __prepend__footer, e as __title, f as __class__layout } from './chunk.7f5cd15f.js';
import { a as A } from './chunk.326a4a87.js';

const CONTEXT_KEY = {};

function tick(fn, timeout = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let rv;
			try {
				if (fn) rv = fn();
			} catch (e) {
				reject(e);
			}
			resolve(rv);
		}, timeout);
	})
}
function andand(obj, ...a1__name) {
	let value = obj;
	for (let i = 0; i < a1__name.length; i++) {
		value = value && value[a1__name[i]];
	}
	return value
}
function _andand(...a1__name) {
	return obj => andand(obj, ...a1__name)
}

/**
 * @typedef {Object} ctx
 */
/**
 * Assigned to the ctx using [assign](#assign)
 * @typedef {ctx} ctx__assign
 */
/**
 * Assigns ctx__assign to ctx.
 * @function assign
 * @param {module:@ctx-core/object~ctx} ctx
 * @param {...module:@ctx-core/object~ctx__assign} ctx__assign - Assigned to ctx
 */
const assign = Object.assign.bind(Object);
/**
 * Object keys
 * @function keys
 */
const keys = Object.keys.bind(Object);
/**
 * Object values
 * @function values
 */
const values = Object.values.bind(Object);
/**
 * Returns the [ctx](#ctx) with default values. If `ctx[key] == null`, use `default[key]`
 * @param {module:@ctx-core/object~ctx}
 * @param {...defaults$ctx} Default values to set on `ctx` if `ctx[key] == null`
 * @returns {ctx}
 */
function defaults(ctx, ...a1__defaults) {
	const defaults = clone(...a1__defaults);
	for (let key in ctx) {
		if (ctx[key] == null) ctx[key] = defaults[key];
	}
	return ctx
}
/**
 * Assigns [ctx__assign](#ctx__assign) to a new [ctx](#ctx).
 * @param {...@ctx-core/object~ctx__assign} ctx__assign - Assigned to cloned `ctx`
 * @returns {@ctx-core/object~ctx} ctx
 */
function clone() {
	return assign({}, ...arguments)
}
/**
 * Does not include `a1__keys` from `obj`
 * @param {Object} obj
 * @param {Array<string>} a1__key
 */
function unpick(obj, ...a1__key) {
	let memo = {};
	const obj_key_a1 = keys(obj);
	for (let i = 0; i < obj_key_a1.length; i++) {
		const key = obj_key_a1[i];
		if (a1__key.indexOf(key) === -1) memo[key] = obj[key];
	}
	return memo
}

const use_chalk = typeof window === 'undefined' && typeof require === 'function';
const chalk = _chalk();
function log__chalk() {
	return console.log.apply(console, _a1__chalk__log(...arguments))
}
function error__chalk() {
	return console.error.apply(console, _a1__chalk__error(...arguments))
}
function _a1__chalk__log() {
  return (
  	use_chalk
		? [chalk.grey(...arguments)]
		: arguments
	)
}
function _a1__chalk__error() {
  return (
  	use_chalk
		? [chalk.red.bold(...arguments)]
		: arguments
	)
}
function _chalk() {
	if (use_chalk) {
		return require('chalk')
	} else {
		return function chalk(...args) {
			return args
		}
	}
}

function log() {
	return log__chalk(_timestamp(), ...arguments)
}
function error() {
	return error__chalk(_timestamp(), ...arguments)
}
function _timestamp() {
	return (new Date()).toISOString()
}

/**
 * @module @ctx-core/html/lib
 */
/**
 * Returns class style attribute from obj
 * @param {Object} obj - key/value pairs of styles
 * @returns {string} style
 * @example
 * _style({position: 'absolute, left: '5px'}) // returns 'position: absolute; left: 5px;'
 */
function _style(obj, ...a1__style) {
	const a1 = [];
	a1.push(...a1__style);
	for (let key in obj) {
		const value = obj[key];
		a1.push(`${key}: ${value};`);
	}
	return a1.join(' ')
}

/**
 * dom library
 * @module @ctx-core/dom/lib.js
 */
function _has__dom() {
	return typeof window === 'object'
}
function _no__dom() {
	return typeof window === 'undefined'
}
function _BoundingClientRect(el) {
	const {
		top,
		bottom,
		left,
		right,
		height,
		width,
		length
	} = el.getBoundingClientRect();
	return { top, bottom, left, right, height, width, length }
}

var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

/**
 * Error functions
 * @module @ctx-core/error/lib.js
 */
const logPrefix = '@ctx-core/error';
/**
 * ctx used to throw & catch errors
 * @typedef {module:ctx-core/object/lib~ctx} ctx__error
 * @property {string} error_message - Message to print to the console.error
 * @property {string} type='@ctx-core/error/lib~ctx__error'
 */
/**
 * Throws an error
 * @param {module:ctx-core/object/lib~ctx} ctx - The ctx
 * @param {Object} ctx.ctx__error - The ctx__error to be assigned to & thrown
 * @param {Object|string} ctx__error - Assigned or coerced into ctx.ctx__error
 * @param {string} ctx__error.error_message - The error message
 * @param {...module:ctx-core/error/lib~ctx__error} ctx__error - Assigned into ctx.ctx__error
 * @throws Decorate & throw error given by the arguments.
 */
function throw__error(ctx, ctx__error__param, ...a1__ctx__error) {
	log(`${logPrefix}|throw__error`);
	const ctx__error =
		_ctx__error__log(
			ctx,
			ctx__error__param,
			...a1__ctx__error);
	throw ctx__error
}
function _ctx__error__log(
	ctx,
	ctx__error__param,
	...a1__ctx__error
) {
	log(`${logPrefix}|_ctx__error__log`);
	const ctx__error =
		_ctx__error(
			ctx__error__param,
			...a1__ctx__error);
	console__error(ctx__error);
	return ctx__error
}
function console__error(ctx__error) {
	log(`${logPrefix}|console__error`);
	const error_message__ =
		ctx__error.error_message
		|| ctx__error && ctx__error.toString()
		|| 'throw__error: Unknown Error';
	const stack =
		ctx__error
		&& ctx__error.stack;
	const error_message =
		`\n${stack}\n${error_message__}`;
	error(`${logPrefix}|throw__error\n${error_message}\n${JSON.stringify(ctx__error)}`);
}
/**
 * Assigns & coerces to ctx.ctx__error
 * @return {module:ctx-core/object/lib~ctx} The ctx with ctx.ctx__error
 * @param {module:ctx-core/object/lib~ctx} ctx - The ctx to be assigned to
 * @param {ctx__error|string} ctx__error__or__error_message - Assigned or coerced into ctx.ctx__error
 * @param {...module:ctx-core/error/lib~ctx__error} ctx__error - Assigned or coerced into ctx.ctx__error
 */
function _ctx__error(
	ctx__error__or__error_message,
	...a1__ctx__error
) {
	log(`${logPrefix}|_ctx__error`);
	const ctx__error =
		_ctx__error__defaults(
			(ctx__error__or__error_message
				&& ctx__error__or__error_message.ctx__error)
			|| ((typeof ctx__error__or__error_message === 'object')
			&& ctx__error__or__error_message)
			|| {});
	assign(
		ctx__error,
		ctx__error__or__error_message,
		...a1__ctx__error);
	const error_message__ =
		ctx__error__or__error_message
		&& ctx__error__or__error_message.toString();
	const error_message =
		((error_message__ !== '[object Object]')
			&& error_message__)
		|| (ctx__error__or__error_message
		&& ctx__error__or__error_message.error_message)
		|| (ctx__error && ctx__error.error_message);
	ctx__error.error_message = error_message;
	return ctx__error
}
function _ctx__error__defaults(ctx__error) {
	defaults(
		ctx__error,
		{
			type: '@ctx-core/error/lib~ctx__error',
			error_message: ''
		});
	return ctx__error
}
/**
 * Missing Argument error.
 * @typedef missing_argument
 * @see {@link throw__error}
 * @example
 * throw__missing_argument(ctx, {key: 'ctx.foobar', type: 'baz__agent'}) // ctx.foobar is not defined - baz__agent
 */
/**
 * Throws a missing_argument error (HTTP 500)
 * @param {...module:ctx-core/error/lib~ctx__error} ctx__error
 * @throws {missing_argument} throw missing_argument error
 */
function throw__missing_argument(ctx, ...a1__ctx__error) {
	log(`${logPrefix}|throw__missing_argument`);
	const ctx__error = clone(...a1__ctx__error);
	throw__error(
		ctx,
		{
			type: 'missing_argument',
			error_message: `${ctx__error.key} is not defined - ${ctx__error.type || 'Unknown Type'}`,
			status__http: 500,
			error_message__http: 'Error'
		},
		ctx__error);
}

/**
 * Html to guard agaist flash of unfocused text with Google Fonts.
 * @param opts
 * @param opts.WebFontConfig
 * @param opts.families
 * @returns {string}
 * @example `_html__webfont__fout({ families: ['Open Sans'] })`
 * @example `_html__webfont__fout({ WebFontConfig: { custom: { families: ['My Font', 'My Other Font:n4,i4,n7'], urls: ['/fonts.css'] }} })`
 */
function _html__webfont__fout(opts = {}) {
	const WebFontConfig =
		opts.WebFontConfig
		|| {
			google: { families: opts.families || [] }
		};
	return `
<script>
	WebFontConfig = ${JSON.stringify(WebFontConfig)};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
			'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
</script>
	`.trim()
}
/**
 * Html to add gtag.js to the site
 * @param opts
 * @param opts.GOOGLE_TRACKING_ID
 * @returns {string}
 */
function _html__gtag(opts = {}) {
	const GOOGLE_TRACKING_ID = opts.GOOGLE_TRACKING_ID || "UA-43791623-1" || '';
	if (!GOOGLE_TRACKING_ID) throw__missing_argument(opts, { key: '"UA-43791623-1"' });
	return `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GOOGLE_TRACKING_ID}');
</script>
	`.trim()
}

const __NODE_ENV = writable("development");
const __VERSION =
	writable(
		(typeof process === 'object' && process.env.HEROKU_SLUG_COMMIT)
		|| Math.random());
const __is__production =
	derived(__NODE_ENV, NODE_ENV => NODE_ENV === 'production');
const __is__staging =
	derived(__NODE_ENV, NODE_ENV => NODE_ENV === 'staging');
const __is__development =
	derived(__NODE_ENV, NODE_ENV => NODE_ENV === 'development');

//https://gist.github.com/LeverOne/1308368

/**
 * @see {@link https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45}
 */

/**
 * @module @ctx-core/array/lib.js
 */
/**
 * Iterate over each item in `a1` with `fn(a1[i], i)`.
 * @param {Array} a1
 * @param {function(*, number)} fn
 * @returns {Array} a1
 */
function each(a1, fn) {
	if (!a1) return
	for (let i = 0; i < a1.length; i++) {
		fn(a1[i], i);
	}
	return a1
}

const concurrent_id__default = 'default';
let concurrent_id = concurrent_id__default;
const __concurrent_id = writable(concurrent_id);
subscribe(__concurrent_id, __ => concurrent_id = __);
const __concurrent_id__destroy = writable();
subscribe(__concurrent_id__destroy, concurrent_id__destroy => {
	if (concurrent_id === concurrent_id__destroy) __concurrent_id.set('default');
});

const __ctx__store__global = writable(_has__dom() ? window : null);
let ctx__store__global;
subscribe(__ctx__store__global, __ => ctx__store__global = __);

function subscribe(store, fn) {
	return store.subscribe(fn)
}

const __page__sapper = writable();
const __preloading__sapper = writable();
const __session__sapper = writable();
const __path__sapper =
	derived(__page__sapper,
		_andand('path'));

const __opened__nav = writable(false);
function open__nav() {
  __opened__nav.set(true);
}
function close__nav() {
  __opened__nav.set(false);
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/svg/Icon.html generated by Svelte v3.4.1 */

const file = "home/brian/work/briantakita.com/packages/ctx-core/packages/svg/Icon.html";

function create_fragment(ctx) {
	var svg, svg_class_value, current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			svg = svg_element("svg");

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			svg = claim_element(nodes, "svg", { "xmlns:svg": true, xmlns: true, version: true, class: true }, true);
			var svg_nodes = children(svg);

			if (default_slot) default_slot.l(svg_nodes);
			svg_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(svg, "xmlns:svg", "http://www.w3.org/2000/svg");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "version", "1.2");
			attr(svg, "class", svg_class_value = "Icon " + (ctx.$$props.class || ''));
			add_location(svg, file, 16, 0, 419);
		},

		m: function mount(target, anchor) {
			insert(target, svg, anchor);

			if (default_slot) {
				default_slot.m(svg, null);
			}

			add_binding_callback(() => ctx.svg_binding(svg, null));
			current = true;
		},

		p: function update(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (changed.items) {
				ctx.svg_binding(null, svg);
				ctx.svg_binding(svg, null);
			}

			if ((!current || changed.$$props) && svg_class_value !== (svg_class_value = "Icon " + (ctx.$$props.class || ''))) {
				attr(svg, "class", svg_class_value);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(svg);
			}

			if (default_slot) default_slot.d(detaching);
			ctx.svg_binding(null, svg);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	
	let dom__svg;
	let props;

	let { $$slots = {}, $$scope } = $$props;

	function svg_binding($$node, check) {
		dom__svg = $$node;
		$$invalidate('dom__svg', dom__svg);
	}

	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
		if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = ($$dirty = { $$props: 1, props: 1, dom__svg: 1 }) => {
		$$invalidate('props', props = unpick($$props, 'class'));
		if ($$dirty.props || $$dirty.dom__svg) { {
				each(keys(props),
					prop => dom__svg && dom__svg.setAttribute(prop, props[prop]));
			} }
	};

	return {
		dom__svg,
		$$props,
		svg_binding,
		$$props: $$props = exclude_internal_props($$props),
		$$slots,
		$$scope
	};
}

class Icon extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/Icon.html generated by Svelte v3.4.1 */

// (8:0) <Icon class="fa-icon {$$props.class || ''}" {...props}>
function create_default_slot(ctx) {
	var current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			if (default_slot) default_slot.c();
		},

		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},

		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment$1(ctx) {
	var current;

	var icon_spread_levels = [
		{ class: "fa-icon " + (ctx.$$props.class || '') },
		ctx.props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = (changed.$$props || changed.props) ? get_spread_update(icon_spread_levels, [
				(changed.$$props) && { class: "fa-icon " + (ctx.$$props.class || '') },
				(changed.props) && ctx.props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	
	let props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
		if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = ($$dirty = { $$props: 1 }) => {
		$$invalidate('props', props = unpick($$props, 'class'));
	};

	return {
		props,
		$$props,
		$$props: $$props = exclude_internal_props($$props),
		$$slots,
		$$scope
	};
}

class Icon_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-bars-solid.html generated by Svelte v3.4.1 */

const file$1 = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-bars-solid.html";

// (4:0) <Icon viewBox="0 0 448 512" width="448" height="512" {...$$props}>
function create_default_slot$1(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z");
			add_location(path, file$1, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$2(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 448 512" },
		{ width: "448" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$1] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 448 512" },
				{ width: "448" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_bars_solid extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/nav/Handle__Nav.html generated by Svelte v3.4.1 */

const file$2 = "home/brian/work/briantakita.com/packages/ctx-core/packages/nav/Handle__Nav.html";

function create_fragment$3(ctx) {
	var a, a_class_value, current, dispose;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	var fa_bars_solid = new FA_bars_solid({ $$inline: true });

	return {
		c: function create() {
			a = element("a");

			if (!default_slot) {
				fa_bars_solid.$$.fragment.c();
			}

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			if (!default_slot) {
				fa_bars_solid.$$.fragment.l(a_nodes);
			}

			if (default_slot) default_slot.l(a_nodes);
			a_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			a.href = ".";
			a.className = a_class_value = "nav-handle Handle__Nav " + ctx.class__;
			add_location(a, file$2, 7, 0, 205);
			dispose = listen(a, "click", prevent_default(open__nav));
		},

		m: function mount(target, anchor) {
			insert(target, a, anchor);

			if (!default_slot) {
				mount_component(fa_bars_solid, a, null);
			}

			else {
				default_slot.m(a, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if ((!current || changed.class__) && a_class_value !== (a_class_value = "nav-handle Handle__Nav " + ctx.class__)) {
				a.className = a_class_value;
			}
		},

		i: function intro(local) {
			if (current) return;
			fa_bars_solid.$$.fragment.i(local);

			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			fa_bars_solid.$$.fragment.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(a);
			}

			if (!default_slot) {
				fa_bars_solid.$destroy();
			}

			if (default_slot) default_slot.d(detaching);
			dispose();
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	
	let class__;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
		if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = ($$dirty = { $$props: 1 }) => {
		$$invalidate('class__', class__ = $$props.class || '');
	};

	return {
		class__,
		$$props: $$props = exclude_internal_props($$props),
		$$slots,
		$$scope
	};
}

class Handle__Nav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/nav/Content__Nav.html generated by Svelte v3.4.1 */

const file$3 = "home/brian/work/briantakita.com/packages/ctx-core/packages/nav/Content__Nav.html";

const get_close__header_slot_changes = ({}) => ({});
const get_close__header_slot_context = ({}) => ({});

const get_in__close__header_slot_changes = ({}) => ({});
const get_in__close__header_slot_context = ({}) => ({});

const get_header_slot_changes = ({}) => ({});
const get_header_slot_context = ({}) => ({});

function create_fragment$4(ctx) {
	var nav_1, div2, div0, a, t0, t1, dispose_header_slot, t2, div1, nav_1_class_value, current, dispose;

	const header_slot_1 = ctx.$$slots.header;
	const header_slot = create_slot(header_slot_1, ctx, get_header_slot_context);

	const in__close__header_slot_1 = ctx.$$slots.in__close__header;
	const in__close__header_slot = create_slot(in__close__header_slot_1, ctx, get_in__close__header_slot_context);

	const close__header_slot_1 = ctx.$$slots.close__header;
	const close__header_slot = create_slot(close__header_slot_1, ctx, get_close__header_slot_context);

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			nav_1 = element("nav");
			div2 = element("div");

			if (!header_slot) {
				div0 = element("div");
				a = element("a");

				if (!in__close__header_slot) {
					t0 = text("×");
				}

				if (in__close__header_slot) in__close__header_slot.c();
				t1 = space();

				if (close__header_slot) close__header_slot.c();
			}

			if (header_slot) header_slot.c();
			t2 = space();
			div1 = element("div");

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			nav_1 = claim_element(nodes, "NAV", { class: true }, false);
			var nav_1_nodes = children(nav_1);

			div2 = claim_element(nav_1_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			if (!header_slot) {
				div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
				var div0_nodes = children(div0);

				a = claim_element(div0_nodes, "A", { href: true, class: true }, false);
				var a_nodes = children(a);

				if (!in__close__header_slot) {
					t0 = claim_text(a_nodes, "×");
				}

				if (in__close__header_slot) in__close__header_slot.l(a_nodes);
				a_nodes.forEach(detach$1);
				t1 = claim_text(div0_nodes, "\n\t\t\t\t");

				if (close__header_slot) close__header_slot.l(div0_nodes);
				div0_nodes.forEach(detach$1);
			}

			if (header_slot) header_slot.l(div2_nodes);
			t2 = claim_text(div2_nodes, "\n\t\t");

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach$1);
			div2_nodes.forEach(detach$1);
			nav_1_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			if (!header_slot) {
				a.href = ".";
				a.className = "close";
				add_location(a, file$3, 22, 4, 440);

				div0.className = "header";
				add_location(div0, file$3, 21, 3, 415);
				dispose_header_slot = listen(a, "click", prevent_default(close__nav));
			}

			div1.className = "container";
			add_location(div1, file$3, 28, 2, 621);
			div2.className = "dialog";
			add_location(div2, file$3, 19, 1, 368);
			nav_1.className = nav_1_class_value = "Content__Nav " + ctx.class__;
			toggle_class(nav_1, "opened__nav", ctx.$__opened__nav);
			add_location(nav_1, file$3, 13, 0, 246);
			dispose = listen(nav_1, "click", ctx.__click__nav);
		},

		m: function mount(target, anchor) {
			insert(target, nav_1, anchor);
			append(nav_1, div2);

			if (!header_slot) {
				append(div2, div0);
				append(div0, a);

				if (!in__close__header_slot) {
					append(a, t0);
				}

				else {
					in__close__header_slot.m(a, null);
				}

				append(div0, t1);

				if (close__header_slot) {
					close__header_slot.m(div0, null);
				}
			}

			else {
				header_slot.m(div2, null);
			}

			append(div2, t2);
			append(div2, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			add_binding_callback(() => ctx.nav_1_binding(nav_1, null));
			current = true;
		},

		p: function update(changed, ctx) {
			if (!header_slot) {
				if (in__close__header_slot && in__close__header_slot.p && changed.$$scope) {
					in__close__header_slot.p(get_slot_changes(in__close__header_slot_1, ctx, changed, get_in__close__header_slot_changes), get_slot_context(in__close__header_slot_1, ctx, get_in__close__header_slot_context));
				}

				if (close__header_slot && close__header_slot.p && changed.$$scope) {
					close__header_slot.p(get_slot_changes(close__header_slot_1, ctx, changed, get_close__header_slot_changes), get_slot_context(close__header_slot_1, ctx, get_close__header_slot_context));
				}
			}

			if (header_slot && header_slot.p && changed.$$scope) {
				header_slot.p(get_slot_changes(header_slot_1, ctx, changed, get_header_slot_changes), get_slot_context(header_slot_1, ctx, get_header_slot_context));
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (changed.items) {
				ctx.nav_1_binding(null, nav_1);
				ctx.nav_1_binding(nav_1, null);
			}

			if ((!current || changed.class__) && nav_1_class_value !== (nav_1_class_value = "Content__Nav " + ctx.class__)) {
				nav_1.className = nav_1_class_value;
			}

			if ((changed.class__ || changed.$__opened__nav)) {
				toggle_class(nav_1, "opened__nav", ctx.$__opened__nav);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (in__close__header_slot && in__close__header_slot.i) in__close__header_slot.i(local);
			if (close__header_slot && close__header_slot.i) close__header_slot.i(local);
			if (header_slot && header_slot.i) header_slot.i(local);
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (in__close__header_slot && in__close__header_slot.o) in__close__header_slot.o(local);
			if (close__header_slot && close__header_slot.o) close__header_slot.o(local);
			if (header_slot && header_slot.o) header_slot.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(nav_1);
			}

			if (!header_slot) {
				if (in__close__header_slot) in__close__header_slot.d(detaching);

				if (close__header_slot) close__header_slot.d(detaching);
				dispose_header_slot();
			}

			if (header_slot) header_slot.d(detaching);

			if (default_slot) default_slot.d(detaching);
			ctx.nav_1_binding(null, nav_1);
			dispose();
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	let $__opened__nav;

	validate_store(__opened__nav, '__opened__nav');
	subscribe$1($$self, __opened__nav, $$value => { $__opened__nav = $$value; $$invalidate('$__opened__nav', $__opened__nav); });

	let nav;
	let class__;
	function __click__nav(event) {
		const { target } = event;
		if (target !== nav) {
			close__nav();
		}
	}

	let { $$slots = {}, $$scope } = $$props;

	function nav_1_binding($$node, check) {
		nav = $$node;
		$$invalidate('nav', nav);
	}

	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
		if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = ($$dirty = { $$props: 1 }) => {
		$$invalidate('class__', class__ = $$props.class || '');
	};

	return {
		nav,
		class__,
		__click__nav,
		$__opened__nav,
		nav_1_binding,
		$$props: $$props = exclude_internal_props($$props),
		$$slots,
		$$scope
	};
}

class Content__Nav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/nav/Item__Nav.html generated by Svelte v3.4.1 */

const file$4 = "home/brian/work/briantakita.com/packages/ctx-core/packages/nav/Item__Nav.html";

const get_in_slot_changes = ({}) => ({});
const get_in_slot_context = ({}) => ({});

function create_fragment$5(ctx) {
	var div, a, dispose_in_slot, div_class_value, current;

	const in_slot_1 = ctx.$$slots.in;
	const in_slot = create_slot(in_slot_1, ctx, get_in_slot_context);

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			div = element("div");

			if (!in_slot) {
				a = element("a");

				if (default_slot) default_slot.c();
			}

			if (in_slot) in_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			if (!in_slot) {
				a = claim_element(div_nodes, "A", { class: true, href: true, alt: true, title: true }, false);
				var a_nodes = children(a);

				if (default_slot) default_slot.l(a_nodes);
				a_nodes.forEach(detach$1);
			}

			if (in_slot) in_slot.l(div_nodes);
			div_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			if (!in_slot) {
				a.className = "default_a";
				a.href = ctx.href;
				attr(a, "alt", ctx.alt);
				a.title = ctx.title;
				add_location(a, file$4, 13, 17, 231);
				dispose_in_slot = listen(a, "click", ctx.click_handler);
			}

			div.className = div_class_value = "Item__Nav " + ctx.class__;
			toggle_class(div, "selected", ctx.selected);
			add_location(div, file$4, 9, 0, 162);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);

			if (!in_slot) {
				append(div, a);

				if (default_slot) {
					default_slot.m(a, null);
				}
			}

			else {
				in_slot.m(div, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (!in_slot) {
				if (default_slot && default_slot.p && changed.$$scope) {
					default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
				}

				if (!current || changed.href) {
					a.href = ctx.href;
				}

				if (!current || changed.alt) {
					attr(a, "alt", ctx.alt);
				}

				if (!current || changed.title) {
					a.title = ctx.title;
				}
			}

			if (in_slot && in_slot.p && changed.$$scope) {
				in_slot.p(get_slot_changes(in_slot_1, ctx, changed, get_in_slot_changes), get_slot_context(in_slot_1, ctx, get_in_slot_context));
			}

			if ((!current || changed.class__) && div_class_value !== (div_class_value = "Item__Nav " + ctx.class__)) {
				div.className = div_class_value;
			}

			if ((changed.class__ || changed.selected)) {
				toggle_class(div, "selected", ctx.selected);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			if (in_slot && in_slot.i) in_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			if (in_slot && in_slot.o) in_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(div);
			}

			if (!in_slot) {
				if (default_slot) default_slot.d(detaching);
				dispose_in_slot();
			}

			if (in_slot) in_slot.d(detaching);
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	let { selected = false, href = '', alt = '', title = '' } = $$props;
	let class__;

	let { $$slots = {}, $$scope } = $$props;

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
		if ('selected' in $$props) $$invalidate('selected', selected = $$props.selected);
		if ('href' in $$props) $$invalidate('href', href = $$props.href);
		if ('alt' in $$props) $$invalidate('alt', alt = $$props.alt);
		if ('title' in $$props) $$invalidate('title', title = $$props.title);
		if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = ($$dirty = { $$props: 1 }) => {
		$$invalidate('class__', class__ = $$props.class || '');
	};

	return {
		selected,
		href,
		alt,
		title,
		class__,
		click_handler,
		$$props: $$props = exclude_internal_props($$props),
		$$slots,
		$$scope
	};
}

class Item__Nav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, ["selected", "href", "alt", "title"]);
	}

	get selected() {
		throw new Error("<Item__Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selected(value) {
		throw new Error("<Item__Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<Item__Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<Item__Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get alt() {
		throw new Error("<Item__Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set alt(value) {
		throw new Error("<Item__Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get title() {
		throw new Error("<Item__Nav>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Item__Nav>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-rss-solid.html generated by Svelte v3.4.1 */

const file$5 = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-rss-solid.html";

// (4:0) <Icon viewBox="0 0 448 512" width="448" height="512" {...$$props}>
function create_default_slot$2(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z");
			add_location(path, file$5, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$6(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 448 512" },
		{ width: "448" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$2] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 448 512" },
				{ width: "448" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$6($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_rss_solid extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-envelope-solid.html generated by Svelte v3.4.1 */

const file$6 = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-envelope-solid.html";

// (4:0) <Icon viewBox="0 0 512 512" width="512" height="512" {...$$props}>
function create_default_slot$3(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z");
			add_location(path, file$6, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$7(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 512 512" },
		{ width: "512" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$3] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 512 512" },
				{ width: "512" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$7($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_envelope_solid extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-linkedin-brand.html generated by Svelte v3.4.1 */

const file$7 = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-linkedin-brand.html";

// (4:0) <Icon viewBox="0 0 448 512" width="448" height="512" {...$$props}>
function create_default_slot$4(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z");
			add_location(path, file$7, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$8(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 448 512" },
		{ width: "448" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$4] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 448 512" },
				{ width: "448" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$8($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_linkedin_brand extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$8, create_fragment$8, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-github-brand.html generated by Svelte v3.4.1 */

const file$8 = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-github-brand.html";

// (4:0) <Icon viewBox="0 0 496 512" width="496" height="512" {...$$props}>
function create_default_slot$5(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z");
			add_location(path, file$8, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$9(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 496 512" },
		{ width: "496" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$5] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 496 512" },
				{ width: "496" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$9($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_github_brand extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$9, create_fragment$9, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-facebook-brand.html generated by Svelte v3.4.1 */

const file$9 = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-facebook-brand.html";

// (4:0) <Icon viewBox="0 0 512 512" width="512" height="512" {...$$props}>
function create_default_slot$6(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z");
			add_location(path, file$9, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$a(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 512 512" },
		{ width: "512" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$6] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 512 512" },
				{ width: "512" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$a($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_facebook_brand extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$a, create_fragment$a, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-twitter-brand.html generated by Svelte v3.4.1 */

const file$a = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-twitter-brand.html";

// (4:0) <Icon viewBox="0 0 512 512" width="512" height="512" {...$$props}>
function create_default_slot$7(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z");
			add_location(path, file$a, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$b(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 512 512" },
		{ width: "512" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$7] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 512 512" },
				{ width: "512" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$b($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_twitter_brand extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$b, create_fragment$b, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-wordpress-brand.html generated by Svelte v3.4.1 */

const file$b = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-wordpress-brand.html";

// (4:0) <Icon viewBox="0 0 512 512" width="512" height="512" {...$$props}>
function create_default_slot$8(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z");
			add_location(path, file$b, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$c(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 512 512" },
		{ width: "512" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$8] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 512 512" },
				{ width: "512" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$c($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_wordpress_brand extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$c, create_fragment$c, safe_not_equal, []);
	}
}

/* home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-quora-brand.html generated by Svelte v3.4.1 */

const file$c = "home/brian/work/briantakita.com/packages/ctx-core/packages/font-awesome/ui/FA-quora-brand.html";

// (4:0) <Icon viewBox="0 0 448 512" width="448" height="512" {...$$props}>
function create_default_slot$9(ctx) {
	var path;

	return {
		c: function create() {
			path = svg_element("path");
			this.h();
		},

		l: function claim(nodes) {
			path = claim_element(nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(path, "d", "M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z");
			add_location(path, file$c, 3, 66, 117);
		},

		m: function mount(target, anchor) {
			insert(target, path, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(path);
			}
		}
	};
}

function create_fragment$d(ctx) {
	var current;

	var icon_spread_levels = [
		{ viewBox: "0 0 448 512" },
		{ width: "448" },
		{ height: "512" },
		ctx.$$props
	];

	let icon_props = {
		$$slots: { default: [create_default_slot$9] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_spread_levels.length; i += 1) {
		icon_props = assign$1(icon_props, icon_spread_levels[i]);
	}
	var icon = new Icon_1({ props: icon_props, $$inline: true });

	return {
		c: function create() {
			icon.$$.fragment.c();
		},

		l: function claim(nodes) {
			icon.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var icon_changes = changed.$$props ? get_spread_update(icon_spread_levels, [
				{ viewBox: "0 0 448 512" },
				{ width: "448" },
				{ height: "512" },
				ctx.$$props
			]) : {};
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i: function intro(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			icon.$destroy(detaching);
		}
	};
}

function instance$d($$self, $$props, $$invalidate) {
	$$self.$set = $$new_props => {
		$$invalidate('$$props', $$props = assign$1(assign$1({}, $$props), $$new_props));
	};

	return {
		$$props,
		$$props: $$props = exclude_internal_props($$props)
	};
}

class FA_quora_brand extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$d, create_fragment$d, safe_not_equal, []);
	}
}

/* src/layout/Links__SocialMedia.html generated by Svelte v3.4.1 */

const file$d = "src/layout/Links__SocialMedia.html";

// (20:6) <A href="/feed.xml" title="Atom Feed">
function create_default_slot_7(ctx) {
	var current;

	var fa_rss_solid = new FA_rss_solid({ $$inline: true });

	return {
		c: function create() {
			fa_rss_solid.$$.fragment.c();
		},

		l: function claim(nodes) {
			fa_rss_solid.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(fa_rss_solid, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			fa_rss_solid.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			fa_rss_solid.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			fa_rss_solid.$destroy(detaching);
		}
	};
}

// (26:6) <A href="mailto:brian.takitagmail.com" title="Github">
function create_default_slot_6(ctx) {
	var current;

	var fa_envelope_solid = new FA_envelope_solid({ $$inline: true });

	return {
		c: function create() {
			fa_envelope_solid.$$.fragment.c();
		},

		l: function claim(nodes) {
			fa_envelope_solid.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(fa_envelope_solid, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			fa_envelope_solid.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			fa_envelope_solid.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			fa_envelope_solid.$destroy(detaching);
		}
	};
}

// (31:6) <A href="https://github.com/btakita" title="Github">
function create_default_slot_5(ctx) {
	var current;

	var fa_github_brand = new FA_github_brand({ $$inline: true });

	return {
		c: function create() {
			fa_github_brand.$$.fragment.c();
		},

		l: function claim(nodes) {
			fa_github_brand.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(fa_github_brand, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			fa_github_brand.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			fa_github_brand.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			fa_github_brand.$destroy(detaching);
		}
	};
}

// (36:6) <A href="http://www.linkedin.com/in/briantakita" title="LinkedIn">
function create_default_slot_4(ctx) {
	var current;

	var fa_linkedin_brand = new FA_linkedin_brand({ $$inline: true });

	return {
		c: function create() {
			fa_linkedin_brand.$$.fragment.c();
		},

		l: function claim(nodes) {
			fa_linkedin_brand.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(fa_linkedin_brand, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			fa_linkedin_brand.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			fa_linkedin_brand.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			fa_linkedin_brand.$destroy(detaching);
		}
	};
}

// (40:4) {#if !compact}
function create_if_block(ctx) {
	var li0, t0, li1, t1, li2, t2, li3, current;

	var a0 = new A({
		props: {
		href: "https://www.facebook.com/brian.takita",
		title: "Facebook",
		$$slots: { default: [create_default_slot_3] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var a1 = new A({
		props: {
		href: "https://twitter.com/briantakita",
		title: "Twitter",
		$$slots: { default: [create_default_slot_2] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var a2 = new A({
		props: {
		href: "http://briantakita.wordpress.com/",
		title: "Wordpress Blog",
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var a3 = new A({
		props: {
		href: "https://www.quora.com/Brian-Takita",
		title: "Quora",
		$$slots: { default: [create_default_slot$a] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			li0 = element("li");
			a0.$$.fragment.c();
			t0 = space();
			li1 = element("li");
			a1.$$.fragment.c();
			t1 = space();
			li2 = element("li");
			a2.$$.fragment.c();
			t2 = space();
			li3 = element("li");
			a3.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			li0 = claim_element(nodes, "LI", { class: true }, false);
			var li0_nodes = children(li0);

			a0.$$.fragment.l(li0_nodes);
			li0_nodes.forEach(detach$1);
			t0 = claim_text(nodes, "\n\t\t\n      ");

			li1 = claim_element(nodes, "LI", { class: true }, false);
			var li1_nodes = children(li1);

			a1.$$.fragment.l(li1_nodes);
			li1_nodes.forEach(detach$1);
			t1 = claim_text(nodes, "\n      ");

			li2 = claim_element(nodes, "LI", { class: true }, false);
			var li2_nodes = children(li2);

			a2.$$.fragment.l(li2_nodes);
			li2_nodes.forEach(detach$1);
			t2 = claim_text(nodes, "\n      ");

			li3 = claim_element(nodes, "LI", { class: true }, false);
			var li3_nodes = children(li3);

			a3.$$.fragment.l(li3_nodes);
			li3_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			li0.className = "svelte-hl2s2u";
			add_location(li0, file$d, 40, 6, 1475);
			li1.className = "svelte-hl2s2u";
			add_location(li1, file$d, 46, 6, 1723);
			li2.className = "svelte-hl2s2u";
			add_location(li2, file$d, 51, 6, 1874);
			li3.className = "svelte-hl2s2u";
			add_location(li3, file$d, 56, 6, 2038);
		},

		m: function mount(target, anchor) {
			insert(target, li0, anchor);
			mount_component(a0, li0, null);
			insert(target, t0, anchor);
			insert(target, li1, anchor);
			mount_component(a1, li1, null);
			insert(target, t1, anchor);
			insert(target, li2, anchor);
			mount_component(a2, li2, null);
			insert(target, t2, anchor);
			insert(target, li3, anchor);
			mount_component(a3, li3, null);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			a0.$$.fragment.i(local);

			a1.$$.fragment.i(local);

			a2.$$.fragment.i(local);

			a3.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			a0.$$.fragment.o(local);
			a1.$$.fragment.o(local);
			a2.$$.fragment.o(local);
			a3.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(li0);
			}

			a0.$destroy();

			if (detaching) {
				detach$1(t0);
				detach$1(li1);
			}

			a1.$destroy();

			if (detaching) {
				detach$1(t1);
				detach$1(li2);
			}

			a2.$destroy();

			if (detaching) {
				detach$1(t2);
				detach$1(li3);
			}

			a3.$destroy();
		}
	};
}

// (42:8) <A href="https://www.facebook.com/brian.takita" title="Facebook">
function create_default_slot_3(ctx) {
	var current;

	var fa_facebook_brand = new FA_facebook_brand({ $$inline: true });

	return {
		c: function create() {
			fa_facebook_brand.$$.fragment.c();
		},

		l: function claim(nodes) {
			fa_facebook_brand.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(fa_facebook_brand, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			fa_facebook_brand.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			fa_facebook_brand.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			fa_facebook_brand.$destroy(detaching);
		}
	};
}

// (48:8) <A href="https://twitter.com/briantakita" title="Twitter">
function create_default_slot_2(ctx) {
	var current;

	var fa_twitter_brand = new FA_twitter_brand({ $$inline: true });

	return {
		c: function create() {
			fa_twitter_brand.$$.fragment.c();
		},

		l: function claim(nodes) {
			fa_twitter_brand.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(fa_twitter_brand, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			fa_twitter_brand.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			fa_twitter_brand.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			fa_twitter_brand.$destroy(detaching);
		}
	};
}

// (53:8) <A href="http://briantakita.wordpress.com/" title="Wordpress Blog">
function create_default_slot_1(ctx) {
	var current;

	var fa_wordpress_brand = new FA_wordpress_brand({ $$inline: true });

	return {
		c: function create() {
			fa_wordpress_brand.$$.fragment.c();
		},

		l: function claim(nodes) {
			fa_wordpress_brand.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(fa_wordpress_brand, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			fa_wordpress_brand.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			fa_wordpress_brand.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			fa_wordpress_brand.$destroy(detaching);
		}
	};
}

// (58:8) <A href="https://www.quora.com/Brian-Takita" title="Quora">
function create_default_slot$a(ctx) {
	var current;

	var fa_quora_brand = new FA_quora_brand({ $$inline: true });

	return {
		c: function create() {
			fa_quora_brand.$$.fragment.c();
		},

		l: function claim(nodes) {
			fa_quora_brand.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(fa_quora_brand, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			fa_quora_brand.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			fa_quora_brand.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			fa_quora_brand.$destroy(detaching);
		}
	};
}

function create_fragment$e(ctx) {
	var section, ul, li0, t0, li1, t1, li2, t2, li3, t3, current;

	var a0 = new A({
		props: {
		href: "/feed.xml",
		title: "Atom Feed",
		$$slots: { default: [create_default_slot_7] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var a1 = new A({
		props: {
		href: "mailto:brian.takita@gmail.com",
		title: "Github",
		$$slots: { default: [create_default_slot_6] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var a2 = new A({
		props: {
		href: "https://github.com/btakita",
		title: "Github",
		$$slots: { default: [create_default_slot_5] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var a3 = new A({
		props: {
		href: "http://www.linkedin.com/in/briantakita",
		title: "LinkedIn",
		$$slots: { default: [create_default_slot_4] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var if_block = (!ctx.compact) && create_if_block(ctx);

	return {
		c: function create() {
			section = element("section");
			ul = element("ul");
			li0 = element("li");
			a0.$$.fragment.c();
			t0 = space();
			li1 = element("li");
			a1.$$.fragment.c();
			t1 = space();
			li2 = element("li");
			a2.$$.fragment.c();
			t2 = space();
			li3 = element("li");
			a3.$$.fragment.c();
			t3 = space();
			if (if_block) if_block.c();
			this.h();
		},

		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			ul = claim_element(section_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li0_nodes = children(li0);

			a0.$$.fragment.l(li0_nodes);
			li0_nodes.forEach(detach$1);
			t0 = claim_text(ul_nodes, "\n\t\t\n    ");

			li1 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li1_nodes = children(li1);

			a1.$$.fragment.l(li1_nodes);
			li1_nodes.forEach(detach$1);
			t1 = claim_text(ul_nodes, "\n    ");

			li2 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li2_nodes = children(li2);

			a2.$$.fragment.l(li2_nodes);
			li2_nodes.forEach(detach$1);
			t2 = claim_text(ul_nodes, "\n    ");

			li3 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li3_nodes = children(li3);

			a3.$$.fragment.l(li3_nodes);
			li3_nodes.forEach(detach$1);
			t3 = claim_text(ul_nodes, "\n    ");
			if (if_block) if_block.l(ul_nodes);
			ul_nodes.forEach(detach$1);
			section_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			li0.className = "svelte-hl2s2u";
			add_location(li0, file$d, 18, 4, 826);
			li1.className = "svelte-hl2s2u";
			add_location(li1, file$d, 24, 4, 1030);
			li2.className = "svelte-hl2s2u";
			add_location(li2, file$d, 29, 4, 1170);
			li3.className = "svelte-hl2s2u";
			add_location(li3, file$d, 34, 4, 1303);
			ul.className = "svelte-hl2s2u";
			add_location(ul, file$d, 17, 2, 817);
			section.className = "links Links__SocialMedia svelte-hl2s2u";
			toggle_class(section, "compact", ctx.compact);
			add_location(section, file$d, 13, 0, 745);
		},

		m: function mount(target, anchor) {
			insert(target, section, anchor);
			append(section, ul);
			append(ul, li0);
			mount_component(a0, li0, null);
			append(ul, t0);
			append(ul, li1);
			mount_component(a1, li1, null);
			append(ul, t1);
			append(ul, li2);
			mount_component(a2, li2, null);
			append(ul, t2);
			append(ul, li3);
			mount_component(a3, li3, null);
			append(ul, t3);
			if (if_block) if_block.m(ul, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var a0_changes = {};
			if (changed.$$scope) a0_changes.$$scope = { changed, ctx };
			a0.$set(a0_changes);

			var a1_changes = {};
			if (changed.$$scope) a1_changes.$$scope = { changed, ctx };
			a1.$set(a1_changes);

			var a2_changes = {};
			if (changed.$$scope) a2_changes.$$scope = { changed, ctx };
			a2.$set(a2_changes);

			var a3_changes = {};
			if (changed.$$scope) a3_changes.$$scope = { changed, ctx };
			a3.$set(a3_changes);

			if (!ctx.compact) {
				if (!if_block) {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.i(1);
					if_block.m(ul, null);
				} else {
									if_block.i(1);
				}
			} else if (if_block) {
				group_outros();
				on_outro(() => {
					if_block.d(1);
					if_block = null;
				});

				if_block.o(1);
				check_outros();
			}

			if (changed.compact) {
				toggle_class(section, "compact", ctx.compact);
			}
		},

		i: function intro(local) {
			if (current) return;
			a0.$$.fragment.i(local);

			a1.$$.fragment.i(local);

			a2.$$.fragment.i(local);

			a3.$$.fragment.i(local);

			if (if_block) if_block.i();
			current = true;
		},

		o: function outro(local) {
			a0.$$.fragment.o(local);
			a1.$$.fragment.o(local);
			a2.$$.fragment.o(local);
			a3.$$.fragment.o(local);
			if (if_block) if_block.o();
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(section);
			}

			a0.$destroy();

			a1.$destroy();

			a2.$destroy();

			a3.$destroy();

			if (if_block) if_block.d();
		}
	};
}

function instance$e($$self, $$props, $$invalidate) {
	
	let { compact = false } = $$props;

	$$self.$set = $$props => {
		if ('compact' in $$props) $$invalidate('compact', compact = $$props.compact);
	};

	return { compact };
}

class Links__SocialMedia extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$e, create_fragment$e, safe_not_equal, ["compact"]);
	}

	get compact() {
		throw new Error("<Links__SocialMedia>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set compact(value) {
		throw new Error("<Links__SocialMedia>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/layout/Nav.html generated by Svelte v3.4.1 */

const file$e = "src/layout/Nav.html";

// (11:1) <Item__Nav href="/" selected="{$__path__sapper === '/'}">
function create_default_slot_5$1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Home");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Home");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(t);
			}
		}
	};
}

// (12:1) <Item__Nav href="/portfolio" selected="{$__path__sapper === '/portfolio'}">
function create_default_slot_4$1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Portfolio");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Portfolio");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(t);
			}
		}
	};
}

// (13:1) <Item__Nav href="/interests" selected="{$__path__sapper === '/interests'}">
function create_default_slot_3$1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Interests");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Interests");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(t);
			}
		}
	};
}

// (14:1) <Item__Nav href="/blog" selected="{$__path__sapper === '/blog'}">
function create_default_slot_2$1(ctx) {
	var t;

	return {
		c: function create() {
			t = text("Blog");
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "Blog");
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(t);
			}
		}
	};
}

// (16:2) <div slot="in">
function create_in_slot(ctx) {
	var div, current;

	var links__socialmedia = new Links__SocialMedia({
		props: { compact: true },
		$$inline: true
	});

	return {
		c: function create() {
			div = element("div");
			links__socialmedia.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true }, false);
			var div_nodes = children(div);

			links__socialmedia.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			attr(div, "slot", "in");
			add_location(div, file$e, 15, 2, 813);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			mount_component(links__socialmedia, div, null);
			current = true;
		},

		p: noop$1,

		i: function intro(local) {
			if (current) return;
			links__socialmedia.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			links__socialmedia.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(div);
			}

			links__socialmedia.$destroy();
		}
	};
}

// (15:1) <Item__Nav class="container__Links__SocialMedia">
function create_default_slot_1$1(ctx) {

	return {
		c: noop$1,
		l: noop$1,
		m: noop$1,
		p: noop$1,
		i: noop$1,
		o: noop$1,
		d: noop$1
	};
}

// (10:0) <Content__Nav class="content-wrap">
function create_default_slot$b(ctx) {
	var t0, t1, t2, t3, current;

	var item__nav0 = new Item__Nav({
		props: {
		href: "/",
		selected: ctx.$__path__sapper === '/',
		$$slots: { default: [create_default_slot_5$1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var item__nav1 = new Item__Nav({
		props: {
		href: "/portfolio",
		selected: ctx.$__path__sapper === '/portfolio',
		$$slots: { default: [create_default_slot_4$1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var item__nav2 = new Item__Nav({
		props: {
		href: "/interests",
		selected: ctx.$__path__sapper === '/interests',
		$$slots: { default: [create_default_slot_3$1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var item__nav3 = new Item__Nav({
		props: {
		href: "/blog",
		selected: ctx.$__path__sapper === '/blog',
		$$slots: { default: [create_default_slot_2$1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var item__nav4 = new Item__Nav({
		props: {
		class: "container__Links__SocialMedia",
		$$slots: {
		default: [create_default_slot_1$1],
		in: [create_in_slot]
	},
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			item__nav0.$$.fragment.c();
			t0 = space();
			item__nav1.$$.fragment.c();
			t1 = space();
			item__nav2.$$.fragment.c();
			t2 = space();
			item__nav3.$$.fragment.c();
			t3 = space();
			item__nav4.$$.fragment.c();
		},

		l: function claim(nodes) {
			item__nav0.$$.fragment.l(nodes);
			t0 = claim_text(nodes, "\n\t");
			item__nav1.$$.fragment.l(nodes);
			t1 = claim_text(nodes, "\n\t");
			item__nav2.$$.fragment.l(nodes);
			t2 = claim_text(nodes, "\n\t");
			item__nav3.$$.fragment.l(nodes);
			t3 = claim_text(nodes, "\n\t");
			item__nav4.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(item__nav0, target, anchor);
			insert(target, t0, anchor);
			mount_component(item__nav1, target, anchor);
			insert(target, t1, anchor);
			mount_component(item__nav2, target, anchor);
			insert(target, t2, anchor);
			mount_component(item__nav3, target, anchor);
			insert(target, t3, anchor);
			mount_component(item__nav4, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var item__nav0_changes = {};
			if (changed.$__path__sapper) item__nav0_changes.selected = ctx.$__path__sapper === '/';
			if (changed.$$scope) item__nav0_changes.$$scope = { changed, ctx };
			item__nav0.$set(item__nav0_changes);

			var item__nav1_changes = {};
			if (changed.$__path__sapper) item__nav1_changes.selected = ctx.$__path__sapper === '/portfolio';
			if (changed.$$scope) item__nav1_changes.$$scope = { changed, ctx };
			item__nav1.$set(item__nav1_changes);

			var item__nav2_changes = {};
			if (changed.$__path__sapper) item__nav2_changes.selected = ctx.$__path__sapper === '/interests';
			if (changed.$$scope) item__nav2_changes.$$scope = { changed, ctx };
			item__nav2.$set(item__nav2_changes);

			var item__nav3_changes = {};
			if (changed.$__path__sapper) item__nav3_changes.selected = ctx.$__path__sapper === '/blog';
			if (changed.$$scope) item__nav3_changes.$$scope = { changed, ctx };
			item__nav3.$set(item__nav3_changes);

			var item__nav4_changes = {};
			if (changed.$$scope) item__nav4_changes.$$scope = { changed, ctx };
			item__nav4.$set(item__nav4_changes);
		},

		i: function intro(local) {
			if (current) return;
			item__nav0.$$.fragment.i(local);

			item__nav1.$$.fragment.i(local);

			item__nav2.$$.fragment.i(local);

			item__nav3.$$.fragment.i(local);

			item__nav4.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			item__nav0.$$.fragment.o(local);
			item__nav1.$$.fragment.o(local);
			item__nav2.$$.fragment.o(local);
			item__nav3.$$.fragment.o(local);
			item__nav4.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			item__nav0.$destroy(detaching);

			if (detaching) {
				detach$1(t0);
			}

			item__nav1.$destroy(detaching);

			if (detaching) {
				detach$1(t1);
			}

			item__nav2.$destroy(detaching);

			if (detaching) {
				detach$1(t2);
			}

			item__nav3.$destroy(detaching);

			if (detaching) {
				detach$1(t3);
			}

			item__nav4.$destroy(detaching);
		}
	};
}

function create_fragment$f(ctx) {
	var t, current;

	var handle__nav = new Handle__Nav({
		props: { class: "Handle__Nav__briantakita" },
		$$inline: true
	});

	var content__nav = new Content__Nav({
		props: {
		class: "content-wrap",
		$$slots: { default: [create_default_slot$b] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			handle__nav.$$.fragment.c();
			t = space();
			content__nav.$$.fragment.c();
		},

		l: function claim(nodes) {
			handle__nav.$$.fragment.l(nodes);
			t = claim_text(nodes, "\n");
			content__nav.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(handle__nav, target, anchor);
			insert(target, t, anchor);
			mount_component(content__nav, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var content__nav_changes = {};
			if (changed.$$scope || changed.$__path__sapper) content__nav_changes.$$scope = { changed, ctx };
			content__nav.$set(content__nav_changes);
		},

		i: function intro(local) {
			if (current) return;
			handle__nav.$$.fragment.i(local);

			content__nav.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			handle__nav.$$.fragment.o(local);
			content__nav.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			handle__nav.$destroy(detaching);

			if (detaching) {
				detach$1(t);
			}

			content__nav.$destroy(detaching);
		}
	};
}

function instance$f($$self, $$props, $$invalidate) {
	let $__path__sapper;

	validate_store(__path__sapper, '__path__sapper');
	subscribe$1($$self, __path__sapper, $$value => { $__path__sapper = $$value; $$invalidate('$__path__sapper', $__path__sapper); });

	return { $__path__sapper };
}

class Nav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$f, create_fragment$f, safe_not_equal, []);
	}
}

/* src/layout/Header.html generated by Svelte v3.4.1 */

const file$f = "src/layout/Header.html";

function create_fragment$g(ctx) {
	var header, div1, div0, h1, a, t0, t1, t2, h2, raw_value = ctx.$__subheader || '', current;

	var nav = new Nav({ $$inline: true });

	return {
		c: function create() {
			header = element("header");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			a = element("a");
			t0 = text("Brian Takita");
			t1 = space();
			nav.$$.fragment.c();
			t2 = space();
			h2 = element("h2");
			this.h();
		},

		l: function claim(nodes) {
			header = claim_element(nodes, "HEADER", { class: true }, false);
			var header_nodes = children(header);

			div1 = claim_element(header_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			h1 = claim_element(div0_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			a = claim_element(h1_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t0 = claim_text(a_nodes, "Brian Takita");
			a_nodes.forEach(detach$1);
			h1_nodes.forEach(detach$1);
			div0_nodes.forEach(detach$1);
			div1_nodes.forEach(detach$1);
			t1 = claim_text(header_nodes, "\n\t");
			nav.$$.fragment.l(header_nodes);
			header_nodes.forEach(detach$1);
			t2 = claim_text(nodes, "\n");

			h2 = claim_element(nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			h2_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			a.href = "/";
			a.className = "svelte-17g3w8j";
			add_location(a, file$f, 8, 10, 227);
			h1.className = "svelte-17g3w8j";
			add_location(h1, file$f, 8, 6, 223);
			div0.className = "logo";
			add_location(div0, file$f, 7, 4, 198);
			div1.className = "content-wrap";
			add_location(div1, file$f, 6, 2, 167);
			header.className = "header svelte-17g3w8j";
			add_location(header, file$f, 5, 0, 141);
			h2.className = "subheader content-wrap svelte-17g3w8j";
			add_location(h2, file$f, 13, 0, 304);
		},

		m: function mount(target, anchor) {
			insert(target, header, anchor);
			append(header, div1);
			append(div1, div0);
			append(div0, h1);
			append(h1, a);
			append(a, t0);
			append(header, t1);
			mount_component(nav, header, null);
			insert(target, t2, anchor);
			insert(target, h2, anchor);
			h2.innerHTML = raw_value;
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.$__subheader) && raw_value !== (raw_value = ctx.$__subheader || '')) {
				h2.innerHTML = raw_value;
			}
		},

		i: function intro(local) {
			if (current) return;
			nav.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			nav.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(header);
			}

			nav.$destroy();

			if (detaching) {
				detach$1(t2);
				detach$1(h2);
			}
		}
	};
}

function instance$g($$self, $$props, $$invalidate) {
	let $__subheader;

	validate_store(__subheader, '__subheader');
	subscribe$1($$self, __subheader, $$value => { $__subheader = $$value; $$invalidate('$__subheader', $__subheader); });

	return { $__subheader };
}

class Header extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$g, create_fragment$g, safe_not_equal, []);
	}
}

/* src/layout/Footer.html generated by Svelte v3.4.1 */

const file$g = "src/layout/Footer.html";

function create_fragment$h(ctx) {
	var footer, div0, raw_value = ctx.$__prepend__footer || '', raw_after, t0, t1, section0, a0, t2, t3, div1, a1, t4, t5, a2, t6, t7, a3, t8, t9, a4, t10, t11, section1, p, t12, current;

	var links__socialmedia = new Links__SocialMedia({ $$inline: true });

	return {
		c: function create() {
			footer = element("footer");
			div0 = element("div");
			raw_after = element('noscript');
			t0 = space();
			links__socialmedia.$$.fragment.c();
			t1 = space();
			section0 = element("section");
			a0 = element("a");
			t2 = space();
			t3 = space();
			div1 = element("div");
			a1 = element("a");
			t4 = text("Home");
			t5 = text("\n    | ");
			a2 = element("a");
			t6 = text("Portfolio");
			t7 = text("\n    | ");
			a3 = element("a");
			t8 = text("Interests");
			t9 = text("\n    | ");
			a4 = element("a");
			t10 = text("Blog");
			t11 = space();
			section1 = element("section");
			p = element("p");
			t12 = text("© 2019 Brian Takita");
			this.h();
		},

		l: function claim(nodes) {
			footer = claim_element(nodes, "FOOTER", { class: true }, false);
			var footer_nodes = children(footer);

			div0 = claim_element(footer_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			raw_after = element('noscript');
			t0 = claim_text(div0_nodes, "\n    ");
			links__socialmedia.$$.fragment.l(div0_nodes);
			t1 = claim_text(div0_nodes, "\n    ");

			section0 = claim_element(div0_nodes, "SECTION", { class: true }, false);
			var section0_nodes = children(section0);

			a0 = claim_element(section0_nodes, "A", { href: true }, false);
			var a0_nodes = children(a0);

			t2 = claim_text(a0_nodes, " ");
			a0_nodes.forEach(detach$1);
			section0_nodes.forEach(detach$1);
			div0_nodes.forEach(detach$1);
			t3 = claim_text(footer_nodes, "\n  ");

			div1 = claim_element(footer_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			a1 = claim_element(div1_nodes, "A", { href: true }, false);
			var a1_nodes = children(a1);

			t4 = claim_text(a1_nodes, "Home");
			a1_nodes.forEach(detach$1);
			t5 = claim_text(div1_nodes, "\n    | ");

			a2 = claim_element(div1_nodes, "A", { href: true }, false);
			var a2_nodes = children(a2);

			t6 = claim_text(a2_nodes, "Portfolio");
			a2_nodes.forEach(detach$1);
			t7 = claim_text(div1_nodes, "\n    | ");

			a3 = claim_element(div1_nodes, "A", { href: true }, false);
			var a3_nodes = children(a3);

			t8 = claim_text(a3_nodes, "Interests");
			a3_nodes.forEach(detach$1);
			t9 = claim_text(div1_nodes, "\n    | ");

			a4 = claim_element(div1_nodes, "A", { href: true }, false);
			var a4_nodes = children(a4);

			t10 = claim_text(a4_nodes, "Blog");
			a4_nodes.forEach(detach$1);
			div1_nodes.forEach(detach$1);
			t11 = claim_text(footer_nodes, "\n  ");

			section1 = claim_element(footer_nodes, "SECTION", { class: true }, false);
			var section1_nodes = children(section1);

			p = claim_element(section1_nodes, "P", {}, false);
			var p_nodes = children(p);

			t12 = claim_text(p_nodes, "© 2019 Brian Takita");
			p_nodes.forEach(detach$1);
			section1_nodes.forEach(detach$1);
			footer_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			a0.href = "/sitemap.xml";
			add_location(a0, file$g, 9, 29, 302);
			section0.className = "sitemap svelte-1rxo53f";
			add_location(section0, file$g, 9, 4, 277);
			div0.className = "content-wrap";
			add_location(div0, file$g, 6, 2, 163);
			a1.href = "/";
			add_location(a1, file$g, 12, 4, 400);
			a2.href = "/portfolio";
			add_location(a2, file$g, 13, 6, 427);
			a3.href = "/interests";
			add_location(a3, file$g, 14, 6, 468);
			a4.href = "/blog";
			add_location(a4, file$g, 15, 6, 509);
			div1.className = "nav__footer content-wrap";
			add_location(div1, file$g, 11, 2, 357);
			add_location(p, file$g, 17, 24, 567);
			section1.className = "copy svelte-1rxo53f";
			add_location(section1, file$g, 17, 2, 545);
			footer.className = "svelte-1rxo53f";
			add_location(footer, file$g, 5, 0, 152);
		},

		m: function mount(target, anchor) {
			insert(target, footer, anchor);
			append(footer, div0);
			append(div0, raw_after);
			raw_after.insertAdjacentHTML("beforebegin", raw_value);
			append(div0, t0);
			mount_component(links__socialmedia, div0, null);
			append(div0, t1);
			append(div0, section0);
			append(section0, a0);
			append(a0, t2);
			append(footer, t3);
			append(footer, div1);
			append(div1, a1);
			append(a1, t4);
			append(div1, t5);
			append(div1, a2);
			append(a2, t6);
			append(div1, t7);
			append(div1, a3);
			append(a3, t8);
			append(div1, t9);
			append(div1, a4);
			append(a4, t10);
			append(footer, t11);
			append(footer, section1);
			append(section1, p);
			append(p, t12);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.$__prepend__footer) && raw_value !== (raw_value = ctx.$__prepend__footer || '')) {
				detach_before(raw_after);
				raw_after.insertAdjacentHTML("beforebegin", raw_value);
			}
		},

		i: function intro(local) {
			if (current) return;
			links__socialmedia.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			links__socialmedia.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(footer);
			}

			links__socialmedia.$destroy();
		}
	};
}

function instance$h($$self, $$props, $$invalidate) {
	let $__prepend__footer;

	validate_store(__prepend__footer, '__prepend__footer');
	subscribe$1($$self, __prepend__footer, $$value => { $__prepend__footer = $$value; $$invalidate('$__prepend__footer', $__prepend__footer); });

	return { $__prepend__footer };
}

class Footer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$h, create_fragment$h, safe_not_equal, []);
	}
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var highlight = createCommonjsModule(function (module, exports) {
/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  {
    factory(exports);
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }
    return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    // joinRe logically computes regexps.join(separator), but fixes the
    // backreferences so they continue to match.
    function joinRe(regexps, separator) {
      // backreferenceRe matches an open parenthesis or backreference. To avoid
      // an incorrect parse, it additionally matches the following:
      // - [...] elements, where the meaning of parentheses and escapes change
      // - other escape sequences, so we do not misparse escape sequences as
      //   interesting elements
      // - non-matching or lookahead parentheses, which do not capture. These
      //   follow the '(' with a '?'.
      var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      var numCaptures = 0;
      var ret = '';
      for (var i = 0; i < regexps.length; i++) {
        var offset = numCaptures;
        var re = reStr(regexps[i]);
        if (i > 0) {
          ret += separator;
        }
        while (re.length > 0) {
          var match = backreferenceRe.exec(re);
          if (match == null) {
            ret += re;
            break;
          }
          ret += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] == '\\' && match[1]) {
            // Adjust the backreference.
            ret += '\\' + String(Number(match[1]) + offset);
          } else {
            ret += match[0];
            if (match[0] == '(') {
              numCaptures++;
            }
          }
        }
      }
      return ret;
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (mode.endSameAsBegin)
          mode.end = mode.begin;
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(?:' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(joinRe(terminators, '|'), true) : {exec: function(/*s*/) {return null;}};
    }
    
    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function escapeRe(value) {
      return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
    }

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          if (mode.contains[i].endSameAsBegin) {
            mode.contains[i].endRe = escapeRe( mode.contains[i].beginRe.exec(lexeme)[0] );
          }
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag;

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip && !top.subLanguage) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          if (end_mode.endSameAsBegin) {
            end_mode.starts.endRe = end_mode.endRe;
          }
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR)
      ? value
      : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
          return '';
      });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  function autoDetection(name) {
    var lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.autoDetection = autoDetection;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));
});

var javascript = function(hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in of if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const export super debugger as async await static ' +
      // ECMAScript 6 modules import
      'import from as'
    ,
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
      'Promise'
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: /[{,]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // E4X / JSX
            begin: /</, end: /(\/\w+|\w+\/)>/,
            subLanguage: 'xml',
            contains: [
              {begin: /<\w+\s*\/>/, skip: true},
              {
                begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
                contains: [
                  {begin: /<\w+\s*\/>/, skip: true},
                  'self'
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor get set', end: /\{/, excludeEnd: true
      }
    ],
    illegal: /#(?!!)/
  };
};

var json = function(hljs) {
  var LITERALS = {literal: 'true false null'};
  var TYPES = [
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
  ];
  var VALUE_CONTAINER = {
    end: ',', endsWithParent: true, excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  var OBJECT = {
    begin: '{', end: '}',
    contains: [
      {
        className: 'attr',
        begin: /"/, end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n',
      },
      hljs.inherit(VALUE_CONTAINER, {begin: /:/})
    ],
    illegal: '\\S'
  };
  var ARRAY = {
    begin: '\\[', end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
  return {
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
};

var shell = function(hljs) {
  return {
    aliases: ['console'],
    contains: [
      {
        className: 'meta',
        begin: '^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]',
        starts: {
          end: '$', subLanguage: 'bash'
        }
      }
    ]
  }
};

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('js', javascript);
highlight.registerLanguage('json', json);
highlight.registerLanguage('shell', shell);

/**
 * @typedef HighlightJS
 */
/**
 * Calls `hljs.initHighlighting` in a DOM environment with dynamically loaded content.
 * @param {HighlightJS} hljs
 */
function refresh__initHighlighting(hljs) {
	if (_has__dom()) {
		hljs.initHighlighting.called = false;
		tick(hljs.initHighlighting);
	}
}

/* src/routes/_layout.html generated by Svelte v3.4.1 */

const file$h = "src/routes/_layout.html";

// (54:0) {#if _no__dom()}
function create_if_block_1(ctx) {
	var raw_value = _html__webfont__fout({ families: ['Open Sans'] }), raw_before, raw_after;

	return {
		c: function create() {
			raw_before = element('noscript');
			raw_after = element('noscript');
		},

		l: function claim(nodes) {
			raw_before = element('noscript');
			raw_after = element('noscript');
		},

		m: function mount(target, anchor) {
			insert(target, raw_before, anchor);
			raw_before.insertAdjacentHTML("afterend", raw_value);
			insert(target, raw_after, anchor);
		},

		p: noop$1,

		d: function destroy(detaching) {
			if (detaching) {
				detach_between(raw_before, raw_after);
				detach$1(raw_before);
				detach$1(raw_after);
			}
		}
	};
}

// (80:0) {#if _no__dom()}
function create_if_block$1(ctx) {
	var raw_value = _html__gtag(), raw_before, raw_after;

	return {
		c: function create() {
			raw_before = element('noscript');
			raw_after = element('noscript');
		},

		l: function claim(nodes) {
			raw_before = element('noscript');
			raw_after = element('noscript');
		},

		m: function mount(target, anchor) {
			insert(target, raw_before, anchor);
			raw_before.insertAdjacentHTML("afterend", raw_value);
			insert(target, raw_after, anchor);
		},

		p: noop$1,

		d: function destroy(detaching) {
			if (detaching) {
				detach_between(raw_before, raw_after);
				detach$1(raw_before);
				detach$1(raw_after);
			}
		}
	};
}

function create_fragment$i(ctx) {
	var title_value, t0, t1, div2, div0, t2, main, div1, t3, div2_class_value, t4, if_block1_anchor, current;

	document.title = title_value = "" + (ctx.$__title ? `${ctx.$__title} — ` : '') + "BrianTakita.com";

	var if_block0 = (_no__dom()) && create_if_block_1(ctx);

	var header = new Header({ $$inline: true });

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	var footer = new Footer({ $$inline: true });

	var if_block1 = (_no__dom()) && create_if_block$1(ctx);

	return {
		c: function create() {
			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			div2 = element("div");
			div0 = element("div");
			header.$$.fragment.c();
			t2 = space();
			main = element("main");
			div1 = element("div");

			if (default_slot) default_slot.c();
			t3 = space();
			footer.$$.fragment.c();
			t4 = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");
			if (if_block0) if_block0.l(nodes);
			t1 = claim_text(nodes, "\n\n");

			div2 = claim_element(nodes, "DIV", { version: true, class: true, style: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true, style: true }, false);
			var div0_nodes = children(div0);

			header.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach$1);
			t2 = claim_text(div2_nodes, "\n\n\t");

			main = claim_element(div2_nodes, "MAIN", { class: true }, false);
			var main_nodes = children(main);

			div1 = claim_element(main_nodes, "DIV", { class: true, tabindex: true }, false);
			var div1_nodes = children(div1);

			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach$1);
			t3 = claim_text(main_nodes, "\n\t\t");
			footer.$$.fragment.l(main_nodes);
			main_nodes.forEach(detach$1);
			div2_nodes.forEach(detach$1);
			t4 = claim_text(nodes, "\n\n");
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			div0.className = "container__Header svelte-1731lo2";
			div0.style.cssText = ctx.style__container__Header;
			toggle_class(div0, "fixed", ctx.height__container__Header);
			add_location(div0, file$h, 62, 1, 2120);

			div1.className = "content-wrap";
			div1.tabIndex = "0";
			add_location(div1, file$h, 72, 2, 2331);
			main.className = "content svelte-1731lo2";
			add_location(main, file$h, 71, 1, 2306);
			attr(div2, "version", ctx.version);
			div2.className = div2_class_value = "_layout " + (ctx.$__class__layout||'') + " svelte-1731lo2";
			div2.style.cssText = ctx.style__layout;
			add_location(div2, file$h, 57, 0, 2036);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			if (if_block0) if_block0.m(target, anchor);
			insert(target, t1, anchor);
			insert(target, div2, anchor);
			append(div2, div0);
			mount_component(header, div0, null);
			add_binding_callback(() => ctx.div0_binding(div0, null));
			append(div2, t2);
			append(div2, main);
			append(main, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			append(main, t3);
			mount_component(footer, main, null);
			insert(target, t4, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert(target, if_block1_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.$__title) && title_value !== (title_value = "" + (ctx.$__title ? `${ctx.$__title} — ` : '') + "BrianTakita.com")) {
				document.title = title_value;
			}

			if (_no__dom()) {
				if (if_block0) {
					if_block0.p(changed, ctx);
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(t1.parentNode, t1);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (changed.items) {
				ctx.div0_binding(null, div0);
				ctx.div0_binding(div0, null);
			}

			if (!current || changed.style__container__Header) {
				div0.style.cssText = ctx.style__container__Header;
			}

			if (changed.height__container__Header) {
				toggle_class(div0, "fixed", ctx.height__container__Header);
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (!current || changed.version) {
				attr(div2, "version", ctx.version);
			}

			if ((!current || changed.$__class__layout) && div2_class_value !== (div2_class_value = "_layout " + (ctx.$__class__layout||'') + " svelte-1731lo2")) {
				div2.className = div2_class_value;
			}

			if (!current || changed.style__layout) {
				div2.style.cssText = ctx.style__layout;
			}

			if (_no__dom()) {
				if (if_block1) {
					if_block1.p(changed, ctx);
				} else {
					if_block1 = create_if_block$1(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},

		i: function intro(local) {
			if (current) return;
			header.$$.fragment.i(local);

			if (default_slot && default_slot.i) default_slot.i(local);

			footer.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			header.$$.fragment.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			footer.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(t0);
			}

			if (if_block0) if_block0.d(detaching);

			if (detaching) {
				detach$1(t1);
				detach$1(div2);
			}

			header.$destroy();

			ctx.div0_binding(null, div0);

			if (default_slot) default_slot.d(detaching);

			footer.$destroy();

			if (detaching) {
				detach$1(t4);
			}

			if (if_block1) if_block1.d(detaching);

			if (detaching) {
				detach$1(if_block1_anchor);
			}
		}
	};
}

async function preload({ query, params }) {
		const response = await this.fetch('/version');
		const version = (await response.text()).trim();
		return {
			version
		}
	}

function instance$i($$self, $$props, $$invalidate) {
	let $page, $preloading, $session, $__title, $__class__layout;

	validate_store(__title, '__title');
	subscribe$1($$self, __title, $$value => { $__title = $$value; $$invalidate('$__title', $__title); });
	validate_store(__class__layout, '__class__layout');
	subscribe$1($$self, __class__layout, $$value => { $__class__layout = $$value; $$invalidate('$__class__layout', $__class__layout); });

	
	const { page, preloading, session } = stores$1(); validate_store(page, 'page'); subscribe$1($$self, page, $$value => { $page = $$value; $$invalidate('$page', $page); }); validate_store(preloading, 'preloading'); subscribe$1($$self, preloading, $$value => { $preloading = $$value; $$invalidate('$preloading', $preloading); }); validate_store(session, 'session'); subscribe$1($$self, session, $$value => { $session = $$value; $$invalidate('$session', $session); });
	let { version } = $$props;
	let dom__container__Header;
	let height__container__Header;
	let css__height__container__Header;
	let style__layout;
	let style__container__Header;
	__VERSION.set(version);

	let { $$slots = {}, $$scope } = $$props;

	function div0_binding($$node, check) {
		dom__container__Header = $$node;
		$$invalidate('dom__container__Header', dom__container__Header);
	}

	$$self.$set = $$props => {
		if ('version' in $$props) $$invalidate('version', version = $$props.version);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	$$self.$$.update = ($$dirty = { $page: 1, $preloading: 1, $session: 1, dom__container__Header: 1, height__container__Header: 1, css__height__container__Header: 1 }) => {
		if ($$dirty.$page) { __page__sapper.set($page); }
		if ($$dirty.$preloading) { __preloading__sapper.set($preloading); }
		if ($$dirty.$session) { __session__sapper.set($session); }
		if ($$dirty.dom__container__Header) { $$invalidate('height__container__Header', height__container__Header =
    		dom__container__Header
    		&& _BoundingClientRect(dom__container__Header).height); }
		if ($$dirty.height__container__Header) { $$invalidate('css__height__container__Header', css__height__container__Header = `${height__container__Header}px`); }
		if ($$dirty.css__height__container__Header) { $$invalidate('style__layout', style__layout = _style({ 'padding-top': css__height__container__Header })); }
		if ($$dirty.css__height__container__Header) { $$invalidate('style__container__Header', style__container__Header = _style({ height: css__height__container__Header })); }
		if ($$dirty.$page) { __page__sapper.set($page); }
		if ($$dirty.$page) { {
    		__prepend__footer.set('');
    		refresh__initHighlighting(highlight);
    	} }
	};

	return {
		page,
		preloading,
		session,
		version,
		dom__container__Header,
		height__container__Header,
		style__layout,
		style__container__Header,
		$__title,
		$__class__layout,
		div0_binding,
		$$slots,
		$$scope
	};
}

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$i, create_fragment$i, safe_not_equal, ["version"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.version === undefined && !('version' in props)) {
			console.warn("<Layout> was created without expected prop 'version'");
		}
	}

	get version() {
		throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set version(value) {
		throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/_error.html generated by Svelte v3.4.1 */

const file$i = "src/routes/_error.html";

// (15:0) {#if dev && error.stack}
function create_if_block$2(ctx) {
	var pre, t_value = ctx.error.stack, t;

	return {
		c: function create() {
			pre = element("pre");
			t = text(t_value);
			this.h();
		},

		l: function claim(nodes) {
			pre = claim_element(nodes, "PRE", {}, false);
			var pre_nodes = children(pre);

			t = claim_text(pre_nodes, t_value);
			pre_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			add_location(pre, file$i, 15, 1, 226);
		},

		m: function mount(target, anchor) {
			insert(target, pre, anchor);
			append(pre, t);
		},

		p: function update(changed, ctx) {
			if ((changed.error) && t_value !== (t_value = ctx.error.stack)) {
				set_data(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(pre);
			}
		}
	};
}

function create_fragment$j(ctx) {
	var title_value, t0, h1, t1, t2, p, t3_value = ctx.error.message, t3, t4, if_block_anchor;

	document.title = title_value = ctx.status;

	var if_block = (ctx.dev && ctx.error.stack) && create_if_block$2(ctx);

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(ctx.status);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, ctx.status);
			h1_nodes.forEach(detach$1);
			t2 = claim_text(nodes, "\n\n");

			p = claim_element(nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach$1);
			t4 = claim_text(nodes, "\n\n");
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			h1.className = "svelte-3hxzov";
			add_location(h1, file$i, 10, 0, 157);
			p.className = "svelte-3hxzov";
			add_location(p, file$i, 12, 0, 176);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, p, anchor);
			append(p, t3);
			insert(target, t4, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.status) && title_value !== (title_value = ctx.status)) {
				document.title = title_value;
			}

			if (changed.status) {
				set_data(t1, ctx.status);
			}

			if ((changed.error) && t3_value !== (t3_value = ctx.error.message)) {
				set_data(t3, t3_value);
			}

			if (ctx.dev && ctx.error.stack) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block$2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: noop$1,
		o: noop$1,

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(t0);
				detach$1(h1);
				detach$1(t2);
				detach$1(p);
				detach$1(t4);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach$1(if_block_anchor);
			}
		}
	};
}

function instance$j($$self, $$props, $$invalidate) {
	let { status, error } = $$props;
	const dev = "development" === 'development';

	$$self.$set = $$props => {
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
	};

	return { status, error, dev };
}

class Error$1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$j, create_fragment$j, safe_not_equal, ["status", "error"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<Error> was created without expected prop 'status'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<Error> was created without expected prop 'error'");
		}
	}

	get status() {
		throw new Error$1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error$1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error$1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error$1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.4.1 */

// (21:1) {:else}
function create_else_block(ctx) {
	var switch_instance_anchor, current;

	var switch_instance_spread_levels = [
		ctx.level1.props
	];

	var switch_value = ctx.level1.component;

	function switch_props(ctx) {
		let switch_instance_props = {};
		for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign$1(switch_instance_props, switch_instance_spread_levels[i]);
		}
		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c: function create() {
			if (switch_instance) switch_instance.$$.fragment.c();
			switch_instance_anchor = empty();
		},

		l: function claim(nodes) {
			if (switch_instance) switch_instance.$$.fragment.l(nodes);
			switch_instance_anchor = empty();
		},

		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = changed.level1 ? get_spread_update(switch_instance_spread_levels, [
				ctx.level1.props
			]) : {};

			if (switch_value !== (switch_value = ctx.level1.component)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;
					on_outro(() => {
						old_component.$destroy();
					});
					old_component.$$.fragment.o(1);
					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));

					switch_instance.$$.fragment.c();
					switch_instance.$$.fragment.i(1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}

			else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (switch_instance) switch_instance.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			if (switch_instance) switch_instance.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(switch_instance_anchor);
			}

			if (switch_instance) switch_instance.$destroy(detaching);
		}
	};
}

// (19:1) {#if error}
function create_if_block$3(ctx) {
	var current;

	var error_1 = new Error$1({
		props: { error: ctx.error, status: ctx.status },
		$$inline: true
	});

	return {
		c: function create() {
			error_1.$$.fragment.c();
		},

		l: function claim(nodes) {
			error_1.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(error_1, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var error_1_changes = {};
			if (changed.error) error_1_changes.error = ctx.error;
			if (changed.status) error_1_changes.status = ctx.status;
			error_1.$set(error_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			error_1.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			error_1.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			error_1.$destroy(detaching);
		}
	};
}

// (18:0) <Layout segment="{segments[0]}" {...level0.props}>
function create_default_slot$c(ctx) {
	var current_block_type_index, if_block, if_block_anchor, current;

	var if_block_creators = [
		create_if_block$3,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.error) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},

		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros();
				on_outro(() => {
					if_blocks[previous_block_index].d(1);
					if_blocks[previous_block_index] = null;
				});
				if_block.o(1);
				check_outros();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				if_block.i(1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (if_block) if_block.i();
			current = true;
		},

		o: function outro(local) {
			if (if_block) if_block.o();
			current = false;
		},

		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				detach$1(if_block_anchor);
			}
		}
	};
}

function create_fragment$k(ctx) {
	var current;

	var layout_spread_levels = [
		{ segment: ctx.segments[0] },
		ctx.level0.props
	];

	let layout_props = {
		$$slots: { default: [create_default_slot$c] },
		$$scope: { ctx }
	};
	for (var i = 0; i < layout_spread_levels.length; i += 1) {
		layout_props = assign$1(layout_props, layout_spread_levels[i]);
	}
	var layout = new Layout({ props: layout_props, $$inline: true });

	return {
		c: function create() {
			layout.$$.fragment.c();
		},

		l: function claim(nodes) {
			layout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(layout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var layout_changes = (changed.segments || changed.level0) ? get_spread_update(layout_spread_levels, [
				(changed.segments) && { segment: ctx.segments[0] },
				(changed.level0) && ctx.level0.props
			]) : {};
			if (changed.$$scope || changed.error || changed.status || changed.level1) layout_changes.$$scope = { changed, ctx };
			layout.$set(layout_changes);
		},

		i: function intro(local) {
			if (current) return;
			layout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			layout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			layout.$destroy(detaching);
		}
	};
}

function instance$k($$self, $$props, $$invalidate) {
	

	let { stores, error, status, segments, level0, level1 = null } = $$props;

	setContext(CONTEXT_KEY, stores);

	$$self.$set = $$props => {
		if ('stores' in $$props) $$invalidate('stores', stores = $$props.stores);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('segments' in $$props) $$invalidate('segments', segments = $$props.segments);
		if ('level0' in $$props) $$invalidate('level0', level0 = $$props.level0);
		if ('level1' in $$props) $$invalidate('level1', level1 = $$props.level1);
	};

	return {
		stores,
		error,
		status,
		segments,
		level0,
		level1
	};
}

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$k, create_fragment$k, safe_not_equal, ["stores", "error", "status", "segments", "level0", "level1"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.stores === undefined && !('stores' in props)) {
			console.warn("<App> was created without expected prop 'stores'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<App> was created without expected prop 'error'");
		}
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<App> was created without expected prop 'status'");
		}
		if (ctx.segments === undefined && !('segments' in props)) {
			console.warn("<App> was created without expected prop 'segments'");
		}
		if (ctx.level0 === undefined && !('level0' in props)) {
			console.warn("<App> was created without expected prop 'level0'");
		}
	}

	get stores() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set stores(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get status() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get segments() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segments(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level0() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level0(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level1() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level1(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

// This file is generated by Sapper — do not edit it!

const ignore = [/^\/sitemap.xml$/, /^\/feed.xml$/, /^\/archive.json$/, /^\/version\/?$/, /^\/posts.json$/, /^\/posts\/([^\/]+?).json$/];

const components = [
	{
		js: () => import('./index.e7f6c49a.js'),
		css: []
	},
	{
		js: () => import('./index.38f4d51f.js'),
		css: []
	},
	{
		js: () => import('./index.a23f1b6d.js'),
		css: []
	},
	{
		js: () => import('./index.580397cf.js'),
		css: []
	},
	{
		js: () => import('./20190403.de5bbbaf.js'),
		css: []
	},
	{
		js: () => import('./20190415.06951d6c.js'),
		css: []
	},
	{
		js: () => import('./20190403.de5bbbaf.js'),
		css: undefined
	},
	{
		js: () => import('./20190415.06951d6c.js'),
		css: undefined
	},
	{
		js: () => import('./[post_id].597f5f2d.js'),
		css: ["[post_id].597f5f2d.css"]
	},
	{
		js: () => import('./index.cfb38a00.js'),
		css: []
	},
	{
		js: () => import('./archive.7f69375e.js'),
		css: ["archive.7f69375e.css"]
	}
];

const routes = (d => [
	{
		// index.html
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// interests/index.html
		pattern: /^\/interests\/?$/,
		parts: [
			{ i: 1 }
		]
	},

	{
		// portfolio/index.html
		pattern: /^\/portfolio\/?$/,
		parts: [
			{ i: 2 }
		]
	},

	{
		// archive/index.html
		pattern: /^\/archive\/?$/,
		parts: [
			{ i: 3 }
		]
	},

	{
		// archive/20190403.html
		pattern: /^\/archive\/20190403\/?$/,
		parts: [
			null,
			{ i: 4 }
		]
	},

	{
		// archive/20190415.html
		pattern: /^\/archive\/20190415\/?$/,
		parts: [
			null,
			{ i: 5 }
		]
	},

	{
		// archive/previous.html
		pattern: /^\/archive\/previous\/?$/,
		parts: [
			null,
			{ i: 6 }
		]
	},

	{
		// archive/latest.html
		pattern: /^\/archive\/latest\/?$/,
		parts: [
			null,
			{ i: 7 }
		]
	},

	{
		// posts/[post_id].html
		pattern: /^\/posts\/([^\/]+?)\/?$/,
		parts: [
			null,
			{ i: 8, params: match => ({ post_id: d(match[1]) }) }
		]
	},

	{
		// blog/index.html
		pattern: /^\/blog\/?$/,
		parts: [
			{ i: 9 }
		]
	},

	{
		// blog/archive.html
		pattern: /^\/blog\/archive\/?$/,
		parts: [
			null,
			{ i: 10 }
		]
	}
])(decodeURIComponent);

function goto(href, opts = { replaceState: false }) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		_history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
		return navigate(target, null).then(() => {});
	}

	location.href = href;
	return new Promise(f => {}); // never resolves
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];

const stores = {
	page: writable({}),
	preloading: writable(null),
	session: writable(initial_data && initial_data.session)
};

let $session;
let session_dirty;

stores.session.subscribe(async value => {
	$session = value;

	if (!ready) return;
	session_dirty = true;

	const target = select_target(new URL(location.href));

	const token = current_token = {};
	const { redirect, props, branch } = await hydrate_target(target);
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
});

let prefetching


 = null;
function set_prefetching(href, promise) {
	prefetching = { href, promise };
}

let target;
function set_target(element) {
	target = element;
}

let uid = 1;
function set_uid(n) {
	uid = n;
}

let cid;
function set_cid(n) {
	cid = n;
}

const _history = typeof history !== 'undefined' ? history : {
	pushState: (state, title, href) => {},
	replaceState: (state, title, href) => {},
	scrollRestoration: ''
};

const scroll_history = {};

function extract_query(search) {
	const query = Object.create(null);
	if (search.length > 0) {
		search.slice(1).split('&').forEach(searchParam => {
			let [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
			if (typeof query[key] === 'string') query[key] = [query[key]];
			if (typeof query[key] === 'object') (query[key] ).push(value);
			else query[key] = value;
		});
	}
	return query;
}

function select_target(url) {
	if (url.origin !== location.origin) return null;
	if (!url.pathname.startsWith(initial_data.baseUrl)) return null;

	let path = url.pathname.slice(initial_data.baseUrl.length);

	if (path === '') {
		path = '/';
	}

	// avoid accidental clashes between server routes and page routes
	if (ignore.some(pattern => pattern.test(path))) return;

	for (let i = 0; i < routes.length; i += 1) {
		const route = routes[i];

		const match = route.pattern.exec(path);

		if (match) {
			const query = extract_query(url.search);
			const part = route.parts[route.parts.length - 1];
			const params = part.params ? part.params(match) : {};

			const page = { path, query, params };

			return { href: url.href, route, match, page };
		}
	}
}

function handle_error(url) {
	const { pathname, search } = location;
	const { session, preloaded, status, error } = initial_data;

	if (!root_preloaded) {
		root_preloaded = preloaded && preloaded[0];
	}

	const props = {
		error,
		status,
		session,
		level0: {
			props: root_preloaded
		},
		level1: {
			props: {
				status,
				error
			},
			component: Error$1
		},
		segments: preloaded

	};
	const query = extract_query(search);
	render(null, [], props, { path: pathname, query, params: {} });
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

async function navigate(target, id, noscroll, hash) {
	if (id) {
		// popstate or initial navigation
		cid = id;
	} else {
		const current_scroll = scroll_state();

		// clicked on a link. preserve scroll state
		scroll_history[cid] = current_scroll;

		id = cid = ++uid;
		scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
	}

	cid = id;

	if (root_component) stores.preloading.set(true);

	const loaded = prefetching && prefetching.href === target.href ?
		prefetching.promise :
		hydrate_target(target);

	prefetching = null;

	const token = current_token = {};
	const { redirect, props, branch } = await loaded;
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
	if (document.activeElement) document.activeElement.blur();

	if (!noscroll) {
		let scroll = scroll_history[id];

		if (hash) {
			// scroll is an element id (from a hash), we need to compute y.
			const deep_linked = document.getElementById(hash.slice(1));

			if (deep_linked) {
				scroll = {
					x: 0,
					y: deep_linked.getBoundingClientRect().top
				};
			}
		}

		scroll_history[cid] = scroll;
		if (scroll) scrollTo(scroll.x, scroll.y);
	}
}

async function render(redirect, branch, props, page) {
	if (redirect) return goto(redirect.location, { replaceState: true });

	stores.page.set(page);
	stores.preloading.set(false);

	if (root_component) {
		root_component.$set(props);
	} else {
		props.stores = {
			page: { subscribe: stores.page.subscribe },
			preloading: { subscribe: stores.preloading.subscribe },
			session: stores.session
		};
		props.level0 = {
			props: await root_preloaded
		};

		// first load — remove SSR'd <head> contents
		const start = document.querySelector('#sapper-head-start');
		const end = document.querySelector('#sapper-head-end');

		if (start && end) {
			while (start.nextSibling !== end) detach(start.nextSibling);
			detach(start);
			detach(end);
		}

		root_component = new App({
			target,
			props,
			hydrate: true
		});
	}

	current_branch = branch;
	ready = true;
	session_dirty = false;
}

async function hydrate_target(target)



 {
	const { route, page } = target;
	const segments = page.path.split('/').filter(Boolean);

	let redirect = null;

	const props = { error: null, status: 200, segments: [segments[0]] };

	const preload_context = {
		fetch: (url, opts) => fetch(url, opts),
		redirect: (statusCode, location) => {
			if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
				throw new Error(`Conflicting redirects`);
			}
			redirect = { statusCode, location };
		},
		error: (status, error) => {
			props.error = typeof error === 'string' ? new Error(error) : error;
			props.status = status;
		}
	};

	if (!root_preloaded) {
		root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
			path: page.path,
			query: page.query,
			params: {}
		}, $session);
	}

	let branch;
	let l = 1;

	try {
		const { pattern } = route;
		const match = pattern.exec(page.path);
		let segment_dirty = false;
		branch = await Promise.all(route.parts.map(async (part, i) => {
			const segment = segments[i];

			if (
				current_branch[i]
				&& (
					current_branch[i].segment !== segment
					|| (
						current_branch[i].match
						&& JSON.stringify(current_branch[i].match.slice(1, i+2)) !== JSON.stringify(match.slice(1, i+2))
					)
				)
			) segment_dirty = true;

			props.segments[l] = segments[i + 1]; // TODO make this less confusing
			if (!part) return { segment };

			const j = l++;

			if (!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i) {
				return current_branch[i];
			}

			segment_dirty = false;

			const { default: component, preload } = await load_component(components[part.i]);

			let preloaded;
			if (ready || !initial_data.preloaded[i + 1]) {
				preloaded = preload
					? await preload.call(preload_context, {
						path: page.path,
						query: page.query,
						params: part.params ? part.params(target.match) : {}
					}, $session)
					: {};
			} else {
				preloaded = initial_data.preloaded[i + 1];
			}

			return (props[`level${j}`] = { component, props: preloaded, segment, match, part: part.i });
		}));
	} catch (error) {
		props.error = error;
		props.status = 500;
		branch = [];
	}

	return { redirect, props, branch };
}

function load_css(chunk) {
	const href = `client/${chunk}`;
	if (document.querySelector(`link[href="${href}"]`)) return;

	return new Promise((fulfil, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;

		link.onload = () => fulfil();
		link.onerror = reject;

		document.head.appendChild(link);
	});
}

function load_component(component)


 {
	// TODO this is temporary — once placeholders are
	// always rewritten, scratch the ternary
	const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
	promises.unshift(component.js());
	return Promise.all(promises).then(values => values[0]);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

function prefetch(href) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		if (!prefetching || href !== prefetching.href) {
			set_prefetching(href, hydrate_target(target));
		}

		return prefetching.promise;
	}
}

function start(opts

) {
	if ('scrollRestoration' in _history) {
		_history.scrollRestoration = 'manual';
	}

	set_target(opts.target);

	addEventListener('click', handle_click);
	addEventListener('popstate', handle_popstate);

	// prefetch
	addEventListener('touchstart', trigger_prefetch);
	addEventListener('mousemove', handle_mousemove);

	return Promise.resolve().then(() => {
		const { hash, href } = location;

		_history.replaceState({ id: uid }, '', href);

		const url = new URL(location.href);

		if (initial_data.error) return handle_error(url);

		const target = select_target(url);
		if (target) return navigate(target, uid, false, hash);
	});
}

let mousemove_timeout;

function handle_mousemove(event) {
	clearTimeout(mousemove_timeout);
	mousemove_timeout = setTimeout(() => {
		trigger_prefetch(event);
	}, 20);
}

function trigger_prefetch(event) {
	const a = find_anchor(event.target);
	if (!a || a.rel !== 'prefetch') return;

	prefetch(a.href);
}

function handle_click(event) {
	// Adapted from https://github.com/visionmedia/page.js
	// MIT license https://github.com/visionmedia/page.js#license
	if (which(event) !== 1) return;
	if (event.metaKey || event.ctrlKey || event.shiftKey) return;
	if (event.defaultPrevented) return;

	const a = find_anchor(event.target);
	if (!a) return;

	if (!a.href) return;

	// check if link is inside an svg
	// in this case, both href and target are always inside an object
	const svg = typeof a.href === 'object' && a.href.constructor.name === 'SVGAnimatedString';
	const href = String(svg ? (a).href.baseVal : a.href);

	if (href === location.href) {
		if (!location.hash) event.preventDefault();
		return;
	}

	// Ignore if tag has
	// 1. 'download' attribute
	// 2. rel='external' attribute
	if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return;

	// Ignore if <a> has a target
	if (svg ? (a).target.baseVal : a.target) return;

	const url = new URL(href);

	// Don't handle hash changes
	if (url.pathname === location.pathname && url.search === location.search) return;

	const target = select_target(url);
	if (target) {
		const noscroll = a.hasAttribute('sapper-noscroll');
		navigate(target, null, noscroll, url.hash);
		event.preventDefault();
		_history.pushState({ id: cid }, '', url.href);
	}
}

function which(event) {
	return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
	while (node && node.nodeName.toUpperCase() !== 'A') node = node.parentNode; // SVG <a> elements have a lowercase name
	return node;
}

function handle_popstate(event) {
	scroll_history[cid] = scroll_state();

	if (event.state) {
		const url = new URL(location.href);
		const target = select_target(url);
		if (target) {
			navigate(target, event.state.id);
		} else {
			location.href = location.href;
		}
	} else {
		// hashchange
		set_uid(uid + 1);
		set_cid(uid);
		_history.replaceState({ id: cid }, '', location.href);
	}
}

const stores$1 = () => getContext(CONTEXT_KEY);

start({
	target: document.querySelector('#sapper'),
});
//# sourceMappingURL=client.fde6b329.js.map
