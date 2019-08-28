/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-ignore
const proxy = require('http-proxy-middleware');

const target = process.env.REACT_APP_PROXY;
const apiPrefix = process.env.REACT_APP_API_BASE;

module.exports = app =>
  app.use(proxy(apiPrefix, { target, changeOrigin: true }));
