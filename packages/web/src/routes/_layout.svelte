<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/version')
		const version = (await response.text()).trim()
		return {
			version
		}
	}
</script>

<script>
	import { stores } from '@sapper/app'
	import { _style } from '@ctx-core/html'
	import { _has__dom, _no__dom, _BoundingClientRect } from '@ctx-core/dom'
	import { andand, tick } from '@ctx-core/function'
	import { _html__webfont__fout, _html__gtag } from '@ctx-core/google/html'
	import { __VERSION } from '@ctx-core/env/store'
	import { __session__sapper, __preloading__sapper, __page__sapper, __path__sapper } from '@ctx-core/sapper/store'
	import { __title, __class__layout, __prepend__footer } from './_layout/store'
	import Header from './_layout/Header.svelte'
	import Footer from './_layout/Footer.svelte'
	import { hljs } from './_highlight.js/lib'
	import { refresh__initHighlighting } from '@ctx-core/highlight.js'
	const { page, preloading, session } = stores()
	export let segment
	export let version
	let dom__container__Header
	let height__container__Header
	let css__height__container__Header
	let style__layout
	let style__container__Header
	__VERSION.set(version)
	$: __page__sapper.set($page)
	$: __preloading__sapper.set($preloading)
	$: __session__sapper.set($session)
	$: height__container__Header =
		dom__container__Header
		&& _BoundingClientRect(dom__container__Header).height
	$: css__height__container__Header = `${height__container__Header}px`
	$: style__layout = _style({ 'padding-top': css__height__container__Header })
	$: style__container__Header = _style({ height: css__height__container__Header })
	$: __page__sapper.set($page)
	$: {
		$page
		__prepend__footer.set('')
		refresh__initHighlighting(hljs)
	}
</script>

<svelte:head>
	<title>{$__title ? `${$__title} — ` : ''}BrianTakita.com</title>
</svelte:head>

{#if _no__dom()}
	{@html _html__webfont__fout({ families: ['Open Sans'] })}
{/if}

<div
	{version}
	class="_layout {$__class__layout||''}"
	style="{style__layout}"
>
	<div
		bind:this="{dom__container__Header}"
		class="container__Header"
		class:fixed="{height__container__Header}"
		style="{style__container__Header}"
	>
		<Header></Header>
	</div>

	<main class="content">
		<div class="content-wrap" tabindex="0">
			<slot></slot>
		</div>
		<Footer></Footer>
	</main>
</div>

{#if _no__dom()}
	{@html _html__gtag()}
{/if}

<style type="text/scss" global>
	@import '~@briantakita/web/src/css/variables';
	* {
		@import '~highlight.js/styles/dracula';
	}
	* {
		box-sizing: border-box;
	}
	html {
		opacity: 0;
		&.wf-active {
			opacity: 1;
		}
	}
	body {
		font-family: 'Open Sans', arial, sans-serif;
		font-size: 21px;
		line-height: 1.52;
		background-color: $color__body;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		color: $color__text;
		@media (min-width: 1600px) {
			font-size: 26px;
		}
		@media (max-width: 900px) {
			font-size: 18px;
		}
	}
	body, a {
		color: $color__text;
	}
	.content-wrap {
		width: 100%;
		margin: 0 auto;
		padding: 0 1em;
		@media (min-width: $width__nav__slider) {
			width: 60rem;
			padding: 0;
		}
	}
	h1, h2, h3, h4, h5, h6, p, body, a, img, blockquote, pre {
		margin: 0;
		padding: 0;
		border: 0;
	}
	h1 {
		font-size: 2em;
		margin-bottom: 1em;
		text-align: center;
	}
	h2 {
		font-size: 1.6em;
		font-weight: 400;
		line-height: 1.43;
	}
	h3 {
		font-style: italic;
		font-weight: 400;
		font-size: 1.4em;
		margin-top: 1.8em;
		margin-bottom: 0.8em;
	}
	blockquote {
		margin: 1.2em 3em;
		padding-left: 1em;
		font-style: italic;
	}
	hr {
		border: 0;
		border-top: 1px dashed #d2d2d2;
		height: 0;
		margin: 1.6em 0;
	}
	iframe {
		display: block;
		margin: 0 auto;
	}
	p, ul {
		margin-bottom: 1.52em;
	}
	a {
		&:hover {
			text-decoration: underline;
		}
	}
	.content {
		header {
			border-top: 1px dashed #d2d2d2;
			margin: 0.7rem 0 0;
			h2 {
				font-style: italic;
				text-align: center;
				font-weight: 400;
				margin: 0.8em 0;
				font-size: 1.4em;
				a {
					text-decoration: none;
				}
			}
			.date {
				text-align: center;
				font-size: 0.8em;
				margin-top: -0.7em;
				text-rendering: auto;
				letter-spacing: 1px;
				font-variant: small-caps;
				text-transform: lowercase;
				font-weight: 400;
				span {
					background-color: $color__highlight__text;
					padding: 0 0.7em;
				}
			}
		}
	}
	.post {
		margin: 1em 0 2.5em;
		hr.more {
			display: none;
		}
		code {
			font-family: 'Anonymous Pro', monospace;
			font-size: 0.85em;
			&.lang-markdown {
				color: #424242;
				.header, .strong {
					font-weight: bold;
				}
				&.emphasis {
					font-style: italic;
				}
				.horizontal_rule, .link_label, .code, .header, .link_url {
					color: #555;
				}
				.blockquote, .bullet {
					color: #bbb;
				}
			}
		}
		pre {
			padding: 0 0 1em;
			code {
				display: block;
				line-height: 1.1;
			}
		}
		p {
			code, .code {
				padding: 0.1em 0.3em 0.2em;
				border-radius: 0.3em;
				position: relative;
				top: -0.15em;
				color: #fff;
				white-space: nowrap;
			}
		}
	}
	img {
		width: 100%;
	}
	._layout {
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		.container__Header {
			flex: 0;
			z-index: 1;
			&.fixed {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
			}
		}
		main {
			flex: 1;
			position: relative;
			display: flex;
			flex-direction: column;
			overflow: auto;
			min-height: 600px;
			width: 100%;
			padding: 0;
			margin: 0 auto;
			box-sizing: border-box;
			z-index: 0;
		}
	}
</style>
