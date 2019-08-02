<script>
	import { __path__sapper } from '@ctx-core/sapper/store'
	import Content__Nav from '@ctx-core/nav/Content__Nav.svelte'
	import Header__Nav from './Header__Nav.svelte'
	import Item__Nav from './Item__Nav.svelte'
	import Links__SocialMedia from './Links__SocialMedia.svelte'
</script>

<Content__Nav class="content-wrap">
	<Header__Nav></Header__Nav>
	<Item__Nav href="/" selected="{$__path__sapper === '/'}">Home</Item__Nav>
	<Item__Nav href="/portfolio" selected="{$__path__sapper === '/portfolio'}">Portfolio</Item__Nav>
	<Item__Nav href="/interests" selected="{$__path__sapper === '/interests'}">Interests</Item__Nav>
	<Item__Nav href="/blog" selected="{$__path__sapper === '/blog'}">Blog</Item__Nav>
	<Item__Nav href="/presentations" selected="{$__path__sapper === '/presentations'}">Presentations</Item__Nav>
	<Item__Nav class="container__Links__SocialMedia">
		<div slot="in">
			<Links__SocialMedia compact="{true}"></Links__SocialMedia>
		</div>
	</Item__Nav>
</Content__Nav>

<style type="text/scss" global>
	@import '~@briantakita/css/variables';
	@import '~@ctx-core/nav/lib';
	@include Content__Nav($width__wide: $width__wide);
	@include Content__Nav__slide-from-right($width__wide: $width__wide);
	.Content__Nav.content-wrap {
		height: auto;
		display: flex;
		z-index: 1;
		@media(max-width: #{$width__wide}) {
			width: 10rem;
			position: fixed;
			top: 0;
			height: 100vh;
			background-color: mix($color__body, $color__header, 50%);
		}
		.Item__Nav {
			[slot=in] {
				width: 100%;
			}
		}
	}
</style>
