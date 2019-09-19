<script context="module">
export async function preload({ query, params }) {
	const response = await this.fetch('/version')
	const version = (await response.text()).trim()
	return {
		version,
	}
}
</script>

<script>
import { stores } from '@sapper/app'
import { _no__dom } from '@ctx-core/dom'
import { _html__webfont__fout, _html__gtag } from '@ctx-core/google/html'
import { __VERSION } from '@ctx-core/env/store'
import { __session__sapper, __preloading__sapper, __page__sapper, __path__sapper } from '@ctx-core/sapper/store'
import { __title, __class__layout, __prepend__footer } from '@briantakita/layout/store'
import Theme from '@briantakita/theme/Theme.svelte'
import { hljs } from '@briantakita/highlight.js'
import { refresh__initHighlighting } from '@ctx-core/highlight.js'
const { page, preloading, session } = stores()
export let segment
export let version
__VERSION.set(version)
$: __page__sapper.set($page)
$: __preloading__sapper.set($preloading)
$: __session__sapper.set($session)
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

<Theme></Theme>

{#if _no__dom()}
	{@html _html__webfont__fout({ families: ['Open Sans'] })}
{/if}

<slot></slot>

{#if _no__dom()}
	{@html _html__gtag()}
{/if}

<style type="text/scss" global>
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
