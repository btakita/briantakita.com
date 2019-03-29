import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server.mjs'
import express from 'express'
const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'
polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		express.json(),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.error('error', err)
	})
