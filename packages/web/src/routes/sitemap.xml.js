import { domain } from '@briantakita/web/src/domain/lib'
import { _arr__post } from './posts/_lib'
export async function get(req, res) {
	const ARR__post = await _arr__post()
	const xml = `
<?xml version="1.0" encoding="utf-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${domain}/</loc>
		<priority>0.5</priority>
	</url>
	${ARR__post.map(post => `
	<url>
		<loc>${domain}${post.path}</loc>
		<priority>0.5</priority>
	</url>
	`.trim())}
</urlset>
	`.trim()
	const headers = {
		'Content-Type': 'application/xml'
	}
	if (process.env.NODE_ENV !== 'development') {
		headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}` // 5 minutes
	}
	res.writeHead(200, headers)
	res.end(xml)
}
