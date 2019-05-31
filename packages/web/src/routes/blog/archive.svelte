<script context="module">
	export async function preload({ params, query }) {
		const response = await this.fetch('posts.json')
		const a1__post = await response.json()
		return { a1__post }
	}
</script>

<script>
	import { a1__month__abbrev } from '@ctx-core/date'
	const lineHeight = 2.2
	export let a1__post
	let __year__a1__post
	let __year__month__a1__post
	let a1__year
	let date
	$: {
		const __year__a1__post__ = {}
		for (let i = a1__post.length - 1; i; i--) {
			const post = a1__post[i]
			const year = new Date(post.date).getFullYear()
			const a1__post__ = __year__a1__post__[year] || (__year__a1__post__[year] = [])
			a1__post__.push(post)
		}
		__year__a1__post = __year__a1__post__
	}
	$: {
		const __year__month__a1__post__ = {}
		for (let year in __year__a1__post) {
			const a1__post__BY__month = __year__month__a1__post__[year] || {}
			__year__month__a1__post__[year] = a1__post__BY__month
			const posts__year = __year__a1__post[year]
			for (let i = 0; i < posts__year.length; i++) {
				const post = posts__year[i]
				const month = new Date(post.date).getMonth()
				const a1__post__ = a1__post__BY__month[month] || (a1__post__BY__month[month] = [])
				a1__post__.push(post)
			}
		}
		__year__month__a1__post = __year__month__a1__post__
	}
	$: a1__year = Object.keys(__year__a1__post)
	function last(list, i) {
		return list.length - 1 == i
	}
	function height(a1__post) {
		return lineHeight * a1__post.length
	}
</script>

<section class="archive">
	<h2>Archive</h2>
	<ul>
		{#each a1__year as year, i}
			<li class="year">
				<span
					style="line-height: {height(__year__a1__post[year])}em;"
					class="year-label {last(a1__year, i) ? 'last' : ''}"
				>{year}</span>
				<ul>
					{#each Object.keys(__year__month__a1__post[year]) as month, j}
						<li
							class="month"
							style="height: {height(__year__month__a1__post[year][month])};"
						>
							<span
								style="line-height: {height(__year__month__a1__post[year][month])};"
								class="month-label {last(__year__month__a1__post[year], j) ? 'last' : ''}"
							>{a1__month__abbrev[month]}</span>
							{#each __year__month__a1__post[year][month] as post, k}
								<a href="{post.url}"
									 style="line-height: {height(__year__month__a1__post[year][month])}em;"
									 class="{last(__year__month__a1__post[year][month], k) ? 'last' : ''}"
								>{post.metadata.title}</a>
							{/each}
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</section>

<style type="text/scss">
	.archive {
		width: 80%;
		margin: 0 auto;
		padding: 0 0 0 2em;
		* {
			float: none !important;
			line-height: 1.6 !important;
			width: auto !important;
			height: auto !important;
			text-align: left !important;
			border: 0 !important;
			margin: 0 !important;
		}
		h2 {
			font-size: 2em;
			margin: 0;
			margin-left: 6.1em;
			margin-bottom: 0.5em;
			font-style: italic;
		}
		a, span {
			display: block;
			float: left;
			border-bottom: 1px solid #d2d2d2;
			margin-bottom: -1px;
			text-decoration: none;
			&.last {
				border: 0;
				margin-bottom: 0;
			}
		}
		a {
			width: 75%;
			text-indent: 1em;
			white-space: nowrap;
		}
		.year-label, .month-label {
			width: 4em;
			font-variant: small-caps;
			text-transform: lowercase;
			font-weight: 400;
			text-rendering: auto;
			letter-spacing: 1px;
			text-align: center;
		}
		.month-label {
			width: 7em;
		}
		ul {
			list-style: none;
			margin: 0;
			li {
				margin: 0;
			}
		}
	}
</style>