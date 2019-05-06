import fs from 'fs'
import { extname } from 'path'
import { promisify } from 'util'
import { domain } from '@briantakita/web/src/domain/lib'
import { compact } from '@ctx-core/array'
import { hljs } from '@briantakita/web/src/highlight.js/lib'
import {
	_obj__metadata__content,
	_html__markdown,
} from '@ctx-core/markdown'
const exists = promisify(fs.exists)
const readFile__promise = promisify(fs.readFile)
const promise__readdir = promisify(fs.readdir)
export async function _post(file) {
	if (extname(file) !== '.md') return
	const txt__path = `${process.cwd()}/content/posts/${file}`
	if (!(await exists(txt__path))) return
	const markdown = await readFile__promise(txt__path, 'utf-8')
	const { content, metadata } = _obj__metadata__content(markdown)
	const html = _html__markdown(content, hljs)
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
		txt__date: metadata.date,
		path,
		url,
	}
}
export async function _a1__post() {
	const a1__file = await promise__readdir('content/posts')
	const a1__post =
		compact(await Promise.all(a1__file.map(_post)))
			.sort((a, b) => {
				return a.date < b.date ? 1 : -1
			})
	return a1__post
}
