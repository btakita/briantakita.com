<script>
	import { _BoundingClientRect } from '@ctx-core/dom'
	import { _style } from '@ctx-core/html'
	import { __class__layout } from './store'
	import { __VERSION } from '@ctx-core/env/store'
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
	let dom__container__Header
	//region height__container__Header
	let height__container__Header
	$: height__container__Header =
		dom__container__Header
		&& _BoundingClientRect(dom__container__Header).height
	//endregion
	//region style__container__Header
	let style__container__Header
	$: style__container__Header = _style({ height: css__height__container__Header })
	//endregion
	//region style__layout
	let style__layout
	$: style__layout = _style({ 'padding-top': css__height__container__Header })
	//endregion
	//region css__height__container__Header
	let css__height__container__Header
	$: css__height__container__Header = `${height__container__Header}px`
	//endregion
</script>

<div
	version="{$__VERSION}"
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
