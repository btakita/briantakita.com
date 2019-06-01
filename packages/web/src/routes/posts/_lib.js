import fs from 'fs'
import { extname, basename } from 'path'
import { promisify } from 'util'
import { domain } from '../_domain/lib'
import { map, compact, sort } from '@ctx-core/array'
import { hljs } from '../_highlight.js/lib'
import {
	_frontmatter__content,
	_html__markdown,
} from '@ctx-core/markdown'
const exists = promisify(fs.exists)
const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const glob = promisify(require('glob'))
export async function _post(txt__path) {
	if (extname(txt__path) !== '.md') return
	if (!(await exists(txt__path))) return
	const slug = basename(txt__path, '.md')
	const markdown = await readFile(txt__path, 'utf-8')
	const { frontmatter, content } = _frontmatter__content(markdown)
	const html = _html__markdown(content, hljs)
	const [intro] = html.split(/<!--\s*more\s*-->/)
	const path = `/posts/${slug}`
	const url = `${domain}${path}`
	return {
		html,
		intro,
		frontmatter,
		slug,
		date: new Date(frontmatter.date),
		txt__date: frontmatter.date,
		path,
		url,
	}
}
export async function _a1__post() {
	const a1__file = await glob('src/routes/posts/!(__draft__)*.md')
	const a1__post =
		sort(
			compact(await Promise.all(map(a1__file, _post))),
			(a, b) => {
				return a.date < b.date ? 1 : -1
			}
		)
	return a1__post
}
