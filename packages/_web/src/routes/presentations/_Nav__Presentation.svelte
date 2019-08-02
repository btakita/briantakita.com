<script>
	import FA_arrow_right_solid from '@ctx-core/fontawesome/ui/FA-arrow-right-solid.svelte'
</script>

<div class="layout__presentation">
	<header>
		<a href="/"><img src="/favicon.svg" title="BrianTakita.com" alt="BrianTakita.com"></a>
		<FA_arrow_right_solid></FA_arrow_right_solid>
		<a href="/presentations" title="Presentations" alt="Presentations">P</a>
	</header>

	<slot></slot>
</div>

<style type="text/scss" global>
	@import "~@briantakita/css/variables";
	.layout__presentation {
		header {
			position: fixed;
			display: flex;
			top: 0;
			left: 0;
			height: 1rem;
			padding: 1rem;
			z-index: 1;
			> * {
				display: block;
			}
			svg {
				height: 1rem;
				width: 1rem;
				fill: $color__text;
			}
			a {
				line-height: 1rem;
				min-height: 1rem;
				max-height: 1rem;
				text-decoration: none;
				vertical-align: top;
				img {
					height: 1rem;
					width: 1rem;
				}
			}
		}
	}
</style>
