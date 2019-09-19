<script>
import Item__Nav from '@ctx-core/nav/Item__Nav.svelte'
</script>

<Item__Nav {...$$props}>
	<slot name="in"></slot>
	<slot></slot>
</Item__Nav>

<style type="text/scss" global>
@import '~@briantakita/css/variables';
@import '~@ctx-core/nav/lib';
@include Item__Nav__selected-underline($background: $color__text);
@media(max-width: #{$width__wide}) {
	@include Item__Nav__selected-background($background: mix($color__body, $color__header, 10%));
	@include Item__Nav__cancel-selected-underline();
}
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
			@media(max-width: #{$width__wide}) {
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

</style>
