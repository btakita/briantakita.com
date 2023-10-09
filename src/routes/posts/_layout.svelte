<script context="module">
	export async function preload({ path, params, query, }) {
		return {
			path,
		}
	}
</script>
<script>
	import { __class__layout, __prepend__footer } from '@briantakita/web/src/layout/store'
	import Date__Local from '@ctx-core/date/Date__Local.svelte'
	import { __subheader } from '@briantakita/web/src/layout/store'
	import { __frontmatter } from '@ctx-core/markdown/store'
	export let path
	export let segment
	__class__layout.set('post-detail')
	__prepend__footer.set(`<div class="nav"><a href="/app/briantakita.com/static"> « Full blog</a></div>`)
	$: date = $__frontmatter && new Date($__frontmatter.date)
	$: txt__date = ($__frontmatter && $__frontmatter.date) || ''
	$: title = ($__frontmatter && $__frontmatter.title) || ''
</script>

<section class="post">
	<div class="content">
		<header>
			<p class="date"><span><Date__Local date="{txt__date}"></Date__Local></span></p>
			<h2><a href="{path}">{title}</a></h2>
		</header>
		<slot></slot>
		<div id="disqus_thread"></div>
		<script type="text/javascript">
			/**
			 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
			 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
			var disqus_config = function () {
				this.page.url = window.location.href
				var hrefSegments = window.location.pathname.split('/')
				var identifier = 'briantakita-' + hrefSegments[hrefSegments.length - 1]
				this.page.identifier = identifier
			};
			(function () { // DON'T EDIT BELOW THIS LINE
				var d = document, s = d.createElement('script')
				s.src = 'https://briantakita.disqus.com/embed.js'
				s.setAttribute('data-timestamp', +new Date());
				(d.head || d.body).appendChild(s)
			})()
		</script>
		<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  </div>
</section>

<style type="text/scss" global>
	body.post-detail > header {
		padding: 1rem 0;
		margin-bottom: 2rem;
	}
</style>
