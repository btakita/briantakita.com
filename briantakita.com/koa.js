import 'briantakita.com/env'
import static__koa from 'koa-static'
import {log,info,debug} from 'ctx-core/logger/lib'
const logPrefix = 'briantakita.com/koa'
log(logPrefix)
export default use__briantakita_com
export async function use__briantakita_com(app) {
  log(`${logPrefix}|use__briantakita_com`)
  app.use(static__koa(`${process.cwd()}/build`))
}