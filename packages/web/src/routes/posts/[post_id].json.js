import { _post } from './_lib'
export async function get(req, res) {
	let post
	const { post_id } = req.params
	if (process.env.NODE_ENV !== 'production') {
		post = await _post(`${post_id}.md`)
		if (!post) {
			res.writeHead(404, {})
			res.end()
			return
		}
	}
	const headers = {
		'Content-Type': 'application/json',
	}
	if (process.env.NODE_ENV !== 'development') {
		headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}` // 5 minutes
	}
	res.writeHead(200, headers)
	res.end(JSON.stringify(post))
}1