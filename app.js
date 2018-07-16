const Koa = require('koa');
const loggerAsync = require('./middleware/logger-async');
const path = require('path');
const static = require('koa-static');
const koaBody = require('koa-body');
const app = new Koa();
const session = require('koa-session');
const router = require('koa-router')(); // is a function!
const controller = require('./controller/index');
const port = 8686;

app.keys = ['lelysion'];

const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
}

app.use(koaBody());
app.use(session(CONFIG, app));
// you need to using use router.routes()
app.use(controller.routes());

// use static files
app.use(loggerAsync()); // use self middleware
const staticPath = './build';
app.use(static(
  path.join(__dirname, staticPath)
))


// use native koa for cookie
// app.use( async (ctx, next) => {
//   if ( ctx.path === '/favicon.ico') return;

//   let n = ctx.session.views || 0;
//   ctx.session.views = ++n;
//   ctx.body = 'you have been here ' + n + ' times';
//   await next();
// })

// router.get('/hello/:name', async (ctx, next) => {
//   let name = ctx.params.name;
//   ctx.response.body = `Hello, ${name}!`;
// })

app.listen(port, () => {
  console.log('server start in ' + port);
});
