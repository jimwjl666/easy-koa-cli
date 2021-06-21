const koa = require("koa")
const Router = require("koa-router")
const serve = require("koa-static")
const koaBody = require("koa-body")
const app = new koa()
app.use(serve(__dirname+"/static"))
app.use(koaBody({
  multipart:true
}))
const router = new Router()
router.get('/',(ctx)=>{
  ctx.body =  JSON.stringify({name:'zs'})
})
app.use(router.routes())
app.listen(8080,()=>{
  console.log('open server localhost:8080')
})
