<script context="module">
export async function preload({ params, query }) {
	const response = await this.fetch('/archive.json')
	const json = await response.json()
	const { a1__archive_id } = json
	return {
		a1__archive_id
	}
}
</script>

<script>
export let segment
export let a1__archive_id
</script>

<h2>Archive</h2>

{#each a1__archive_id as archive_id}
	<div><a href="/archive/{archive_id}">{archive_id}</a></div>
{/each}
