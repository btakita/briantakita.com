<script>
  import A from '@ctx-core/a__target/A__Target.svelte'
  import FA_rss_solid from '@ctx-core/fontawesome/ui/FA-rss-solid.svelte'
  import FA_envelope_solid from '@ctx-core/fontawesome/ui/FA-envelope-solid.svelte'
  import FA_linkedin_brand from '@ctx-core/fontawesome/ui/FA-linkedin-brand.svelte'
  import FA_github_brand from '@ctx-core/fontawesome/ui/FA-github-brand.svelte'
  import FA_facebook_brand from '@ctx-core/fontawesome/ui/FA-facebook-brand.svelte'
  import FA_twitter_brand from '@ctx-core/fontawesome/ui/FA-twitter-brand.svelte'
  import FA_wordpress_brand from '@ctx-core/fontawesome/ui/FA-wordpress-brand.svelte'
  import FA_quora_brand from '@ctx-core/fontawesome/ui/FA-quora-brand.svelte'
	export let compact = false
</script>

<section
	class="links Links__SocialMedia"
	class:compact={compact}
>
  <ul>
    <li>
      <A href="/feed.xml" title="Atom Feed">
        <FA_rss_solid></FA_rss_solid>
      </A>
    </li>
		<!--				<li class="about-me"><a href="http://about.me/brian_takita">about.me</a></li>-->
    <li>
      <A href="mailto:brian.takita@gmail.com" title="Github">
        <FA_envelope_solid></FA_envelope_solid>
      </A>
    </li>
    <li>
      <A href="https://github.com/btakita" title="Github">
        <FA_github_brand></FA_github_brand>
      </A>
    </li>
    <li>
      <A href="http://www.linkedin.com/in/briantakita" title="LinkedIn">
        <FA_linkedin_brand></FA_linkedin_brand>
      </A>
    </li>
    {#if !compact}
      <li>
        <A href="https://www.facebook.com/brian.takita" title="Facebook">
          <FA_facebook_brand></FA_facebook_brand>
        </A>
      </li>
		<!--				<li><a href="http://briantakita.brandyourself.com/">BrandYourself</a></li>-->
      <li>
        <A href="https://twitter.com/briantakita" title="Twitter">
          <FA_twitter_brand></FA_twitter_brand>
        </A>
      </li>
      <li>
        <A href="http://briantakita.wordpress.com/" title="Wordpress Blog">
          <FA_wordpress_brand></FA_wordpress_brand>
        </A>
      </li>
      <li>
        <A href="https://www.quora.com/Brian-Takita" title="Quora">
          <FA_quora_brand></FA_quora_brand>
        </A>
      </li>
    {/if}
  </ul>
</section>

<style type="text/scss">
  @import '~@briantakita/web/src/css/variables';
	.Links__SocialMedia {
		padding: 1.6em 0 0;
		font-size: 0.9em;
		overflow: hidden;
		&.compact {
			padding: 0;
			ul {
				margin: 0;
				height: 1.9rem;
				position: relative;
				li {
					height: 100%;
					position: relative;
				}
			}
		}
		ul {
			overflow: hidden;
			list-style-type: none;
			@media(max-width: #{$width__nav__slider}) {
				overflow: visible;
        width: 100%;
        padding: 0;
			}
			li {
				float: left;
				width: 2rem;
				height: 2rem;
				margin: 0 0.8rem 0 0;
				@media(max-width: #{$width__nav__slider}) {
					width: 1.4rem;
					height: 1.4rem;
					margin: 0 0.4rem 0 0;
				}
			}
		}
	}
</style>
