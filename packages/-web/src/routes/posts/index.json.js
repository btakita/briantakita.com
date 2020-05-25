import { _a1__post } from '@briantakita/posts'
export async function get(req, res) {
	let json
	if (process.env.NODE_ENV !== 'production') {
		json = JSON.stringify(await _a1__post())
	}
	const headers = {
		'Content-Type': 'application/json',
	}
	if (process.env.NODE_ENV !== 'development') {
		headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}` // 5 minutes
	}
	res.writeHead(200, headers)
	res.end(json)
}
