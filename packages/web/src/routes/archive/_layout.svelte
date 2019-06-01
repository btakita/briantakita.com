<script>
	import { __frontmatter } from '@ctx-core/markdown/store'
	import Date__Local from '@ctx-core/date/Date__Local.svelte'
	$: date = $__frontmatter && $__frontmatter.date
	$: title = $__frontmatter && $__frontmatter.title
</script>

<header>
	<p class="date"><span><Date__Local {date}></Date__Local></span></p>
	<h2>{title}</h2>
</header>

<slot></slot>
