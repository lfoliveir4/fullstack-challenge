import { execute } from 'graphql-api-koa';
import { schema } from './graphql/index';

import BodyParser = require('koa-bodyparser');

import Router = require('@koa/router');

const routes = new Router();

routes.use(BodyParser);

routes.get('/', (ctx, next) => {
  ctx.body = 'hellooooooooow';
  return next();
});

routes.post(
  '/graphql',
  execute({
    schema,
  }),
);

export { routes };
