<style type="text/scss" global>
@import '~@briantakita/css/variables';
* {
	@import '~highlight.js/styles/dracula';
}
* {
	box-sizing: border-box;
}
html {
	opacity: 0;
	&.wf-active {
		opacity: 1;
	}
}
body {
	font-family: 'Open Sans', arial, sans-serif;
	font-size: 21px;
	line-height: 1.52;
	background-color: $color__body;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	color: $color__text;
	@media (min-width: 1600px) {
		font-size: 26px;
	}
	@media (max-width: 900px) {
		font-size: 18px;
	}
}
body, a {
	color: $color__text;
}
.content-wrap {
	width: 100%;
	margin: 0 auto;
	padding: 0 1em;
	@media (min-width: $width__nav__slider) {
		width: 60rem;
		padding: 0;
	}
}
h1, h2, h3, h4, h5, h6, p, body, a, img, blockquote, pre {
	margin: 0;
	padding: 0;
	border: 0;
}
h1 {
	font-size: 2em;
	margin-bottom: 1em;
	text-align: center;
}
h2 {
	font-size: 1.6em;
	font-weight: 400;
	line-height: 1.43;
}
h3 {
	font-style: italic;
	font-weight: 400;
	font-size: 1.4em;
	margin-top: 1.8em;
	margin-bottom: 0.8em;
}
blockquote {
	margin: 1.2em 3em;
	padding-left: 1em;
	font-style: italic;
}
hr {
	border: 0;
	border-top: 1px dashed #d2d2d2;
	height: 0;
	margin: 1.6em 0;
}
iframe {
	display: block;
	margin: 0 auto;
}
p, ul {
	margin-bottom: 1.52em;
}
a {
	&:hover {
		text-decoration: underline;
	}
}
.content {
	header {
		border-top: 1px dashed #d2d2d2;
		margin: 0.7rem 0 0;
		h2 {
			font-style: italic;
			text-align: center;
			font-weight: 400;
			margin: 0.8em 0;
			font-size: 1.4em;
			a {
				text-decoration: none;
			}
		}
		.date {
			text-align: center;
			font-size: 0.8em;
			margin-top: -0.7em;
			text-rendering: auto;
			letter-spacing: 1px;
			font-variant: small-caps;
			text-transform: lowercase;
			font-weight: 400;
			span {
				background-color: $color__highlight__text;
				padding: 0 0.7em;
			}
		}
	}
}
.post {
	margin: 1em 0 2.5em;
	hr.more {
		display: none;
	}
	code {
		font-family: 'Anonymous Pro', monospace;
		font-size: 0.85em;
		&.lang-markdown {
			color: #424242;
			.header, .strong {
				font-weight: bold;
			}
			&.emphasis {
				font-style: italic;
			}
			.horizontal_rule, .link_label, .code, .header, .link_url {
				color: #555;
			}
			.blockquote, .bullet {
				color: #bbb;
			}
		}
	}
	pre {
		padding: 0 0 1em;
		code {
			display: block;
			line-height: 1.1;
		}
	}
	p {
		code, .code {
			padding: 0.1em 0.3em 0.2em;
			border-radius: 0.3em;
			position: relative;
			top: -0.15em;
			color: #fff;
			white-space: nowrap;
		}
	}
}
img {
	width: 100%;
}
</style>
