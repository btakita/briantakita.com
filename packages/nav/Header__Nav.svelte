<script>
import Header__Nav from '@ctx-core/nav/Header__Nav.svelte'
import FA_times_solid from '@ctx-core/fontawesome/ui/FA-times-solid.svelte'
</script>

<Header__Nav>
	<div slot="in__close">
		<FA_times_solid></FA_times_solid>
	</div>
</Header__Nav>

<style type="text/scss" global>
@import '~@briantakita/css/variables';
.Header__Nav {
	display: none;
	padding: 1em 0 0;
	@media(max-width: #{$width__wide}) {
		display: block;
	}
	[slot=in__close] {
		svg {
			fill: $color__text;
			height: 1rem;
			width: 1rem;
		}
	}
}
</style>
