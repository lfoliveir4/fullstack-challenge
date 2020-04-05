import { routes } from './routes';

import Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = 'hello word';
  return next();
});

app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(3333);
