import fs from 'fs'
import { extname } from 'path'
import { promisify } from 'util'
import { domain } from '@briantakita/web/src/domain/lib'
import { compact } from '@ctx-core/array'
import hljs from '@briantakita/web/src/highlight.js/lib'
import {
	_obj__metadata__content,
	_html__content__markdown,
} from '@ctx-core/markdown'
const readFile__promise = promisify(fs.readFile)
const promise__readdir = promisify(fs.readdir)
export async function _post(file) {
	if (extname(file) !== '.md') return
	const markdown = await readFile__promise(`content/posts/${file}`, 'utf-8')
	const { content, metadata } = _obj__metadata__content(markdown)
	const html = _html__content__markdown(content, hljs)
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
export async function _arr__post() {
	const arr__file = await promise__readdir('content/posts')
	const arr__post =
		compact(await Promise.all(arr__file.map(_post)))
			.sort((a, b) => {
				return a.date < b.date ? 1 : -1
			})
	return arr__post
}

