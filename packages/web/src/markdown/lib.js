// See https://github.com/sveltejs/sapper.svelte.technology/blob/master/src/routes/guide/_process_markdown.js
export function process_markdown(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown)
	const frontMatter = match[1]
	const content = markdown.slice(match[0].length)
	const metadata = {}
	frontMatter.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':')
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim()
	})
	return { metadata, content }
}