<script>
	import A from '@ctx-core/a__target/A__Target.svelte'
</script>

<h1>Portfolio</h1>

<h2><A href="https://esg.censible.co">esg.censible.co — Company lookup tool</A></h2>
<p>
	Client can lookup a public company or related security to see ESG scores & the ESG score of industry peers.
</p>

<h2><A href="https://esg.censible.co/company-etf-and-mutual-fund-rankings/women-in-leadership">Women In Leadership Report</A></h2>
<p>
	Market survey of Women in corporate leadership positions.
	Scoring methodology applied to Aggregate analysis, Best Performing Companies, Best Performing Large Companies,
		Worst Performing Companies, Best & Worst Performing Funds,
		Largest Funds, & Socially Responsible Funds.
</p>

<h2><A href="https://censible.co">censible.co</A></h2>
<p>
	Censible.co's main site.
</p>

<h2><A href="https://esg.censible.co/rebalance">Censible Portfolio Rebalance Tool</A></h2>
<p>
	Progressive Web App that enables the client to upload their portfolio from a CSV file
		and rebalance their portfolio based on ESG metrics compared to an Index Fund benchmark.
	The client can select
		<A href="https://www.investopedia.com/terms/e/environmental-social-and-governance-esg-criteria.asp">ESG</A>
		Issue criteria (for scoring) & binary restriction criteria to identify securities that
		that cross ethical boundaries.
	This app uses a market value weighted color bar, based on segmented scores,
		to indicate the areas of improvement.
	Client can search for securities to add or replace based on Name, Industry Peers, Industry Sectors,
		Market Cap Groups, Geographic Regions, & Economic Regions.
	Shows which positions to trade to obtain a desired ESG outcome.
	Also contains a printable report and industry sector analysis of the portfolio & benchmark fund.
</p>


<h2><A href="https://bloomfieldnetworks.com/">Bloomfield Networks</A></h2>
<p>
	Business site for provider of Cloud PBX & IT services.
	Includes custom "Request Free Consultation" form that utilizes <A href="https://www.mailgun.com/">Mailgun</A>.
	Also includes custom carousel highlighting services provided.
	Deployed on Amazon Lambda for inexpensive hosting.
</p>

<h2><A href="https://mudhoestudio.com/">Mudhoe Studio</A></h2>
<p>
	Pottery studio & artist site highlighting artist info, pottery, & classes.
	Includes a custom
		<A href="https://github.com/ctx-core/ctx-core/tree/master/packages/instagram_cache">
			Instagram Image gallery component
		</A>
		with web scraped cache to populate images.
	Also includes custom
		<A href="https://github.com/ctx-core/ctx-core/tree/master/packages/etsy_cache">
			Etsy store component
		</A>
		with api cache.
	Deployed on Amazon Lambda for inexpensive hosting.
</p>

<h2>briantakita.com - <A href="https://github.com/btakita/briantakita.com">Source Code</A></h2>
<p>
	Personal website that includes:
</p>
<ul>
	<li><A href="/app/briantakita.com/static">microblog</A> with archives</li>
	<li><A href="/blog">blog</A> with archives</li>
</ul>
<p>
	Created a static website builder using svelte, sapper,
		& build scripts to automate export & deployment to <A href="https://pages.github.com/">Github Pages</A>.
</p>

<h2><A href="https://github.com/ctx-core/ctx-core">ctx-core</A></h2>
<p>
	A Composable <A href="https://en.wikipedia.org/wiki/Monorepo">Monorepo</A> library
		written for my preferred toolchain of
		<A href="https://nodejs.org">node.js</A>,
		<A href="https://v3.svelte.technology/">Svelte</A>,
		<A href="https://sapper.svelte.technology/">Sapper</A>,
		<A href="https://lernajs.io/">Lerna</A>.
	It can also be extended to use other toolchains.
	Organizations can have their own monorepo,
		compose their own set of packages including ctx-core as a git external.
</p>

<b>Motivation</b>
<p>
	After maintaining several applications, I ran into the issues of:
</p>
<ul>
	<li>quickly creating & iterating on features</li>
	<li>extracting code to reuse</li>
	<li>time to refactor code</li>
	<li>time to upgrade software</li>
	<li>gluing together small libraries & snippets</li>
</ul>

<p>
	Using existing solutions such as frameworks or libraries provides the benefit of quickly getting started,
		however there is a maintenance burden of:
</p>
<ul>
	<li>large payload size & memory usage</li>
	<li>extending the underlying software to fulfill requirements</li>
	<li>time to upgrade the application with the underlying libraries</li>
	<li>domain language mismatch between the library/framework</li>
</ul>
<p>
	I found that there are usually small libraries & code snippets that can be glued together
		with a <A href="/posts/naming-conventions">naming convention</A>
		that utilizes unique, immutable, & composable names.
	As a result, one could find all usages of an entity or concept by doing a project-wide search.
	Rename refactorings were more accurate & comprehensive due to the uniqueness of names.
	Composable naming allows one to understand the context & full description of the entity.
</p>

<h2>Interested in Web Services?</h2>
<p>
	If you are interested in having me build your app, you can
		<a href="mailto:brian.takita@gmail.com?subject=App Consultation from Portfolio">email me</a>.
</p>
