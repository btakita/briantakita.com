<script>
	import Handle__Nav from '@ctx-core/nav/Handle__Nav.svelte'
	import FA_bars_solid from '@ctx-core/fontawesome/ui/FA-bars-solid.svelte'
</script>

<Handle__Nav></Handle__Nav>

<style type="text/scss" global>
	@import '~@briantakita/web/src/css/variables';
	@import '~@ctx-core/nav/lib';
	@include Handle__Nav();
	.Handle__Nav {
		fill: $color__link__mid;
		@media(max-width: #{$width__wide}) {
			position: absolute;
			top: 0.6rem;
			right: 0.4rem;
		}
	}
</style>
