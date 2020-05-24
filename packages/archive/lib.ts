import { basename } from 'path'
import { map, _first } from '@ctx-core/array'
import { sync as globSync } from 'glob'
const a1__fs_path__archive = globSync('src/routes/archive/[0-9]*.md')
export const a1__archive_id =
	map(
		a1__fs_path__archive,
		fs_path =>
			basename(fs_path, '.md')
	).sort().reverse()
export const a1__path__archive =
	map(
		a1__archive_id,
		archive_id => `/archive/${archive_id}`
	)
export const archive_id__latest = _first(a1__archive_id)
