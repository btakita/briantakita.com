import { a1__archive_id, archive_id__latest } from './_lib'
export async function get(req, res) {
	const headers = {
		'Content-Type': 'application/json',
	}
	if (process.env.NODE_ENV !== 'development') {
		headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}` // 5 minutes
	}
	res.writeHead(200, headers)
	res.end(JSON.stringify({ a1__archive_id, archive_id__latest }))
}