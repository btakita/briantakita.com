<script context="module">
	export async function preload({ query, params }) {
		const response = await this.fetch('/archive.json')
		const json = await response.json()
		const { a1__archive_id } = json
		return {
			a1__archive_id
		}
	}
</script>

<script>
	import { __prepend__footer } from '@briantakita/web/src/layout/store'
	import Archive from '@briantakita/web/src/routes/archive/latest.svelte'
	import Previous from '@briantakita/web/src/routes/archive/previous.svelte'
	export let segment = ''
	export let a1__archive_id
	__prepend__footer.set(`<div class="nav"><a href="/archive"> « Archive</a></div>`)
</script>

<Archive></Archive>
<Previous></Previous>
