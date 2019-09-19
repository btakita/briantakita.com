<script>
import { onMount } from 'svelte'
import bespoke from 'bespoke'
import bespoke_classes from 'bespoke-classes'
import bespoke_hash from 'bespoke-hash'
import bespoke_keys from 'bespoke-keys'
import bespoke_touch from 'bespoke-touch'
import Svg__graph__tag__reactive from './graph__tag__reactive.dot.svg'
let node__presentation
onMount(() => bespoke.from(node__presentation, [
	bespoke_classes(),
	bespoke_hash(),
	bespoke_keys(),
	bespoke_touch(),
]))
</script>

<article
	bind:this="{node__presentation}"
	id="presentation"
	class="bespoke-parent"
>
	<section class="bespoke-slide slide-reactive-tag-graphs">
		<h1>Reactive Tag Graphs</h1>
		<code>
			reactive_tag_graph
		</code>
		<code>
			graph__tag__reactive
		</code>
		<div class="container__svg">
			<Svg__graph__tag__reactive></Svg__graph__tag__reactive>
		</div>
	</section>
	<section class="bespoke-slide">
		<h1>Unique abstraction names</h1>
		<p>_: tags on the left, type on the right</p>
		<p>product_id, selected_member_name, form_ctx</p>
		<hr>
		<p>__: type on the left, tags on the right</p>
		<p>id__product, name__member__selected, ctx__form</p>
	</section>
	<section class="bespoke-slide">
		<h1>Use across all layers of the stack (frontend, services, api, database)</h1>
		<p>The abstraction has the same meaning independent of where it's used</p>
	</section>
	<section class="bespoke-slide">
		<h1>What about css, url's, or filenames?</h1>
		<h2>Composes with other rules such as SEO</h2>
		<p>- is analogous to _</p>
		<p>blue-color, my-element-height, /posts/new-opportunities-for-you, app-config.json</p>
		<hr>
		<p>-- is analogous to __</p>
		<p>color--blue, height--my-element, /posts/you--new-opportunities, config--app.json</p>
	</section>
	<section class="bespoke-slide">
		<h1>Ambiguous names requires mental modeling to build context</h1>
		<p>id -> of what?</p>
		<p>customer_id -> easy to scan, no further thought required</p>
		<p>customer_id__preferred -> tags make abstractions more specific</p>
	</section>
	<section class="bespoke-slide">
		<h1>Reading Left to Right</h1>
		<p>customer_id__preferred</p>
		<hr>
		<p>Initial scan of leftmost tag (type) makes it quicker to work with in code</p>
		<p>Tags that add context can be placed on the right</p>
	</section>
</article>

<style type="text/scss" global>
	@import "~@briantakita/css/variables";
.bespoke-parent {
	position: absolute;
	font-size: 16px;
	line-height: 28px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	> section {
		display: none;
		$height--h1: 25px;
		&.bespoke-slide {
			position: absolute;
			align-items: center;
			justify-content: center;
			display: flex;
			flex-direction: column;
			left: 50%;
			height: calc(100% - 2rem - 4rem);
			width: 100%;
			margin: 2rem 0 4rem -50%;
			padding: $height--h1 0 0;
			-webkit-transition: all .3s ease;
			-moz-transition: all .3s ease;
			-ms-transition: all .3s ease;
			-o-transition: all .3s ease;
			transition: all .3s ease;
			@media only screen and (min-width: $desktop-min) {
				width: 50%;
				margin-left: -25%;
			}
			&.bespoke-inactive {
				opacity: 0;
			}
			&.bespoke-active {
				opacity: 1;
			}
			&.slide-reactive-tag-graphs {
				svg {
					margin-top: 1rem;
					filter: invert(1);
					@media only screen and (min-width: $desktop-min) {
						zoom: 2;
					}
				}
			}
			* {
				box-sizing: border-box;
				-moz-box-sizing: border-box;
				margin: 0;
				padding: 0;
				color: $color__text;
				font-size: 24px;
				line-height: 1.5em;
			}
			h1 {
				height: $height--h1;
				width: 640px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -322px;
				font-size: 32px;
				letter-spacing: -1px;
			}
			h2 {
				margin-bottom: 2em;
			}
			hr {
				width: 50%;
				margin: 0.2rem 0;
			}
		}
	}
}
</style>
