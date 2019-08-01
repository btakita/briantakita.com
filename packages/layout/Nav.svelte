<script>
	import { __path__sapper } from '@ctx-core/sapper/store'
	import Handle__Nav from '@ctx-core/nav/Handle__Nav.svelte'
	import Content__Nav from '@ctx-core/nav/Content__Nav.svelte'
	import Item__Nav from '@ctx-core/nav/Item__Nav.svelte'
	import Links__SocialMedia from '@briantakita/nav/Links__SocialMedia.svelte'
</script>

<Handle__Nav class="Handle__Nav__briantakita"></Handle__Nav>
<Content__Nav class="content-wrap">
	<Item__Nav href="/" selected="{$__path__sapper === '/'}">Home</Item__Nav>
	<Item__Nav href="/portfolio" selected="{$__path__sapper === '/portfolio'}">Portfolio</Item__Nav>
	<Item__Nav href="/interests" selected="{$__path__sapper === '/interests'}">Interests</Item__Nav>
	<Item__Nav href="/blog" selected="{$__path__sapper === '/blog'}">Blog</Item__Nav>
	<Item__Nav class="container__Links__SocialMedia">
		<div slot="in">
			<Links__SocialMedia compact="{true}"></Links__SocialMedia>
		</div>
	</Item__Nav>
</Content__Nav>

<style type="text/scss" global>
	@import '~@briantakita/css/variables';
	@import '~@ctx-core/nav/lib';
	@include Handle__Nav();
	@include Content__Nav();
	@include Item__Nav__selected-underline($background: $color__text);
	@media(max-width: #{$width__nav__slider}) {
		@include Item__Nav__selected-background($background: mix($color__body, $color__header, 10%));
		@include Item__Nav__cancel-selected-underline();
	}
	@include Content__Nav__slide-from-right();
	.Handle__Nav {
		fill: $color__link__mid;
		@media(max-width: #{$width__nav__slider}) {
			position: absolute;
			top: 0.6rem;
			right: 0.4rem;
		}
	}
	.Content__Nav.content-wrap {
		height: auto;
		z-index: 1;
		@media(max-width: #{$width__nav__slider}) {
			width: 10rem;
			position: fixed;
			top: 0;
			height: 100vh;
			background-color: mix($color__body, $color__header, 50%);
		}
		.dialog {
			.container__slot__Content__Nav {
				display: flex;
				.Item__Nav {
					padding: 0.2rem 0;
					flex: 0;
					&.container__Links__SocialMedia {
						flex: 1;
						.Links__SocialMedia {
							display: flex;
							justify-content: flex-end;
							width: 100%;
							padding: 0 0.4rem;
							@media(max-width: #{$width__nav__slider}) {
								justify-content: center;
							}
							ul {
								width: auto;
							}
						}
					}
					a {
						margin-right: 0.8rem;
						fill: $color__text;
						&.selected {
							box-shadow: 0 2px 0 $color__link__mid;
						}
					}
				}
			}
		}
	}
</style>
