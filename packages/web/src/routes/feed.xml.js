import { domain } from '@briantakita/web/src/domain/lib'
import { _ARR__post } from './posts/_lib'
export async function get(req, res) {
	const ARR__post = await _ARR__post()
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
			href="{domain}/feed.xml"
			rel="self"
			type="application/rss+xml"/>
		{\`<link>${domain}</link>\`}
		<description>Mission: Expand Consciousness</description>
		<pubDate>{new Date(ARR__post[0].date).toUTCString()}</pubDate>
		<language>en</language>
		${ARR__post.map(post => `
			<item>
				<title>${post.metadata.title}</title>
				{\`<link>${domain}${post.path}</link>\`}
				<pubDate>${new Date(post.date).toUTCString()}</pubDate>
				<guid isPermaLink="true">${domain}${post.path}</guid>
				<author>${post.metadata.author}</author>
				<description>${post.metadata.intro}</description>
			</item>
		`)}
	</channel>
</rss>
	`.trim
	res.writeHead(200, {
		'Cache-Control': `max-age=${30 * 60 * 1e3}`,
		'Content-Type': 'application/rss+xml'
	})
	res.end(xml)
}
