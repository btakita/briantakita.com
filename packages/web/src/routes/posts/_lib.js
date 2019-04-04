import fs from 'fs'
import { extname } from 'path'
import { promisify } from 'util'
import { domain } from '@briantakita/web/src/domain/lib'
import { process_markdown } from '@briantakita/web/src/markdown/lib'
import { compact } from '@ctx-core/array'
const marked = require('marked')
import hljs from '@briantakita/web/src/highlight.js/lib'
const readFile__promise = promisify(fs.readFile)
const promise__readdir = promisify(fs.readdir)
export async function _post(file) {
	if (extname(file) !== '.md') return
	const markdown = await readFile__promise(`content/posts/${file}`, 'utf-8')
	const { content, metadata } = process_markdown(markdown)
	const date = new Date(`${metadata.pubdate} EDT`) // cheeky hack
	const renderer = new marked.Renderer()
	renderer.code = (source, lang) => {
		const highlighted = hljs.highlight(lang, source).value
		return `<pre><code>${highlighted}</code></pre>`
	}
	const html = marked(content.replace(/^\t+/gm, match => match.split('\t').join('  ')), {
		renderer
	})
	const idx__more__ = html.indexOf('<hr class="more"/>')
	const idx__more = idx__more__ > -1 ? idx__more__ : null
	metadata.intro = html.slice(0, idx__more)
	const slug = file.replace(/^[\d-]+/, '').replace(/\.md$/, '')
	const path = `/posts/${slug}`
	const url = `${domain}${path}`
	return {
		html,
		metadata,
		slug,
		date: new Date(metadata.date),
		path,
		url,
	}
}
export async function _arr__post() {
	const arr__file = await promise__readdir('content/posts')
	const arr__post =
		compact(await Promise.all(arr__file.map(_post)))
			.sort((a, b) => {
				return a.date < b.date ? 1 : -1
			})
	return arr__post
}
