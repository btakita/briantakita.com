<script>
import { __prepend__footer } from './store'
import Links__SocialMedia from '@briantakita/nav/Links__SocialMedia.svelte'
</script>

<footer>
  <div class="content-wrap">
    {@html $__prepend__footer || ''}
    <Links__SocialMedia></Links__SocialMedia>
    <section class="sitemap"><a href="/sitemap.xml">&nbsp;</a></section>
  </div>
  <div class="nav__footer content-wrap">
    <a href="/">Home</a>
    | <a href="/portfolio">Portfolio</a>
    | <a href="/interests">Interests</a>
    | <a href="/blog">Blog</a>
  </div>
  <section class="copy"><p>&copy; 2019 Brian Takita</p></section>
</footer>

<style type="text/scss">
@import '~@briantakita/css/variables';
:global(footer) {
	:global(svg) {
		fill: $color__text;
	}
}
footer {
	margin: 3em 0;
	> .copy {
		margin-top: 1em;
		padding: 2.2em 3em;
		font-size: 0.7em;
		text-align: center;
		font-style: italic;
	}
	.sitemap {
		display: none;
	}
}
</style>
