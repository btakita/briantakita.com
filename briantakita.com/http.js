import {assign__env} from 'ctx-core/env'
import {assign} from 'ctx-core/object/lib'
import {use__log__request$time
      , use__echo} from 'ctx-core/koa/lib'
import use__error from 'ctx-core/error/koa'
import use__debug from 'ctx-core/debug/koa'
import koa from 'koa'
import throng from 'throng'
import {use__briantakita_com} from 'briantakita.com/koa'
import {log,info,debug} from 'ctx-core/logger/lib'
const app = new koa()
    , env = assign__env({app})
    , ctx = {app}
    , logPrefix = 'briantakita.com/http'
log(logPrefix)
assign(app, {proxy: true})
throng({
  workers: env.WEB_CONCURRENCY,
  lifetime: Infinity
}, start)
function start() {
  info(`${logPrefix}|start`)
  use__log__request$time(app)
  use__error(app)
  use__debug(app)
  use__briantakita_com(app)
  use__echo(app)
  app.listen(env.PORT)
  info(`${logPrefix}|started|port`, env.PORT)
  process.on('SIGTERM', () => {
    log(`Worker ${id} exiting...`)
    process.exit()
  })
}