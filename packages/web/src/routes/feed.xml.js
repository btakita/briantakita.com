import { domain } from '@briantakita/web/src/domain/lib'
import { escape__html } from '@ctx-core/html'
import { _a1__post } from './posts/_lib'
export async function get(req, res) {
	const a1__post = await _a1__post()
	const xml = `
<?xml version="1.0" encoding="utf-8" ?>
<rss
	version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
>
	<channel>
		<title>Brian Takita</title>
		<atom:link
			href="${domain}/feed.xml"
			rel="self"
			type="application/rss+xml"/>
		${escape__html(`<link>${domain}</link>`)}
		<description>Mission: Expand Consciousness</description>
		<pubDate>${new Date(a1__post[0].date).toUTCString()}</pubDate>
		<language>en</language>
		${a1__post.map(post => `
			<item>
				<title>${escape__html(post.frontmatter.title)}</title>
				${escape__html(`<link>${domain}${post.path}</link>`)}
				<pubDate>${new Date(post.date).toUTCString()}</pubDate>
				<guid isPermaLink="true">${domain}${post.path}</guid>
				<author>${post.frontmatter.author}</author>
				<description>${escape__html(post.intro)}</description>
			</item>
		`)}
	</channel>
</rss>
	`.trim()
	const headers = {
		'Content-Type': 'application/rss+xml'
	}
	if (process.env.NODE_ENV !== 'development') {
		headers['Cache-Control'] = `max-age=${5 * 60 * 1e3}` // 5 minutes
	}
	res.writeHead(200, headers)
	res.end(xml)
}
