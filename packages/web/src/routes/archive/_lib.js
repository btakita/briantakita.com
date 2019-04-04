import { readdirSync } from 'fs'
import { basename } from 'path'
import { filter, map, reduce, _first } from '@ctx-core/array'
const arr__fs_path__dir = readdirSync('src/routes/archive')
export const arr__fs_path__archive =
	map(
		filter(arr__fs_path__dir,
			fs_path => /[0-9\-]+\.html$/.exec(fs_path)),
		basename__archive => `src/routes/archive/_${basename__archive}`
	)
export const arr__archive_id =
	map(
		arr__fs_path__archive,
		fs_path =>
			basename(fs_path, '.html').replace(/^_/, '')
	).sort().reverse()
export const arr__path__archive =
	map(
		arr__archive_id,
		archive_id => `/archive/${archive_id}`
	)
export const archive_id__latest = _first(arr__archive_id)