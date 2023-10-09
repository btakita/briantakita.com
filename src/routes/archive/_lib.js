import { readdirSync } from 'fs'
import { basename } from 'path'
import { filter, map, reduce, _first } from '@ctx-core/array'
const a1__fs_path__dir = readdirSync('src/routes/archive')
export const a1__fs_path__archive =
	map(
		filter(a1__fs_path__dir,
			fs_path => /[0-9\-]+\.html$/.exec(fs_path)),
		basename__archive => `src/routes/archive/_${basename__archive}`
	)
export const a1__archive_id =
	map(
		a1__fs_path__archive,
		fs_path =>
			basename(fs_path, '.svelte').replace(/^_/, '')
	).sort().reverse()
export const a1__path__archive =
	map(
		a1__archive_id,
		archive_id => `/archive/${archive_id}`
	)
export const archive_id__latest = _first(a1__archive_id)
