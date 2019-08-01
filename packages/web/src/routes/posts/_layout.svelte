<script context="module">
	export async function preload({ path, params, query, }) {
		return {
			path,
		}
	}
</script>
<script>
	import { basename } from 'path'
	import { __class__layout, __prepend__footer } from '@briantakita/layout/store'
	import Date__Local from '@ctx-core/date/Date__Local.svelte'
	import Disqus from '@ctx-core/disqus/Disqus.svelte'
	import { __subheader } from '@briantakita/layout/store'
	import { __frontmatter } from '@ctx-core/markdown/store'
	export let path
	export let segment
	__class__layout.set('post-detail')
	__prepend__footer.set(`<div class="nav"><a href="/"> « Full blog</a></div>`)
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
		<Disqus account="briantakita" identifier="briantakita-{basename(path)}"></Disqus>
  </div>
</section>

<style type="text/scss" global>
	body.post-detail > header {
		padding: 1rem 0;
		margin-bottom: 2rem;
	}
</style>
